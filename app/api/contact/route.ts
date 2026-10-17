export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }
  return Response.json(
    { ok: false, message: "Contact delivery is not configured for this recovered source." },
    { status: 503 }
  );
}
