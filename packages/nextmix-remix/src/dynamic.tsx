/* eslint-disable react/display-name */
import React, { ComponentType } from 'react';

import type { dynamicType } from 'nextmix-shared';

export const dynamic: dynamicType = (importer, options) => {
  const opt = options ?? {};
  const { ssr } = opt;

  if (!ssr && typeof window === 'undefined') {
    return () => null;
  }

  return React.lazy(async () => {
    const module = await importer();
    if (module == null) {
      throw new Error('no module returned from dynamic function');
    }

    return { default: ((module as any).default as ComponentType) ?? module };
  });
};
