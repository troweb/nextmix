'use client'

import { useRouter as useNextRouter } from 'next/navigation';
import type { useRouterType } from 'nextmix-shared';

export const useRouter: useRouterType = useNextRouter;
