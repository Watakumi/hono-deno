import { Hono } from "https://deno.land/x/hono/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("Hello, World", async () => {
  const app = new Hono();
  app.get("/", (c) => c.text("Hello! Hono! This is My first Hono Project."));

  const res = await app.request("http://localhost/");
  assertEquals(res.status, 200);
  assertEquals(await res.text(), "Hello! Hono! This is My first Hono Project.");
});
