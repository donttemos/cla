"use client";

import { useState } from "react";
import useSWR from "swr";
import { CreateCalculatorModal } from "./CreateCalculatorModal";

type AdminActionControlsProps = {
  sectionTitle: string;
  controls: readonly string[];
  onSuccess?: () => void;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function AdminActionControls({ sectionTitle, controls, onSuccess }: AdminActionControlsProps) {
  const [activeControl, setActiveControl] = useState(controls[0] ?? "");
  const [isExecuting, setIsExecuting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch categories for the modal
  const { data: categoriesData } = useSWR(
    sectionTitle === "Create Calculator" ? "/api/admin/categories" : null,
    fetcher
  );
  
  const categories = categoriesData?.data || [];

  const handleAction = (control: string) => {
    setActiveControl(control);
    
    if (sectionTitle === "Create Calculator" && control === "New calculator draft") {
      setIsModalOpen(true);
      return;
    }

    setIsExecuting(true);
    // Simulate a brief delay for server action/logic processing
    setTimeout(() => {
      setIsExecuting(false);
    }, 600);
  };

  return (
    <div className="flex min-w-48 flex-col gap-3">
      <div className="flex flex-col gap-2">
        {controls.map((control) => {
          const isActive = activeControl === control;

          return (
            <button
              key={control}
              aria-pressed={isActive}
              className={
                isActive
                  ? "relative inline-flex min-h-10 items-center justify-center overflow-hidden rounded-md border border-zinc-950 bg-zinc-950 px-3 text-xs font-bold uppercase tracking-wider text-white transition-all active:scale-[0.98]"
                  : "inline-flex min-h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-3 text-xs font-bold uppercase tracking-wider text-zinc-600 transition-all hover:border-zinc-400 hover:text-zinc-950 active:bg-zinc-50"
              }
              type="button"
              onClick={() => handleAction(control)}
            >
              {isActive && isExecuting && (
                <span className="absolute inset-0 flex items-center justify-center bg-zinc-950">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                </span>
              )}
              <span className={isActive && isExecuting ? "opacity-0" : "opacity-100"}>{control}</span>
            </button>
          );
        })}
      </div>

      <div className="rounded-md border border-dashed border-zinc-200 bg-zinc-50/50 p-3" role="status">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Selected workflow</p>
          {isExecuting && (
            <span className="text-xs font-bold uppercase text-zinc-950 animate-pulse">Initializing...</span>
          )}
        </div>
        <p className="mt-2 text-sm font-semibold text-zinc-950">{activeControl}</p>
        <p className="mt-1 text-xs leading-relaxed text-zinc-500">
          {sectionTitle} interface is currently in simulation mode. Server actions and database persistence are
          intentionally disconnected in this phase.
        </p>
      </div>

      {sectionTitle === "Create Calculator" && (
        <CreateCalculatorModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            if (onSuccess) onSuccess();
            // SWR will automatically revalidate or we can mutate here if we had a local list
          }}
          categories={categories}
        />
      )}
    </div>
  );
}
