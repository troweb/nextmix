import type { NextMix } from 'nextmix-shared';

// This is noop for Remix as we use links and meta exports
export const withLinkTags: NextMix['withLinkTags'] = (Component, getLinks) => {
  return Component;
};
