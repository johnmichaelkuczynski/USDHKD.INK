/** Resolve a public-folder asset with the correct Vite base path. */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
