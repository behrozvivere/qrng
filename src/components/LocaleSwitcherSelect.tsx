"use client";

import clsx from "clsx";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

type Locale = "en" | "zh" | "fa" | "ar";

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label
      className={clsx(
        "relative flex items-center",
        isPending && "transition-opacity [&:disabled]:opacity-30",
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-1 top-[8px]">
        <ChevronUpDownIcon className="h-4 w-4" />
      </span>
    </label>
  );
}
