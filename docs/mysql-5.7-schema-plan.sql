-- CalcVerse MySQL 5.7 schema plan
-- Source: 需求文档.md
-- Target: MySQL 5.7.8+, InnoDB, utf8mb4
--
-- Compatibility notes:
-- 1. MySQL 5.7 does not enforce CHECK constraints. Status values, slug format,
--    self-relations, and polymorphic target rules must be validated in app code.
-- 2. Native JSON columns make MySQL 5.7.8+ a hard prerequisite. For older
--    5.7 deployments, create a separate LONGTEXT fallback migration and validate JSON in application code.
-- 3. Slug unique indexes use VARCHAR(191) for safer utf8mb4 compatibility on
--    older 5.7/InnoDB index-length settings.
-- 4. ROW_FORMAT=DYNAMIC is specified to keep composite utf8mb4 indexes safer
--    on older MySQL 5.7 InnoDB configurations.

CREATE DATABASE IF NOT EXISTS calculator
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE calculator;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 1;

-- Shared status convention unless a table comment says otherwise:
-- 0=draft, 1=published/enabled, 2=archived/disabled.

CREATE TABLE IF NOT EXISTS categories (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(160) NOT NULL,
  slug VARCHAR(191) NOT NULL,
  description TEXT NULL,
  icon VARCHAR(80) NULL,
  seo_title VARCHAR(255) NOT NULL,
  seo_description VARCHAR(500) NOT NULL,
  canonical_path VARCHAR(255) NULL,
  sort_order INT UNSIGNED NOT NULL DEFAULT 0,
  status TINYINT UNSIGNED NOT NULL DEFAULT 1 COMMENT '0=draft,1=published,2=archived',
  created_by VARCHAR(191) NULL COMMENT 'Future Better Auth user id',
  updated_by VARCHAR(191) NULL COMMENT 'Future Better Auth user id',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uk_categories_slug (slug),
  KEY idx_categories_status_sort (status, sort_order, id)
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS calculators (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  category_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(180) NOT NULL,
  slug VARCHAR(191) NOT NULL,
  description TEXT NOT NULL,
  seo_title VARCHAR(255) NOT NULL,
  seo_description VARCHAR(500) NOT NULL,
  canonical_path VARCHAR(255) NULL COMMENT 'Nullable only when generated at runtime from slug',
  og_title VARCHAR(255) NULL COMMENT 'Nullable only when generated at runtime from seo_title',
  og_description VARCHAR(500) NULL COMMENT 'Nullable only when generated at runtime from seo_description',
  og_image_url VARCHAR(500) NULL,
  twitter_card VARCHAR(40) NOT NULL DEFAULT 'summary_large_image',
  featured TINYINT(1) NOT NULL DEFAULT 0,
  status TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '0=draft,1=published,2=archived',
  sort_order INT UNSIGNED NOT NULL DEFAULT 0,
  published_at DATETIME NULL,
  created_by VARCHAR(191) NULL COMMENT 'Future Better Auth user id',
  updated_by VARCHAR(191) NULL COMMENT 'Future Better Auth user id',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uk_calculators_slug (slug),
  KEY idx_calculators_category_status_sort (category_id, status, sort_order, id),
  KEY idx_calculators_featured_status (featured, status, sort_order, id),
  KEY idx_calculators_status_published (status, published_at, id),
  CONSTRAINT fk_calculators_category
    FOREIGN KEY (category_id) REFERENCES categories(id)
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS calculator_contents (
  calculator_id BIGINT UNSIGNED NOT NULL,
  formula TEXT NULL,
  content_summary TEXT NULL,
  body_md LONGTEXT NULL COMMENT 'Long SEO content: what it is, formula, examples, benefits, related tools',
  word_count INT UNSIGNED NOT NULL DEFAULT 0,
  structured_data_json JSON NULL COMMENT 'Nullable only when Schema.org WebApplication JSON-LD is generated at runtime',
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (calculator_id),
  CONSTRAINT fk_calculator_contents_calculator
    FOREIGN KEY (calculator_id) REFERENCES calculators(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Config stores only serializable calculator metadata.
-- JS calculate/validate functions stay in code and are referenced by handler_key.
-- MySQL 5.7/TXSQL compatibility: one active config per calculator is enforced
-- by application transactions because generated-column uniqueness can conflict
-- with foreign keys on some 5.7-compatible cloud variants.
CREATE TABLE IF NOT EXISTS calculator_configs (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  calculator_id BIGINT UNSIGNED NOT NULL,
  version INT UNSIGNED NOT NULL DEFAULT 1,
  handler_key VARCHAR(191) NOT NULL,
  config_json JSON NULL COMMENT 'Optional full config snapshot for admin preview/import',
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uk_calculator_configs_version (calculator_id, version),
  KEY idx_calculator_configs_active (calculator_id, is_active),
  KEY idx_calculator_configs_handler (handler_key),
  CONSTRAINT fk_calculator_configs_calculator
    FOREIGN KEY (calculator_id) REFERENCES calculators(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS calculator_inputs (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  config_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(120) NOT NULL,
  label VARCHAR(180) NOT NULL,
  input_type VARCHAR(30) NOT NULL COMMENT 'number,date,select; app validates allowed values',
  required TINYINT(1) NOT NULL DEFAULT 0,
  description TEXT NULL,
  placeholder VARCHAR(180) NULL,
  min_value DECIMAL(24,8) NULL,
  max_value DECIMAL(24,8) NULL,
  step_value DECIMAL(24,8) NULL,
  min_date DATE NULL,
  max_date DATE NULL,
  unit VARCHAR(40) NULL,
  default_value VARCHAR(191) NULL,
  sort_order INT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE KEY uk_calculator_inputs_config_name (config_id, name),
  KEY idx_calculator_inputs_config_sort (config_id, sort_order, id),
  CONSTRAINT fk_calculator_inputs_config
    FOREIGN KEY (config_id) REFERENCES calculator_configs(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS calculator_input_options (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  input_id BIGINT UNSIGNED NOT NULL,
  label VARCHAR(180) NOT NULL,
  value VARCHAR(191) NOT NULL,
  sort_order INT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE KEY uk_calculator_input_options_value (input_id, value),
  KEY idx_calculator_input_options_sort (input_id, sort_order, id),
  CONSTRAINT fk_calculator_input_options_input
    FOREIGN KEY (input_id) REFERENCES calculator_inputs(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS calculator_result_fields (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  config_id BIGINT UNSIGNED NOT NULL,
  name VARCHAR(120) NOT NULL,
  label VARCHAR(180) NOT NULL,
  unit VARCHAR(40) NULL,
  prefix VARCHAR(40) NULL,
  suffix VARCHAR(40) NULL,
  decimal_precision TINYINT UNSIGNED NULL,
  description TEXT NULL,
  sort_order INT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE KEY uk_calculator_result_fields_config_name (config_id, name),
  KEY idx_calculator_result_fields_sort (config_id, sort_order, id),
  CONSTRAINT fk_calculator_result_fields_config
    FOREIGN KEY (config_id) REFERENCES calculator_configs(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS calculator_faqs (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  calculator_id BIGINT UNSIGNED NOT NULL,
  question VARCHAR(500) NOT NULL,
  answer TEXT NOT NULL,
  sort_order INT UNSIGNED NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_calculator_faqs_calculator_sort (calculator_id, sort_order, id),
  CONSTRAINT fk_calculator_faqs_calculator
    FOREIGN KEY (calculator_id) REFERENCES calculators(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS blog_posts (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(191) NOT NULL,
  excerpt TEXT NULL,
  content_md LONGTEXT NULL,
  seo_title VARCHAR(255) NOT NULL,
  seo_description VARCHAR(500) NOT NULL,
  canonical_path VARCHAR(255) NULL,
  og_title VARCHAR(255) NULL,
  og_description VARCHAR(500) NULL,
  og_image_url VARCHAR(500) NULL,
  status TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '0=draft,1=published,2=archived',
  published_at DATETIME NULL,
  created_by VARCHAR(191) NULL COMMENT 'Future Better Auth user id',
  updated_by VARCHAR(191) NULL COMMENT 'Future Better Auth user id',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uk_blog_posts_slug (slug),
  KEY idx_blog_posts_status_published (status, published_at, id)
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS calculator_related_calculators (
  calculator_id BIGINT UNSIGNED NOT NULL,
  related_calculator_id BIGINT UNSIGNED NOT NULL,
  sort_order INT UNSIGNED NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (calculator_id, related_calculator_id),
  KEY idx_related_calculators_reverse (related_calculator_id, calculator_id),
  CONSTRAINT fk_crc_calculator
    FOREIGN KEY (calculator_id) REFERENCES calculators(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_crc_related
    FOREIGN KEY (related_calculator_id) REFERENCES calculators(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS calculator_blog_links (
  calculator_id BIGINT UNSIGNED NOT NULL,
  blog_post_id BIGINT UNSIGNED NOT NULL,
  relation_type VARCHAR(40) NOT NULL DEFAULT 'related' COMMENT 'primary,related,internal_link; app validates',
  sort_order INT UNSIGNED NOT NULL DEFAULT 0,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (calculator_id, blog_post_id, relation_type),
  KEY idx_cbl_blog_post (blog_post_id, relation_type, sort_order),
  CONSTRAINT fk_cbl_calculator
    FOREIGN KEY (calculator_id) REFERENCES calculators(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_cbl_blog_post
    FOREIGN KEY (blog_post_id) REFERENCES blog_posts(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS calculator_views_daily (
  calculator_id BIGINT UNSIGNED NOT NULL,
  view_date DATE NOT NULL,
  views BIGINT UNSIGNED NOT NULL DEFAULT 0,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (calculator_id, view_date),
  KEY idx_views_date_views (view_date, views),
  CONSTRAINT fk_views_daily_calculator
    FOREIGN KEY (calculator_id) REFERENCES calculators(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS redirects (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  source_path VARCHAR(191) NOT NULL,
  target_path VARCHAR(255) NOT NULL,
  status_code SMALLINT UNSIGNED NOT NULL DEFAULT 301,
  reason VARCHAR(255) NULL,
  active TINYINT(1) NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uk_redirects_source_path (source_path),
  KEY idx_redirects_active (active, id)
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS admin_audit_logs (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  actor_id VARCHAR(191) NULL COMMENT 'Future Better Auth user id',
  action VARCHAR(80) NOT NULL,
  entity_type VARCHAR(80) NOT NULL,
  entity_id BIGINT UNSIGNED NULL,
  before_json JSON NULL,
  after_json JSON NULL,
  ip_address VARCHAR(45) NULL,
  user_agent VARCHAR(500) NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_admin_audit_entity (entity_type, entity_id, created_at),
  KEY idx_admin_audit_actor (actor_id, created_at),
  KEY idx_admin_audit_action (action, created_at)
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS ad_placements (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  placement_key VARCHAR(191) NOT NULL,
  page_scope VARCHAR(40) NOT NULL COMMENT 'home,category,calculator,blog,global',
  slot_name VARCHAR(120) NOT NULL COMMENT 'hero_bottom,result_below,faq_middle,bottom_content,etc',
  provider VARCHAR(80) NOT NULL DEFAULT 'adsense',
  category_id BIGINT UNSIGNED NULL,
  calculator_id BIGINT UNSIGNED NULL,
  blog_post_id BIGINT UNSIGNED NULL,
  config_json JSON NULL,
  status TINYINT UNSIGNED NOT NULL DEFAULT 1 COMMENT '0=draft,1=enabled,2=disabled',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uk_ad_placements_key (placement_key),
  KEY idx_ad_placements_scope_status (page_scope, status, slot_name),
  KEY idx_ad_placements_category (category_id, status),
  KEY idx_ad_placements_calculator (calculator_id, status),
  KEY idx_ad_placements_blog (blog_post_id, status),
  CONSTRAINT fk_ad_placements_category
    FOREIGN KEY (category_id) REFERENCES categories(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT fk_ad_placements_calculator
    FOREIGN KEY (calculator_id) REFERENCES calculators(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT fk_ad_placements_blog
    FOREIGN KEY (blog_post_id) REFERENCES blog_posts(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS affiliate_links (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  link_key VARCHAR(191) NOT NULL,
  label VARCHAR(180) NOT NULL,
  target_url VARCHAR(1000) NOT NULL,
  disclosure TEXT NULL,
  category_id BIGINT UNSIGNED NULL,
  calculator_id BIGINT UNSIGNED NULL,
  blog_post_id BIGINT UNSIGNED NULL,
  status TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '0=draft,1=enabled,2=disabled',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uk_affiliate_links_key (link_key),
  KEY idx_affiliate_links_category (category_id, status),
  KEY idx_affiliate_links_calculator (calculator_id, status),
  KEY idx_affiliate_links_blog (blog_post_id, status),
  CONSTRAINT fk_affiliate_links_category
    FOREIGN KEY (category_id) REFERENCES categories(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT fk_affiliate_links_calculator
    FOREIGN KEY (calculator_id) REFERENCES calculators(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT fk_affiliate_links_blog
    FOREIGN KEY (blog_post_id) REFERENCES blog_posts(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Premium phase placeholders. Keep user identity as VARCHAR(191) so Better Auth
-- can own its own tables later without forcing this schema to predict them.
CREATE TABLE IF NOT EXISTS premium_features (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  slug VARCHAR(191) NOT NULL,
  name VARCHAR(180) NOT NULL,
  description TEXT NULL,
  status TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '0=planned,1=enabled,2=disabled',
  config_json JSON NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uk_premium_features_slug (slug),
  KEY idx_premium_features_status (status, id)
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS saved_calculations (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id VARCHAR(191) NOT NULL COMMENT 'Future Better Auth user id',
  calculator_id BIGINT UNSIGNED NULL COMMENT 'Preserve user-owned records if a calculator is physically purged',
  title VARCHAR(180) NULL,
  input_values_json JSON NOT NULL,
  result_json JSON NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_saved_calculations_user_created (user_id, created_at),
  KEY idx_saved_calculations_calculator (calculator_id, created_at),
  CONSTRAINT fk_saved_calculations_calculator
    FOREIGN KEY (calculator_id) REFERENCES calculators(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS calculation_history (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id VARCHAR(191) NULL COMMENT 'Nullable for anonymous history if product allows it',
  session_id VARCHAR(191) NULL,
  calculator_id BIGINT UNSIGNED NULL COMMENT 'Preserve user-owned history if a calculator is physically purged',
  input_values_json JSON NOT NULL,
  result_json JSON NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_calculation_history_user_created (user_id, created_at),
  KEY idx_calculation_history_session_created (session_id, created_at),
  KEY idx_calculation_history_calculator_created (calculator_id, created_at),
  CONSTRAINT fk_calculation_history_calculator
    FOREIGN KEY (calculator_id) REFERENCES calculators(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS pdf_exports (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id VARCHAR(191) NULL COMMENT 'Future Better Auth user id',
  saved_calculation_id BIGINT UNSIGNED NULL,
  calculator_id BIGINT UNSIGNED NULL COMMENT 'Preserve export records if a calculator is physically purged',
  file_key VARCHAR(500) NOT NULL COMMENT 'Cloudflare R2 object key',
  status TINYINT UNSIGNED NOT NULL DEFAULT 0 COMMENT '0=pending,1=ready,2=failed,3=expired',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  expires_at DATETIME NULL,
  PRIMARY KEY (id),
  KEY idx_pdf_exports_user_created (user_id, created_at),
  KEY idx_pdf_exports_status_created (status, created_at),
  KEY idx_pdf_exports_saved_calculation (saved_calculation_id),
  CONSTRAINT fk_pdf_exports_saved_calculation
    FOREIGN KEY (saved_calculation_id) REFERENCES saved_calculations(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT fk_pdf_exports_calculator
    FOREIGN KEY (calculator_id) REFERENCES calculators(id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE=InnoDB ROW_FORMAT=DYNAMIC DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

