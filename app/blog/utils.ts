export const slugToUrl = (slug: string[]) => {
  const [year, month, day, name] = slug;
  return `/blog/${year}/${month}/${day}/${name}`;
};
