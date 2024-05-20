import { UrlObject } from 'url';

import { useLocation, useNavigate, useParams, useSearchParams } from '@remix-run/react';

import type { NextMix } from 'nextmix-shared';

import { getEventsHandler } from './router/eventsHandler';
import { replaceKeyWithValueInPathname } from './router/replaceKeyWithValueInPathname';

/**
 * This is a next.js interface so we'll convert remix data structure to next
 */
export const useRouter: NextMix['useRouter'] = () => {
  const location = useLocation();

  // next.js query contains both params and search params
  const [searchParams] = useSearchParams();
  const params = useParams();
  const query = { ...Object.fromEntries(searchParams), ...params };

  // navigate functions has basically the same functionalities as next.js router functions (only different interfaces)
  const navigate = useNavigate();
  const push = (url: string | UrlObject, replace?: boolean) => {
    if (typeof url === 'string') return navigate(url, { replace });

    if (url.pathname) {
      if (!url.query) {
        return navigate(url.pathname, { replace });
      } else {
        const { pathname, query: modifiedQuery } = replaceKeyWithValueInPathname({
          pathname: url.pathname,
          query: url.query,
        });
        const newSearchParams = new URLSearchParams(modifiedQuery);
        return navigate(`${pathname}?${newSearchParams}`, { replace });
      }
    }
  };

  const reload = () => window.location.reload();
  const back = () => navigate(-1);

  const asPath = location.pathname + location.search;
  const events = getEventsHandler();

  let pathname = location.pathname;
  // turn /book/123456 into /book/[bookId]
  Object.keys(params).forEach((key) => {
    if (params[key]) {
      pathname = pathname.replace(params[key]!, `[${key}]`);
    }
  });

  return {
    /**
     * next.js returns the route id in pathname while remix returns the actual path. `/books/[bookId]` instead of `/books/123456`.
     * we return next.js interface `/books/[bookId]` instaed of remix `/books/$bookId`
     */
    pathname,
    asPath,
    query,
    events,
    push,
    replace: (url) => push(url, true),
    reload,
    back,
  };
};
