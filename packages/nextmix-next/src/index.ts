import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

import type { NextMix } from 'nextmix-shared';

import { Form } from './Form';
import { Image } from './Image';
import { Link } from './Link';
import { useFetcher } from './useFetcher';
import { useRouter } from './useRouter';
import { useSearchParams } from './useSearchParams';
import { withLinkTags } from './withLinkTags';
import { withMetaTags } from './withMetaTags';

// only for typechecking purposes
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
