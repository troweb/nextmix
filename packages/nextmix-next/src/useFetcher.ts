'use client'

import { stubUseFetcher, useFetcherType } from 'nextmix-shared';

/*
 * TODO: Remix useFetcher is making use of FetcherWithComponents type for
 *  useFetcher which contains Form and other things that should be implemented
 *  here later
 */
export const useFetcher: useFetcherType = stubUseFetcher;
