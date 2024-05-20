'use client';

import { ForwardRefExoticComponent, useState } from 'react';

import type { useFetcherType } from '.';

type State = 'idle' | 'loading' | 'submitting';

/*
 * TODO: Remix useFetcher is making use of FetcherWithComponents type for
 *  useFetcher which contains Form and other things that should be implemented
 *  here later
 */

export const stubUseFetcher: useFetcherType = () => {
  const [data, setData] = useState();
  const [state, setState] = useState<State>('idle');

  const load = (href: string): void => {
    setState('loading');
    fetch(href)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setData(jsonResponse);
        setState('idle');
      })
      .catch((error) => {
        console.error(error);
        setState('idle');
      });
  };

  const undefinedVariables = {
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    text: undefined,
    json: undefined,
    submission: undefined,
    Form: {} as ForwardRefExoticComponent<any>,
    submit: () => null,
  };

  if (state === 'loading') {
    return {
      state,
      type: 'normalLoad',
      data,
      load,
      ...undefinedVariables,
    };
  }

  if (state === 'idle' && data) {
    return {
      state,
      type: 'done',
      data,
      load,
      ...undefinedVariables,
    };
  }

  return {
    state: 'idle',
    type: 'init',
    data,
    load,
    ...undefinedVariables,
  };
};
