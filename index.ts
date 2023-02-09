import { serve } from "https://deno.land/std/http/server.ts";
import { Hono } from "https://deno.land/x/hono/mod.ts";
import { prettyJSON } from "https://deno.land/x/hono/middleware.ts";
import { myProfile } from "./myprofile.ts";
const app = new Hono();

app.use("*", prettyJSON());
app.get("/", (c) => c.text("Hello! Hono! This is My first Hono Project."));
app.get("/myprofile", (c) => c.json(myProfile));

serve(app.fetch);
