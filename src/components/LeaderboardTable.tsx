import type { Player } from "@/types";

interface LeaderboardTableProps {
    players: Player[];
}

export function LeaderboardTable({ players }: LeaderboardTableProps) {
    if (!players || players.length === 0) {
        return (
            <p className="text-center text-slate-400">
                Leaderboard data is currently unavailable.
            </p>
        );
    }

    return (
        <div className="overflow-x-auto rounded-lg backdrop-blur-md bg-slate-800/70 border border-slate-700/50 group relative transition-all duration-300 hover:shadow-md">
            {/* Subtle highlight on container hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-700/0 via-slate-700/5 to-slate-700/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />
            
            <table className="w-full text-sm text-slate-300">
                <thead className="text-xs uppercase bg-slate-700/60 backdrop-blur-sm border-b border-slate-600/30">
                    <tr>
                        <th scope="col" className="px-4 py-3 sm:px-6 font-medium text-slate-300">
                            Rank
                        </th>
                        <th scope="col" className="px-4 py-3 sm:px-6 font-medium text-slate-300">
                            Username
                        </th>
                        <th scope="col" className="px-4 py-3 sm:px-6 text-center font-medium text-slate-300">
                            Level
                        </th>
                        <th scope="col" className="px-4 py-3 sm:px-6 text-center font-medium text-slate-300">
                            XP
                        </th>
                        <th scope="col" className="px-4 py-3 sm:px-6 text-right font-medium text-slate-300">
                            Gold
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr
                            key={player.rank}
                            className="border-b border-slate-700/20 hover:bg-slate-700/30 transition-all duration-200 group/row relative"
                        >
                            <td className="px-4 py-4 sm:px-6 font-medium text-slate-200 group-hover/row:text-white transition-colors">
                                <span className="flex items-center justify-center">
                                    {player.rank <= 3 ? (
                                        <span className={`w-6 h-6 rounded flex items-center justify-center mr-1 ${player.rank === 1 ? 'bg-amber-700/20 text-amber-400' : player.rank === 2 ? 'bg-slate-500/20 text-slate-300' : 'bg-slate-600/20 text-slate-400'}`}>
                                            {player.rank}
                                        </span>
                                    ) : player.rank}
                                </span>
                            </td>
                            <td className="px-4 py-4 sm:px-6 text-slate-300 group-hover/row:text-slate-200 transition-colors">{player.username}</td>
                            <td className="px-4 py-4 sm:px-6 text-center text-slate-400 group-hover/row:text-slate-300 transition-colors">{player.level}</td>
                            <td className="px-4 py-4 sm:px-6 text-center text-slate-400 group-hover/row:text-slate-300 transition-colors">{player.xp.toLocaleString()}</td>
                            <td className="px-4 py-4 sm:px-6 text-right text-emerald-500 font-medium group-hover/row:text-emerald-400 transition-colors">
                                {player.gold.toLocaleString()} G
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
