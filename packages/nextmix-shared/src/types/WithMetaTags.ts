import type { NextPage } from 'next';

export type NextMixWithMetaTags = (
  Component: NextPage,
  getLinks: MetaFunction,
) => NextPage;

type MetaFunction = (args: {
  data: any;
  parentsData: Record<string, any>;
  params: Record<string, string | undefined>;
  // location: Location;
}) => HtmlMetaDescriptor;

interface HtmlMetaDescriptor {
  charset?: 'utf-8';
  charSet?: 'utf-8';
  title?: string;
  [name: string]:
    | null
    | string
    | undefined
    | Record<string, string>
    | (Record<string, string> | string)[];
}
