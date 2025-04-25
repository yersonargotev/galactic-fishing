import { LeaderboardTable } from '@/components/LeaderboardTable';
import { MarketGrid } from '@/components/MarketGrid';
import { fetchLeaderboard, fetchMarket } from '@/lib/api';

// Force dynamic rendering to ensure fetch runs on each request (or revalidates)
// But PWA cache will handle offline
export const dynamic = 'force-dynamic';

export default async function HomePage() {
  // Fetch data in parallel
  const [leaderboardData, marketData] = await Promise.all([
    fetchLeaderboard(),
    fetchMarket()
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pb-16">
      {/* Subtle dot pattern background */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 stars-bg animate-[twinkle_30s_linear_infinite]" />
      </div>
      
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Header with subtle glow effect */}
        <div className="text-center relative py-8">
          <div className="absolute inset-0 blur-[40px] bg-gradient-to-r from-slate-700/20 via-slate-600/20 to-slate-700/20 rounded-full -z-10" />
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">
            Galactic Fishing
          </h1>
          <p className="text-lg text-slate-400 tracking-wider max-w-2xl mx-auto">
            Live Leaderboard and Market Status
          </p>
        </div>

        {/* Leaderboard Section */}
        <section className="backdrop-blur-md bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 shadow-md transition-all duration-300 hover:shadow-lg group relative">
          {/* Section subtle highlight */}
          <div className="absolute -inset-1 bg-gradient-to-r from-slate-700/0 via-slate-700/5 to-slate-700/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />
          
          <h2 className="text-xl font-semibold mb-6 text-slate-200 flex items-center">
            <span className="flex items-center justify-center w-7 h-7 rounded bg-slate-700 mr-3 text-slate-300">★</span> 
            <span>Leaderboard</span>
          </h2>
          <LeaderboardTable players={leaderboardData.players} />
        </section>

        {/* Market Section */}
        <section className="backdrop-blur-md bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 shadow-md transition-all duration-300 hover:shadow-lg group relative">
          {/* Section subtle highlight */}
          <div className="absolute -inset-1 bg-gradient-to-r from-slate-700/0 via-slate-700/5 to-slate-700/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />
          
          <h2 className="text-xl font-semibold mb-6 text-slate-200 flex items-center">
            <span className="flex items-center justify-center w-7 h-7 rounded bg-slate-700 mr-3 text-slate-300">⚡</span> 
            <span>Market</span>
          </h2>
          <MarketGrid items={marketData.items} />
        </section>

        <footer className="w-full text-center py-4 text-sm text-slate-500 backdrop-blur-sm bg-slate-800/30 rounded-md px-6 mx-auto inline-block border border-slate-700/30 transition-all duration-300 hover:text-slate-400 hover:border-slate-700/50">
          Built for the Bloque Hiring Challenge
        </footer>
      </div>
    </main>
  );
}