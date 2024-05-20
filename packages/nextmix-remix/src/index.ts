import { useLocation, useSearchParams } from '@remix-run/react';

import type { NextMix } from 'nextmix-shared';

import { dynamic } from './dynamic';
import { Form } from './Form';
import { Image } from './Image';
import { Link } from './Link';
import { Script } from './Script';
import { useFetcher } from './useFetcher';
import { useRouter } from './useRouter';
import { withLinkTags } from './withLinkTags';
import { withMetaTags } from './withMetaTags';

const usePathname = () => useLocation().pathname;

// only for type checking purposes
const nextmix: NextMix = {
  Script,
  Form,
  Link,
  useRouter,
  Image,
  withLinkTags,
  withMetaTags,
  dynamic,
  useFetcher,
  useSearchParams,
  usePathname,
};

export {
  Script,
  Form,
  Link,
  useRouter,
  Image,
  withLinkTags,
  withMetaTags,
  dynamic,
  useFetcher,
  useSearchParams,
  usePathname,
};
export default nextmix;
