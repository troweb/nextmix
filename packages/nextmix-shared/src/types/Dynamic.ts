import type { ComponentType, Component, RefAttributes, LazyExoticComponent } from 'react';

/* eslint-disable @typescript-eslint/ban-types */
type LoaderComponent<P = {}> = Promise<
  | ComponentType<P>
  | {
    default: ComponentType<P>;
  }
>;
type Loader<P = {}> = () => LoaderComponent<P> /* | LoaderComponent<P> */;
interface LoaderMap {
  [mdule: string]: () => Loader<any>;
}

interface LoadableGeneratedOptions {
  webpack?(): any;
  modules?(): LoaderMap;
}

// interface DynamicOptionsLoadingProps {
//   error?: Error | null;
//   isLoading?: boolean;
//   pastDelay?: boolean;
//   retry?: () => void;
//   timedOut?: boolean;
// }

type DynamicOptions<P = {}> = LoadableGeneratedOptions & {
  ssr?: boolean;
  // TODO: we support a subset of the next.js dynamic features for now
  // loader?: Loader<P> | LoaderMap;
  // loading?: (loadingProps: DynamicOptionsLoadingProps) => JSX.Element | null;
  // loadableGenerated?: LoadableGeneratedOptions;
  // suspense?: boolean;
};

export type NextMixDynamic = <P extends RefAttributes<Component<{}, any, any>> = any>(
  dynamicOptions: Loader<P> /* | DynamicOptions<P> */,
  options?: DynamicOptions<P>,
) =>
  | ComponentType<P>
  | LazyExoticComponent<ComponentType<P>>
  | (() => null);
