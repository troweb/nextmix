/* eslint-disable react/display-name */
import { forwardRef } from 'react';

import { Link as RemixLink } from '@remix-run/react';

import type { NextMix } from 'nextmix-shared';

export const Link: NextMix['Link'] = forwardRef(function Link(props, ref) {
  const { to: propsTo, href, ...otherProps } = props;
  const to = propsTo ?? href;

  return (
    <RemixLink ref={ref} to={to} {...otherProps}>
      {props.children}
    </RemixLink>
  );
});
