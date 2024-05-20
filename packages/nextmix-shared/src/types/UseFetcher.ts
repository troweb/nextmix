import type { useFetcher } from '@remix-run/react';

export type NextMixUseFetcher<TData = any> = typeof useFetcher<TData>;
