import type { NextMix } from 'nextmix-shared';

// This is noop for Remix as we use links and meta exports
export const withMetaTags: NextMix['withMetaTags'] = (Component, getLinks) => {
  return Component;
};
