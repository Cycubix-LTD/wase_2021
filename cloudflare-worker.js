/**
 * Cloudflare Worker: proxy cycubix.com/wase_2021/* → cycubix-ltd.github.io/wase_2021/*
 *
 * Deploy in Cloudflare Dashboard:
 *   Workers & Pages → Create Worker → paste this script → Deploy
 *
 * Then add a Route in the Worker's Settings → Triggers:
 *   Route: cycubix.com/wase_2021*
 *   Zone:  cycubix.com
 */

const UPSTREAM = "https://cycubix-ltd.github.io";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Only handle /wase_2021 paths
    if (!url.pathname.startsWith("/wase_2021")) {
      return new Response("Not found", { status: 404 });
    }

    const upstreamURL = new URL(url.pathname + url.search, UPSTREAM);

    const upstreamRequest = new Request(upstreamURL.toString(), {
      method: request.method,
      headers: {
        "User-Agent": request.headers.get("User-Agent") || "",
        "Accept": request.headers.get("Accept") || "*/*",
        "Accept-Encoding": request.headers.get("Accept-Encoding") || "",
        "Accept-Language": request.headers.get("Accept-Language") || "",
      },
    });

    const response = await fetch(upstreamRequest);

    // Strip GitHub Pages headers that would confuse the browser
    const headers = new Headers(response.headers);
    headers.delete("x-github-request-id");
    headers.delete("x-served-by");
    headers.delete("x-cache");
    headers.delete("x-cache-hits");
    headers.delete("x-fastly-request-id");
    headers.delete("x-timer");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
