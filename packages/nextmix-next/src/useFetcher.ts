import { NextMix, stubUseFetcher } from 'nextmix-shared';

/*
 * TODO: Remix useFetcher is making use of FetcherWithComponents type for
 *  useFetcher which contains Form and other things that should be implemented
 *  here later
 */
export const useFetcher: NextMix['useFetcher'] = stubUseFetcher;
