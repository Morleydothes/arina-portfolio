import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");

  if (!process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json(
      { ok: false, message: "SANITY_REVALIDATE_SECRET is not configured" },
      { status: 500 },
    );
  }

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, message: "Invalid secret" }, { status: 401 });
  }

  revalidateTag("sanity", "max");

  return NextResponse.json({ ok: true, revalidated: true, now: Date.now() });
}
