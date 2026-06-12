"use client";

import { useState } from "react";
import { X, Loader2 } from "lucide-react";

type EditableCalculator = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  lang?: string;
  description: string;
  featured: boolean;
  status: number;
};

type EditCalculatorModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  calculator: EditableCalculator | null;
  categories: { id: string; name: string }[];
};

export function EditCalculatorModal({ isOpen, onClose, onSuccess, calculator, categories }: EditCalculatorModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen || !calculator) return null;

  const calculatorId = calculator.id;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      slug: formData.get("slug"),
      lang: formData.get("lang"),
      categoryId: Number(formData.get("categoryId")),
      description: formData.get("description"),
      seoTitle: formData.get("seoTitle"),
      seoDescription: formData.get("seoDescription"),
      status: Number(formData.get("status")),
      featured: formData.get("featured") === "on",
    };

    try {
      const response = await fetch(`/api/admin/calculators/${calculatorId}`, {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error?.message || "Failed to update calculator.");
      }

      onSuccess();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl shadow-zinc-900/10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-zinc-950">Edit Calculator</h2>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {error && (
          <div className="mb-6 rounded-md bg-red-50 p-4 text-sm font-medium text-red-800 border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-zinc-900">Name</label>
              <input
                id="name"
                name="name"
                required
                defaultValue={calculator.name}
                className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-950"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="slug" className="text-sm font-semibold text-zinc-900">Slug</label>
              <input
                id="slug"
                name="slug"
                required
                defaultValue={calculator.slug}
                pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
                className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-950"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="categoryId" className="text-sm font-semibold text-zinc-900">Category</label>
              <select
                id="categoryId"
                name="categoryId"
                required
                defaultValue={calculator.categoryId}
                className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus:border-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-950"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="lang" className="text-sm font-semibold text-zinc-900">Language</label>
              <select
                id="lang"
                name="lang"
                required
                defaultValue={calculator.lang || "en"}
                className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus:border-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-950"
              >
                <option value="en">English</option>
                <option value="zh">Chinese</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="ja">Japanese</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="status" className="text-sm font-semibold text-zinc-900">Status</label>
            <select
              id="status"
              name="status"
              required
              defaultValue={calculator.status}
              className="w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus:border-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-950"
            >
              <option value={0}>Draft</option>
              <option value={1}>Published</option>
              <option value={2}>Archived</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-semibold text-zinc-900">Description</label>
            <textarea
              id="description"
              name="description"
              required
              rows={3}
              defaultValue={calculator.description}
              className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm focus:border-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-950 resize-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              defaultChecked={calculator.featured}
              className="h-4 w-4 rounded border-zinc-300 text-zinc-950 focus:ring-zinc-950"
            />
            <label htmlFor="featured" className="text-sm font-medium text-zinc-900">Featured Calculator</label>
          </div>

          <div className="mt-8 flex justify-end gap-3 pt-6 border-t border-zinc-100">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="rounded-md px-4 py-2 text-sm font-bold text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-w-[120px] items-center justify-center rounded-md bg-zinc-950 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-zinc-800 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Update Calculator"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
