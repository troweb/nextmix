/* eslint-disable react/display-name */
import Head from 'next/head';

import type { withMetaTagsType } from 'nextmix-shared';

export const withMetaTags: withMetaTagsType = (Component, getMetaTags) => {
  return (props: any) => {
    // TODO: implement this to be usable in next
    const meta = getMetaTags({ data: {}, params: {}, parentsData: {} });

    return (
      <>
        <Head>
          {Object.keys(meta).map((metaKey) => (
            <meta key={metaKey} {...{ [metaKey]: meta[metaKey] }} />
          ))}
        </Head>
        <Component {...props} />
      </>
    );
  };
};
