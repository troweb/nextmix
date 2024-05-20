import type { useSearchParams } from '@remix-run/react';
import type { usePathname } from 'next/navigation';
import Script from 'next/script';

import { NextMixDynamic } from './Dynamic';
import { NextMixForm } from './Form';
import { NextMixImage } from './Image';
import { NextMixLink } from './Link';
import { NextMixUseFetcher } from './UseFetcher';
import { NextMixRouter } from './UseRouter';
import { NextMixWithLinkTags } from './WithLinkTags';
import { NextMixWithMetaTags } from './WithMetaTags';

export interface NextMix {
  Script: typeof Script;
  Form: NextMixForm;
  Link: NextMixLink;
  Image: NextMixImage;
  useFetcher: <T = any>() => ReturnType<NextMixUseFetcher<T>>;
  useRouter: () => NextMixRouter;
  withMetaTags: NextMixWithMetaTags;
  withLinkTags: NextMixWithLinkTags;
  dynamic: NextMixDynamic;
  useSearchParams: typeof useSearchParams;
  usePathname: typeof usePathname;
}
