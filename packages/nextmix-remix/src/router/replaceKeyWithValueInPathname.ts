interface RedirectParams {
  pathname: string;
  query: any;
}

export const replaceKeyWithValueInPathname = ({
  pathname,
  query,
}: RedirectParams): RedirectParams => {
  const newQuery = { ...query };
  let newPathname = pathname;

  Object.keys(query).forEach((key) => {
    const keyInPathname = `[${key}]`;
    if (newPathname.includes(keyInPathname)) {
      newPathname = newPathname.replace(keyInPathname, query[key]);
      delete newQuery[key];
    }
  });

  return { pathname: newPathname, query: newQuery };
};
