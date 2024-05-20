import type { withMetaTagsType } from 'nextmix-shared';

// This is noop for Remix as we use links and meta exports
export const withMetaTags: withMetaTagsType = (Component, getLinks) => {
  return Component;
};
