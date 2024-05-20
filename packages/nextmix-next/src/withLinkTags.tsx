/* eslint-disable react/display-name */
import Head from 'next/head';
import type { withLinkTagsType } from 'nextmix-shared';

export const withLinkTags: withLinkTagsType = (Component, getLinks) => {
  // Return a higher order component with Component
  return (props: any) => {
    const links = getLinks();
    return (
      <>
        <Head>
          {links.map((link, index) => (
            <link key={index} {...link} />
          ))}
        </Head>
        <Component {...props} />
      </>
    );
  };
};
