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
    <main className="container mx-auto px-4 py-8 space-y-12">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Galactic Fishing
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Live Leaderboard and Market Status
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Leaderboard</h2>
        <LeaderboardTable players={leaderboardData.players} />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Market</h2>
        <MarketGrid items={marketData.items} />
      </section>

      <footer className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400">
        Built for the Bloque Hiring Challenge.
      </footer>
    </main>
  );
}