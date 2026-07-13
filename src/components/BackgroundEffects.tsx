"use client";

export function BackgroundEffects() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Warm radial wash anchored top-left, matching the Focus dashboard. */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgb(var(--accent)/0.12),_transparent_38%)]" />

            {/* Floating amber / orange orbs. */}
            <div className="absolute -top-[12%] -left-[8%] h-[42%] w-[42%] rounded-full bg-accent/10 blur-[130px] animate-float" />
            <div className="absolute top-[24%] -right-[10%] h-[48%] w-[48%] rounded-full bg-accent-strong/10 blur-[140px] animate-float [animation-delay:-3s]" />
            <div className="absolute -bottom-[12%] left-[24%] h-[40%] w-[56%] rounded-full bg-amber-300/10 blur-[130px] animate-float [animation-delay:-5s]" />

            {/* Faint grid, masked to the top. */}
            <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
}
