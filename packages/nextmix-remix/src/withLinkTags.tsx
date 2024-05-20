import type { withLinkTagsType } from 'nextmix-shared';

// This is noop for Remix as we use links and meta exports
export const withLinkTags: withLinkTagsType = (Component, getLinks) => {
  return Component;
};
