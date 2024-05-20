/* eslint-disable react/display-name */
import type { dynamicType } from 'nextmix-shared';
import React, { ComponentType } from 'react';

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
