import { useNavigate } from '@remix-run/react';

import type { useRouterType } from 'nextmix-shared';

/**
 * This is a next.js interface so we'll convert remix data structure to next
 */
export const useRouter: useRouterType = () => {
  // navigate functions has basically the same functionalities as next.js router functions (only different interfaces)
  const navigate = useNavigate();
  const push = (url: string, options?: { replace?: boolean; scroll?: boolean }) => {
    const { replace, scroll } = options ?? {};
    return navigate(url, { replace, preventScrollReset: !scroll });

    // if (url.pathname) {
    //   if (!url.query) {
    //     return navigate(url.pathname, { replace });
    //   } else {
    //     const { pathname, query: modifiedQuery } = replaceKeyWithValueInPathname({
    //       pathname: url.pathname,
    //       query: url.query,
    //     });
    //     const newSearchParams = new URLSearchParams(modifiedQuery);
    //     return navigate(`${pathname}?${newSearchParams}`, { replace });
    //   }
    // }
  };

  return {
    push,
    replace: (url) => push(url, { replace: true }),
    refresh: () => window.location.reload(),
    prefetch: (url: string) => { /** remix does not support this */ },
    back: () => navigate(-1),
    forward: () => navigate(1),
  };
};
