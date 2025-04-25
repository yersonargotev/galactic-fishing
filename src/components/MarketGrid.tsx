import type { MarketItem } from "@/types";

interface MarketGridProps {
    items: MarketItem[];
}

export function MarketGrid({ items }: MarketGridProps) {
    if (!items || items.length === 0) {
        return (
            <p className="text-center text-slate-400">
                Market data is currently unavailable.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="backdrop-blur-md bg-slate-800/70 rounded-lg border border-slate-700/50 p-4 flex flex-col justify-between group hover:bg-slate-700/60 transition-all duration-300 hover:shadow-md overflow-hidden relative"
                >
                    {/* Subtle highlight on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-slate-700/0 via-slate-700/5 to-slate-700/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />
                    
                    <div>
                        <h3 className="text-lg font-semibold text-slate-200 mb-2 group-hover:text-white transition-colors">
                            {item.name}
                        </h3>
                        <div className="inline-block px-2 py-1 rounded bg-slate-700/60 text-xs text-slate-300 mb-3 capitalize">
                            {item.type.replace(/_/g, " ")}
                        </div>
                        <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                            <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-slate-700/60 text-xs text-slate-300">
                                <span className="mr-1">⚡</span> 
                                {item.type.replace(/_/g, " ")}
                            </span>
                        </div>
                        <span className="text-base font-bold text-emerald-500 group-hover:text-emerald-400 transition-colors">
                            {item.cost.toLocaleString()} G
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
