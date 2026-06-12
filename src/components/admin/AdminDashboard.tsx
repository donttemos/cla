"use client";

import useSWR from "swr";
import { Loader2, Plus, Edit2, Trash2, ExternalLink } from "lucide-react";
import { AdminActionControls } from "./AdminActionControls";
import { useState } from "react";
import { EditCalculatorModal } from "./EditCalculatorModal";

type AdminApiResponse<T> = {
  data?: T[];
};

type AdminCategory = {
  id: string;
  name: string;
};

type AdminCalculator = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  lang?: string;
  description: string;
  featured: boolean;
  status: number;
};

type AdminBlogPost = {
  id: string;
};

const fetcher = async <T,>(url: string): Promise<AdminApiResponse<T>> => {
  const response = await fetch(url);
  return response.json();
};

export function AdminDashboard() {
  const { data: calculatorsData, error: calculatorsError, mutate: mutateCalculators } = useSWR<AdminApiResponse<AdminCalculator>>("/api/admin/calculators", fetcher);
  const { data: categoriesData } = useSWR<AdminApiResponse<AdminCategory>>("/api/admin/categories", fetcher);
  const { data: blogPostsData } = useSWR<AdminApiResponse<AdminBlogPost>>("/api/admin/blog-posts", fetcher);

  const [editingCalculator, setEditingCalculator] = useState<AdminCalculator | null>(null);
  const [langFilter, setLangFilter] = useState<string>("all");

  const calculators = (calculatorsData?.data || []).filter((c) => langFilter === "all" || c.lang === langFilter);
  const categories = categoriesData?.data || [];
  const blogPosts = blogPostsData?.data || [];

  const isLoading = !calculatorsData && !calculatorsError;

  const stats = [
    { label: "Calculators", value: calculators.length.toString(), note: "Database records" },
    { label: "Categories", value: categories.length.toString(), note: "Active categories" },
    { label: "Blog Posts", value: blogPosts.length.toString(), note: "Articles" },
    { label: "Featured", value: calculators.filter((c) => c.featured).length.toString(), note: "Highlighted tools" },
  ];

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/calculators/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        mutateCalculators();
      } else {
        const error = await res.json();
        alert(`Failed to delete: ${error.error?.message || "Unknown error"}`);
      }
    } catch {
      alert("An unexpected error occurred.");
    }
  }

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-400" />
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Stats Grid */}
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="cv-surface p-5">
            <dt className="text-xs font-bold uppercase tracking-widest text-zinc-400">{stat.label}</dt>
            <dd className="mt-3 text-3xl font-bold tracking-tighter text-zinc-950">{stat.value}</dd>
            <p className="mt-1 text-xs font-medium text-zinc-500">{stat.note}</p>
          </div>
        ))}
      </dl>

      {/* Main Content Area */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Calculators List */}
        <section className="lg:col-span-2 space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold tracking-tight text-zinc-950">Calculators</h2>
              <select 
                value={langFilter}
                onChange={(e) => setLangFilter(e.target.value)}
                className="rounded-md border border-zinc-200 bg-white px-2 py-1 text-xs focus:border-zinc-950 focus:outline-none"
              >
                <option value="all">All Languages</option>
                <option value="en">English</option>
                <option value="zh">Chinese</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="ja">Japanese</option>
              </select>
            </div>
            <AdminActionControls 
              sectionTitle="Create Calculator" 
              controls={["New calculator draft"]} 
              onSuccess={() => mutateCalculators()}
            />
          </div>
          
          <div className="cv-surface overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50 border-b border-zinc-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-zinc-900">Name</th>
                  <th className="px-4 py-3 font-semibold text-zinc-900">Lang</th>
                  <th className="px-4 py-3 font-semibold text-zinc-900">Category</th>
                  <th className="px-4 py-3 font-semibold text-zinc-900">Status</th>
                  <th className="px-4 py-3 text-right font-semibold text-zinc-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {calculators.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-zinc-500">
                      No calculators found for the selected filter.
                    </td>
                  </tr>
                ) : (
                  calculators.map((calc) => (
                    <tr key={calc.id} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="font-medium text-zinc-950">{calc.name}</div>
                        <div className="text-xs text-zinc-500">/{calc.slug}</div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-xs font-mono uppercase text-zinc-500">{calc.lang || "en"}</span>
                      </td>
                      <td className="px-4 py-3 text-zinc-600">
                        {categories.find((c) => c.id === calc.categoryId)?.name || "Unknown"}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`cv-badge ${calc.status === 1 ? "bg-green-50 text-green-700 border-green-200" : "bg-zinc-100 text-zinc-600"}`}>
                          {calc.status === 1 ? "Published" : "Draft"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right space-x-2">
                        <button 
                          title="Edit" 
                          onClick={() => setEditingCalculator(calc)}
                          className="p-1 text-zinc-400 hover:text-zinc-950 transition-colors"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button 
                          title="Delete" 
                          onClick={() => handleDelete(calc.id, calc.name)}
                          className="p-1 text-zinc-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <a href={`/${calc.slug}`} target="_blank" rel="noopener noreferrer" title="View" className="inline-block p-1 text-zinc-400 hover:text-zinc-950 transition-colors">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Categories & Tasks */}
        <aside className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-zinc-950">Categories</h2>
            <div className="cv-surface p-4 space-y-3">
              {categories.map((cat) => (
                <div key={cat.id} className="flex items-center justify-between text-sm">
                  <span className="font-medium text-zinc-700">{cat.name}</span>
                  <span className="text-zinc-400">{calculators.filter((c) => c.categoryId === cat.id).length} tools</span>
                </div>
              ))}
              <button className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-dashed border-zinc-200 py-2 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:border-zinc-400 hover:text-zinc-950 transition-all">
                <Plus className="h-3 w-3" />
                Add Category
              </button>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-zinc-950">System Status</h2>
            <div className="cv-surface p-4 space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Database</p>
                <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Connected
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Storage</p>
                <p className="text-sm font-medium text-zinc-950">Cloudflare D1 / MySQL</p>
              </div>
            </div>
          </section>
        </aside>
      </div>

      <EditCalculatorModal
        isOpen={!!editingCalculator}
        onClose={() => setEditingCalculator(null)}
        onSuccess={() => mutateCalculators()}
        calculator={editingCalculator}
        categories={categories}
      />
    </div>
  );
}
