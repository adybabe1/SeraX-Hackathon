```ts
// Custom Workout Generator Edge Function

import { serve } from "https://deno.land/std/http/server.ts";

const OPENAI_KEY = Deno.env.get("OPENAI_API_KEY");

serve(async (req) => {
  try {
    const { user } = await req.json();

    const body = {
      model: Deno.env.get("WORKOUT_MODEL") ?? "basic-fitness-1",
      prompt: `Create a ${user.duration}-minute workout for a ${user.level} user with equipment: ${user.equipment.join(", ")}.`,
    };

    const aiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const result = await aiRes.json();

    return new Response(JSON.stringify({ plan: result.choices[0].message }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
});
