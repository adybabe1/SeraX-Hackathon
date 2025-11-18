```ts
// Audio Processor Edge Function

import { serve } from "https://deno.land/std/http/server.ts";

const AUDIO_KEY = Deno.env.get("AUDIO_API_KEY");
const AUDIO_URL = Deno.env.get("AUDIO_API_URL");

serve(async (req) => {
  try {
    const audioBuffer = await req.arrayBuffer();

    const res = await fetch(AUDIO_URL, {
      method: "POST",
      headers: {
        "Content-Type": req.headers.get("Content-Type") ?? "audio/wav",
        "Authorization": `Bearer ${AUDIO_KEY}`,
      },
      body: audioBuffer,
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
});
