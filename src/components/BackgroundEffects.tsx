"use client";

export function BackgroundEffects() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Subtle Gradient Orbs */}
            <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-yellow-500/5 blur-[120px] dark:bg-yellow-500/10" />
            <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10" />
            <div className="absolute -bottom-[10%] left-[20%] h-[40%] w-[60%] rounded-full bg-purple-500/5 blur-[120px] dark:bg-purple-500/10" />

            {/* Mesh Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
}
