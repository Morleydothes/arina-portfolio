export const apiVersion = "2026-03-29";
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || "";
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID ||
  "";
export const studioHost =
  process.env.NEXT_PUBLIC_VERCEL_URL || "localhost:3000";
export const useCdn = process.env.NODE_ENV === "production";

export const hasSanityEnv = Boolean(projectId && dataset);
