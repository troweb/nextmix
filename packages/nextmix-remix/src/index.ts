import { useLocation, useSearchParams } from '@remix-run/react';

import { dynamic } from './dynamic';
import { Form } from './Form';
import { Image } from './Image';
import { Link } from './Link';
import { Script } from './Script';
import { useFetcher } from './useFetcher';
import { useRouter } from './useRouter';
import { withLinkTags } from './withLinkTags';
import { withMetaTags } from './withMetaTags';
import type { DefaultType } from 'nextmix-shared';

const usePathname = () => useLocation().pathname;

// only for type checking purposes
const nextmix: DefaultType = {
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
