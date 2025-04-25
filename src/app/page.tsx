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
    <main className="min-h-screen bg-gradient-to-b from-black via-purple-950/80 to-black">
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Header with glow effect */}
        <div className="text-center relative">
          <div className="absolute inset-0 blur-[40px] bg-blue-500/20 rounded-full -z-10" />
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Galactic Fishing
          </h1>
          <p className="text-lg text-blue-100/80 tracking-wider">
            Live Leaderboard and Market Status
          </p>
        </div>

        {/* Leaderboard Section */}
        <section className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-blue-100 flex items-center">
            <span className="mr-2 text-blue-400">★</span> Leaderboard
          </h2>
          <LeaderboardTable players={leaderboardData.players} />
        </section>

        {/* Market Section */}
        <section className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-blue-100 flex items-center">
            <span className="mr-2 text-blue-400">⚡</span> Market
          </h2>
          <MarketGrid items={marketData.items} />
        </section>

        <footer className="w-full text-center py-6 text-sm text-blue-200/50 backdrop-blur-sm bg-white/5 rounded-full px-6 mx-auto inline-block">
          Built for the Bloque Hiring Challenge
        </footer>
      </div>
    </main>
  );
}