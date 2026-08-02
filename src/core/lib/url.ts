/**
 * Пути с учётом base. Проект деплоится в подпапку GitHub Pages
 * (/clinic-template/), поэтому все ссылки на статику и страницы
 * строятся через BASE_URL, а не жёстко от корня домена.
 */
const BASE = import.meta.env.BASE_URL;

export const url = (path: string): string => {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return BASE.endsWith('/') ? BASE + clean : `${BASE}/${clean}`;
};
