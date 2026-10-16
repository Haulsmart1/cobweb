import type { MetadataRoute } from "next";
import { siteUrl, pages } from "@/lib/site";
import { applications } from "@/lib/applications";
export default function sitemap(): MetadataRoute.Sitemap {
  return [...pages.map(([path]) => ({ url: siteUrl + path })), ...applications.map(({slug}) => ({ url: siteUrl + "/applications/" + slug }))];
}
