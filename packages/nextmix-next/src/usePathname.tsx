'use client'

import { usePathname as useNextPathname } from 'next/navigation'
import type { usePathnameType } from 'nextmix-shared';

export const usePathname: usePathnameType = useNextPathname;
