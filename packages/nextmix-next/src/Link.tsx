/* eslint-disable react/display-name */
import { forwardRef } from 'react';

import NextLink from 'next/link';

import type { NextMix } from 'nextmix-shared';

export const Link: NextMix['Link'] = forwardRef(function Link(props, ref) {
  const { to: toProp, href: hrefProp, prefetch, ...otherProps } = props;
  const href = hrefProp ?? toProp;

  return (
    <NextLink
      ref={ref}
      href={href}
      prefetch={prefetch && prefetch !== 'none'}
      {...otherProps}
    />
  );
});
