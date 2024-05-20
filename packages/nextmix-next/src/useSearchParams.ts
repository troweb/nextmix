'use client'

import {
  useSearchParams as useSearchParamsNext,
  usePathname,
  useRouter,
} from 'next/navigation';
import type { useSearchParamsType } from 'nextmix-shared';

export const useSearchParams: useSearchParamsType = (init) => {
  const params = useSearchParamsNext();
  const router = useRouter();
  const pathname = usePathname();

  return [
    params,
    (newSearchParams, navOptions) => {
      let searchParams = newSearchParams ?? '';
      if (typeof newSearchParams === 'function') {
        searchParams = newSearchParams(params);
      }

      // cast to string
      const search = searchParams.toString();
      // or const query = `${'?'.repeat(search.length && 1)}${search}`;
      const query = search ? `?${search}` : '';

      router.push(`${pathname}${query}`);
    },
  ];
};
