import type { MarketItem } from "@/types";

interface MarketGridProps {
    items: MarketItem[];
}

export function MarketGrid({ items }: MarketGridProps) {
    if (!items || items.length === 0) {
        return (
            <p className="text-center text-blue-300/60">
                Market data is currently unavailable.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="backdrop-blur-md bg-blue-900/20 rounded-xl border border-blue-500/20 p-5 flex flex-col justify-between group hover:bg-blue-800/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] overflow-hidden relative"
                >
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />
                    
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                            {item.name}
                        </h3>
                        <div className="inline-block px-2 py-1 rounded-full bg-blue-900/40 text-xs text-blue-300 mb-3 capitalize">
                            {item.type.replace(/_/g, " ")}
                        </div>
                        <p className="text-sm text-blue-200/80 mb-4 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                    <div className="text-right">
                        <span className="text-base font-bold text-green-400 group-hover:text-green-300 transition-colors">
                            {item.cost.toLocaleString()} G
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
