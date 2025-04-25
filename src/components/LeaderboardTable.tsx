import type { Player } from "@/types";

interface LeaderboardTableProps {
    players: Player[];
}

export function LeaderboardTable({ players }: LeaderboardTableProps) {
    if (!players || players.length === 0) {
        return (
            <p className="text-center text-blue-300/60">
                Leaderboard data is currently unavailable.
            </p>
        );
    }

    return (
        <div className="overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-blue-100">
                <thead className="text-xs uppercase bg-blue-900/30 backdrop-blur-sm border-b border-blue-500/20">
                    <tr>
                        <th scope="col" className="px-4 py-3 sm:px-6 font-medium">
                            Rank
                        </th>
                        <th scope="col" className="px-4 py-3 sm:px-6 font-medium">
                            Username
                        </th>
                        <th scope="col" className="px-4 py-3 sm:px-6 text-center font-medium">
                            Level
                        </th>
                        <th scope="col" className="px-4 py-3 sm:px-6 text-center font-medium">
                            XP
                        </th>
                        <th scope="col" className="px-4 py-3 sm:px-6 text-right font-medium">
                            Gold
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr
                            key={player.rank}
                            className="backdrop-blur-sm border-b border-blue-500/10 hover:bg-blue-500/10 transition-colors"
                        >
                            <td className="px-4 py-4 sm:px-6 font-medium text-white">
                                {player.rank}
                            </td>
                            <td className="px-4 py-4 sm:px-6 text-blue-200">{player.username}</td>
                            <td className="px-4 py-4 sm:px-6 text-center">{player.level}</td>
                            <td className="px-4 py-4 sm:px-6 text-center">{player.xp}</td>
                            <td className="px-4 py-4 sm:px-6 text-right text-green-400 font-medium">
                                {player.gold.toLocaleString()} G
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
