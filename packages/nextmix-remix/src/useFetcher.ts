import { useFetcher as remixUseFetcher } from '@remix-run/react';

import { stubUseFetcher, useFetcherType } from 'nextmix-shared';

export const useFetcher: useFetcherType =
  process.env.NEXTMIX_USE_STUB === 'true'
    ? (stubUseFetcher as any)
    : (remixUseFetcher as any);
