import {
  useSearchParams as useNextSearchParams,
  usePathname,
  useRouter,
} from 'next/navigation';

import type { NextMix } from 'nextmix-shared';

export const useSearchParams: NextMix['useSearchParams'] = (init) => {
  const params = useNextSearchParams();
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
