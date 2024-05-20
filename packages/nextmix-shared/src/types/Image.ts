import { PropsWithoutRef } from 'react';

type HTMLImgProps = React.ComponentProps<'img'>;

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

type LayoutValues = 'fill' | 'fixed' | 'intrinsic' | 'responsive' | undefined;

type PlaceholderValue = 'blur' | 'empty' | `data:image/${string}`;

export type ImageProps = HTMLImgProps & {
  layout?: LayoutValues;
  loader?: (options: ImageLoaderProps) => string;
  blurDataURL?: string;
  placeholder?: PlaceholderValue | undefined;
  objectFit?: React.CSSProperties['objectFit'];
  objectPosition?: React.CSSProperties['objectPosition'];
};

export type NextMixImage = React.ForwardRefExoticComponent<
  PropsWithoutRef<ImageProps> & React.RefAttributes<HTMLImageElement>
>;
