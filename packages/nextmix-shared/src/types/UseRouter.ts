import type { UrlObject } from 'node:url';

export interface NextMixRouter {
  pathname: string;
  query: { [name: string]: string | string[] | undefined };
  asPath: string;
  events: any;
  push: (arg: string | UrlObject) => void;
  replace: (arg: string | UrlObject) => void;
  reload: () => void;
  back: () => void;
}
