/**
 * All images, videos and PDFs come from the ORIGINAL website (no media is copied).
 * That server is HTTP-only, and browsers block HTTP media on an HTTPS page, so by
 * default media is requested from "/legacy/" on this site's own domain, which
 * proxies to http://amaltasgroup.co.in/paramedical/:
 *   - Vercel: rewrite in vercel.json
 *   - Netlify: public/_redirects
 *   - local dev: server.proxy in vite.config.ts
 * Override with VITE_ASSET_BASE (see .env.example).
 */
const RAW_BASE: string = (import.meta.env.VITE_ASSET_BASE as string | undefined) || '/legacy/';

export const ASSET_BASE = RAW_BASE.endsWith('/') ? RAW_BASE : `${RAW_BASE}/`;

/** Build an absolute URL for a path relative to the original site root. */
export function asset(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.replace(/^\/+/, '').replace(/\/{2,}/g, '/');
  return ASSET_BASE + encodeURI(clean);
}

/** Generate a numbered image list, e.g. range('activities/garba', 6, 'jpeg'). */
export function range(folder: string, count: number, ext: 'jpg' | 'jpeg' | 'png', overrides: Record<number, string> = {}): string[] {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    return `${folder}/${n}.${overrides[n] ?? ext}`;
  });
}
