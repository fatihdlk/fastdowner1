import { platformSlugs } from "./platformSlugs";

export function buildStaticRoutes(){
  return platformSlugs.map(slug=>`https://fastdowner.net/${slug}`);
}
