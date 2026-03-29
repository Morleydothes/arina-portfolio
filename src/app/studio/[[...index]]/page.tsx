import { StudioShell } from "@/components/studio-shell";
import { hasSanityEnv } from "@/sanity/env";

export default function StudioPage() {
  if (!hasSanityEnv) {
    return (
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16 text-text-ink-black">
        <h1 className="font-display text-5xl">Sanity Studio</h1>
        <p className="mt-6 text-base leading-8 text-text-ink-black/70">
          Добавь переменные окружения `NEXT_PUBLIC_SANITY_PROJECT_ID` и
          `NEXT_PUBLIC_SANITY_DATASET`, после чего Studio откроется прямо на
          этом маршруте.
        </p>
      </main>
    );
  }

  return <StudioShell />;
}
