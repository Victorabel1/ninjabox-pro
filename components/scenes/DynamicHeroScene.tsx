import dynamic from 'next/dynamic';

// This dynamically imports the HeroScene, but disables Server-Side Rendering (ssr: false)
// because a 3D canvas needs the browser's 'window' object.
export const DynamicHeroScene = dynamic(
  () => import('./HeroScene').then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => (
      // Optional: A simple loader
      <div className="absolute inset-0 flex items-center justify-center bg-background/50">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    ),
  }
);