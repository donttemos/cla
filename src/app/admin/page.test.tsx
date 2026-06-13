import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { getAllCalculators } from "@/lib/content";
import AdminPage from "./page";

async function renderAdminPageText(): Promise<string> {
  const element = await Promise.resolve(AdminPage());
  const markup = renderToStaticMarkup(element as React.ReactElement);

  return markup.replace(/\s+/g, " ").trim();
}

describe("admin page", () => {
  it("renders the document-required admin functions and content metrics", async () => {
    const text = await renderAdminPageText();

    expect(text).toContain("Create Calculator");
    expect(text).toContain("Edit Calculator");
    expect(text).toContain("Delete Calculator");
    expect(text).toContain("Create Blog");
    expect(text).toContain("Manage Categories");
    expect(text).toContain("SEO Metadata");
    const all = await getAllCalculators();
    expect(text).toContain(String(all.length));
    expect(text).toContain("Selected workflow");
    expect(text).not.toContain("disabled");
  });
});
