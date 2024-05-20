# NextMix

Remix and Next.js Interoperability Layer.

- Use this package if you want your components to work both in Remix and Next.js projects.  
- **Don't** use this package If the components that you want to share between Remix and Next.js projects don't use Next.js/Remix specific APIs/Componetns e.g. `next/router`, `next/image`, links, meta, etc.  
- **Don't** use this package if you want to migrate from one framework to other and forget about the previous one. We suggest that you refactor your page/route codes one by one.  


## Install

You should alias the `nextmix` package to `nextmix-next` in your Next.js projects and `nextmix-remix` in your Remix projects. Run `yarn add nextmix@npm:nextmix-[framework]` or `npm install -S nextmix@npm:nextmix-[framework]`.  

## Usage

In case you have a monorepo with some Next and Remix projects and a shared package that its modules are used by both Next and Remix projects you have to force every application to use its own version of Nextmix.

In Next.js:
  1. add `nextmix` to `transpilePackages`
  2. add the following to your webpack config in `next.config.js`: 
    `config.resolve.alias = { nextmix: path.resolve('./node_modules/nextmix') }`

In Remix (Vite)
  1. add `nextmix` and `nextmix-shared` to `ssr.noExternal` array in `vite.config.ts`
  2. add `nextmix` to `resolve.dedup` list so there would be one version of it everywhere

Use NextMix equivalent functions in your React components:  

| NextMix | Interface | Remix | Next |
| ---     | ---       | ---   | ---  |
| import { Link } from 'nextmix' | Next + Remix | import { Link } from '@remix/react' | import Link from 'next/link' |
| import { Image } from 'nextmix' | Next | <img /> | import Image from 'next/image' |
| import { useRouter } from 'nextmix' | Next | import { useLocation, useNavigate, useSearchParams } from '@remix-run/react' | import { useRouter } from 'next/link' |
| import { useSearchParams } from 'nextmix'  | Remix  | import { useSearchParams } from '@remix-run/react'  | import { useRouter } from 'next/link' |
| import { usePathname } from 'nextmix' | Remix | import { useLocation } from '@remix-run/react' | import { usePathname } from 'next/link' |
| import { Script } from 'nextmix' | Next | <script /> | import Script from 'next/script' |
| import { withMetaTags } from 'nextmix' | NextMix | export meta: MetaFunction = ...... | import { Head } from 'next/head' |
| import { withLinkTags } from 'nextmix' | NextMix | export links: LinksFunction = ...... | import { Head } from 'next/head' |

Next.js and Remix don't exactly support all the features of each other, so we decided to follow the following rules in designing nextmix interfaces:
  - If a feature exists in one and not the other we fallback to browser default for the interface (e.g. `next/image` will turn into `<img>` tag)
  - For simillar features that are supported by both of them (e.g. Router) we use more complete interface. For example `useSearchParams` has more features in Remix so we use Remix interface and implement the missing parts for nextmix-next
  - For simillar features that are simply too hard / impossible to port we've designed a new inteface (e.g. Next.js <title />, <meta /> and <link />). For example the link merges both interfaces.
