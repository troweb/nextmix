import type { useSearchParams } from '@remix-run/react';
import type { usePathname } from 'next/navigation';
import type { default as NextScript } from 'next/script';

import type { NextMixDynamic } from './types/Dynamic';
import type { NextMixForm } from './types/Form';
import type { NextMixImage } from './types/Image';
import type { NextMixLink } from './types/Link';
import type { NextMixUseFetcher } from './types/UseFetcher';
import type { NextMixRouter } from './types/UseRouter';
import type { NextMixWithLinkTags } from './types/WithLinkTags';
import type { NextMixWithMetaTags } from './types/WithMetaTags';

export { stubUseFetcher } from './stubUseFetcher';

export type ScriptType = typeof NextScript;
export type FormType = NextMixForm;
export type LinkType = NextMixLink;
export type ImageType = NextMixImage;
export type useFetcherType = <T = any>() => ReturnType<NextMixUseFetcher<T>>;
export type useRouterType = () => NextMixRouter;
export type withMetaTagsType = NextMixWithMetaTags;
export type withLinkTagsType = NextMixWithLinkTags;
export type dynamicType = NextMixDynamic;
export type useSearchParamsType = typeof useSearchParams;
export type usePathnameType = typeof usePathname;

export interface DefaultType {
  Script: ScriptType;
  Form: FormType;
  Link: LinkType;
  Image: ImageType;
  withLinkTags: withLinkTagsType;
  withMetaTags: withMetaTagsType;
  dynamic: dynamicType;
  useFetcher: useFetcherType;
  useRouter: useRouterType;
  useSearchParams: useSearchParamsType;
  usePathname: usePathnameType;
}
