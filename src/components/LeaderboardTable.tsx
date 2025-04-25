import type { Player } from "@/types";

interface LeaderboardTableProps {
    players: Player[];
}

export function LeaderboardTable({ players }: LeaderboardTableProps) {
    if (!players || players.length === 0) {
        return (
            <p className="text-center text-gray-500 dark:text-gray-400">
                Leaderboard data is currently unavailable.
            </p>
        );
    }

    return (
        <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3 sm:px-6">
                            Rank
                        </th>
                        <th scope="col" className="px-4 py-3 sm:px-6">
                            Username
                        </th>
                        <th scope="col" className="px-4 py-3 sm:px-6 text-center">
                            Level
                        </th>
                        <th scope="col" className="px-4 py-3 sm:px-6 text-center">
                            XP
                        </th>
                        <th scope="col" className="px-4 py-3 sm:px-6 text-right">
                            Gold
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr
                            key={player.rank}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                            <td className="px-4 py-4 sm:px-6 font-medium text-gray-900 dark:text-white">
                                {player.rank}
                            </td>
                            <td className="px-4 py-4 sm:px-6">{player.username}</td>
                            <td className="px-4 py-4 sm:px-6 text-center">{player.level}</td>
                            <td className="px-4 py-4 sm:px-6 text-center">{player.xp}</td>
                            <td className="px-4 py-4 sm:px-6 text-right">
                                {player.gold.toLocaleString()} G
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
