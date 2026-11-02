/**
 * All images, videos and PDFs are referenced from the ORIGINAL website so that
 * no media is duplicated or altered. Change VITE_ASSET_BASE (see .env.example)
 * to point at a different host, or at "/legacy/" if you copy the original
 * folders into /public/legacy.
 */
const RAW_BASE: string =
  (import.meta.env.VITE_ASSET_BASE as string | undefined) || 'http://amaltasgroup.co.in/paramedical/';

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
