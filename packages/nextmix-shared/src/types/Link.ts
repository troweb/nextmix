import { PropsWithoutRef } from 'react';

import type { RemixLinkProps } from '@remix-run/react/dist/components';

interface Path {
  pathname: string;
  search: string;
  hash: string;
}

export type LinkProps = Omit<RemixLinkProps, 'href' | 'to' | 'prefetch'> &
  (
    | {
        href: string | Partial<Path>;
        to?: never;
      }
    | {
        href?: never;
        to: string | Partial<Path>;
      }
  ) & {
    prefetch?: 'render' | 'intent' | 'none';
  };

export type NextMixLink = React.ForwardRefExoticComponent<
  PropsWithoutRef<LinkProps> & React.RefAttributes<HTMLAnchorElement>
>;
