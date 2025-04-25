# Galactic Fishing App

## Overview

Galactic Fishing is a lightweight, responsive web application that displays live leaderboard and market data for a space-themed fishing game. The application is built as a Progressive Web App (PWA) with offline capabilities, ensuring players can access information even without an internet connection.

## Technical Solution

### Architecture

This application is built using:

- **Next.js 15** - React framework with server-side rendering capabilities
- **TypeScript** - For type safety and improved developer experience
- **TailwindCSS 4** - For responsive and beautiful UI components
- **next-pwa** - For Progressive Web App capabilities and offline support
- **React 19** - Latest React version with improved performance

### Key Features

- **Offline Support**: Uses service workers to cache API responses and application assets
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewports
- **Network-First Strategy**: Prioritizes fresh data when online, falls back to cached data when offline
- **Tiny Bundle Size**: Optimized for performance with minimal JavaScript payload
- **Dynamic Data Fetching**: Parallel data fetching with proper error handling

### API Integration

The application integrates with the following endpoints:

```
GET https://api-game.bloque.app/game/leaderboard
GET https://api-game.bloque.app/game/market
```

#### Leaderboard Data Structure

```json
{
  "players": [
    { "rank": 1, "username": "tester", "level": 5, "xp": 139, "gold": 15 },
    { "rank": 2, "username": "admin", "level": 10, "xp": 0,  "gold": 800 }
  ]
}
```

#### Market Data Structure

```json
{
  "items": [
    { "id": "e0ed…", "name": "Enhanced Fishing Rod", "type": "fishing_rod",   "description": "Increases chance of catching rare fish", "cost": 10000 },
    { "id": "94be…", "name": "Poison of Leveling",  "type": "poison_leveling", "description": "PERMANENTLY steals a level and XP from another player (also increases fishing interval by 30 s)", "cost":   100 },
    { "id": "c815…", "name": "Poison of Delay",     "type": "poison_delay",    "description": "Increases another player's fishing interval by 30 s (stacks up to 5 minutes)", "cost":  5000 },
    { "id": "03b9…", "name": "Poison of Recovery",  "type": "poison_recovery", "description": "Reduces fishing interval by 30 s (use to recover from poisoning)", "cost": 100000 }
  ]
}
```

### PWA Implementation

The application uses the following PWA strategies:

- **NetworkFirst caching**: Prioritizes fresh data when online
- **Cache expiration**: Manages cache size and age for optimal performance
- **Offline fallback**: Gracefully handles offline scenarios
- **Skip waiting**: Ensures immediate activation of new service workers

### Performance Optimizations

- Parallel data fetching to minimize loading time
- Optimized bundle size through proper code splitting
- Responsive images and UI components
- Server-side rendering for improved initial load performance

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Run development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Evaluation Criteria

| Criteria | Implementation |
| --- | --- |
| **Tiny bundle** | Optimized with proper code splitting and minimal dependencies |
| **Works offline** | Implemented with PWA and service worker caching strategies |
| **Responsive & beautiful** | Built with TailwindCSS for all device sizes from mobile to 4K |
| **Stack freedom** | Built with Next.js, React, and TypeScript |

## License

Private - Built for the Bloque Hiring Challenge.