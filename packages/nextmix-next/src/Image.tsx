import { forwardRef } from 'react';

import NextImage from 'next/image';

import type { NextMix } from 'nextmix-shared';

type PlaceholderValue = 'blur' | 'empty';

export const Image: NextMix['Image'] = forwardRef(function Image(props, ref) {
  const { src, placeholder, ...restOfProps } = props;

  if (src == null) {
    throw new Error('Image src is required');
  }

  if (placeholder && placeholder !== 'blur' && placeholder !== 'empty') {
    throw new Error(`Image placeholder "${placeholder}" is not supported`);
  }
  const nextPlaceholder = placeholder as PlaceholderValue;

  // I don't know why, but this is the only way I could get this to work
  const NextImageComp = (NextImage as any).default;
  return (
    <NextImageComp
      {...restOfProps}
      ref={ref}
      src={src}
      alt={props.alt ?? ''}
      width={props.width as number}
      height={props.height as number}
      objectPosition={props.objectPosition as string}
      placeholder={nextPlaceholder}
    />
  );
});
