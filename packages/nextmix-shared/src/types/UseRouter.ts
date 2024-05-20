export interface NextMixRouter {
  push: (url: string, config?: { scroll: boolean }) => void;
  replace: (url: string, config?: { scroll: boolean }) => void;
  prefetch: (href: string) => void;
  refresh: () => void;
  back: () => void;
  forward: () => void;
}
