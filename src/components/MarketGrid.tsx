import type { MarketItem } from "@/types";

interface MarketGridProps {
    items: MarketItem[];
}

export function MarketGrid({ items }: MarketGridProps) {
    if (!items || items.length === 0) {
        return (
            <p className="text-center text-gray-500 dark:text-gray-400">
                Market data is currently unavailable.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col justify-between"
                >
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {item.name}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 capitalize">
                            Type: {item.type.replace(/_/g, " ")}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                            {item.description}
                        </p>
                    </div>
                    <div className="text-right">
                        <span className="text-base font-bold text-green-600 dark:text-green-400">
                            {item.cost.toLocaleString()} G
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
