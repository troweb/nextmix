import { useFetcher as remixUseFetcher } from '@remix-run/react';

import { NextMix, stubUseFetcher } from 'nextmix-shared';

export const useFetcher: NextMix['useFetcher'] =
  process.env.NEXTMIX_USE_STUB === 'true'
    ? (stubUseFetcher as any)
    : (remixUseFetcher as any);
