import { forwardRef } from 'react';

import type { ImageType } from 'nextmix-shared';

export const Image: ImageType = forwardRef(function Image(props, ref) {
  const { layout, loader, blurDataURL, objectFit, objectPosition, ...imgProps } = props;
  // TODO: implement the layout, loader and blurDataUrl for remix

  const style = imgProps.style ?? {};
  if (objectFit || objectPosition) {
    style.objectFit = style.objectFit ?? objectFit;
    style.objectPosition = style.objectPosition ?? objectPosition;
  }

  return <img style={style} ref={ref} {...imgProps} />;
});
