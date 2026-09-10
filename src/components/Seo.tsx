import { useEffect } from "react";
import { SITE_URL } from "@/lib/site";

function setMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

type SeoProps = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const Seo = ({ title, description, path, noIndex = false, jsonLd }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const json = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "twitter:title", title);
    setMeta("property", "twitter:description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const scriptId = "page-jsonld";
    const existing = document.getElementById(scriptId);
    if (json) {
      let script = existing as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = json;
    } else if (existing) {
      existing.remove();
    }
  }, [title, description, url, noIndex, json]);

  return null;
};

export default Seo;
