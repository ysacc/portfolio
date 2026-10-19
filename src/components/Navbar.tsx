"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { navigation, isNavigationActive } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header className={cn("fixed top-0 z-50 w-full transition-all duration-300", scrolled || isOpen ? "border-b border-hairline/10 bg-surface/95 py-4 backdrop-blur-xl" : "bg-transparent py-6")}
      onKeyDown={event => { if (event.key === "Escape" && isOpen) { setIsOpen(false); menuButton.current?.focus(); } }}>
      <nav className="section-container flex items-center justify-between gap-4" aria-label="Navegación principal">
        <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold tracking-tight" aria-label="YR. — Ysacc Roncal, inicio">YR<span className="text-gradient">.</span></Link>
        <div className="flex items-center gap-5">
          <ul className="hidden items-center gap-5 text-sm font-medium xl:flex">
            {navigation.map(item => {
              const active = isNavigationActive(pathname, item.href);
              return <li key={item.href}><Link href={item.href} aria-current={active ? "page" : undefined} className={cn("whitespace-nowrap transition-colors hover:text-accent-strong dark:hover:text-accent", active ? "font-semibold text-accent-strong dark:text-accent" : "text-muted")}>{item.name}</Link></li>;
            })}
          </ul>
          <div className="flex items-center gap-2">
            <button onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true }))} className="hidden size-9 items-center justify-center rounded-lg border border-hairline/15 text-muted transition-colors hover:text-accent-strong dark:hover:text-accent xl:inline-flex" aria-label="Abrir buscador de comandos"><Search className="size-4" /></button>
            <ThemeToggle />
            <button ref={menuButton} onClick={() => setIsOpen(open => !open)} className="inline-flex size-10 items-center justify-center rounded-lg border border-hairline/15 xl:hidden" aria-expanded={isOpen} aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} aria-controls="mobile-navigation">{isOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
          </div>
        </div>
      </nav>
      <div id="mobile-navigation" hidden={!isOpen} className="absolute left-0 top-full max-h-[calc(100dvh-80px)] w-full overflow-y-auto border-t border-hairline/15 bg-surface p-6 shadow-xl xl:hidden">
        <ul className="section-container flex flex-col gap-1">
          {navigation.map(item => {
            const active = isNavigationActive(pathname, item.href);
            return <li key={item.href}><Link href={item.href} onClick={() => setIsOpen(false)} aria-current={active ? "page" : undefined} className={cn("block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-accent/10", active ? "bg-accent/10 text-accent-strong dark:text-accent" : "text-muted")}>{item.name}</Link></li>;
          })}
        </ul>
      </div>
    </header>
  );
}
