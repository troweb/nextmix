/* eslint-disable react/display-name */
import React, { FormEventHandler } from 'react';

import {
  Form as RemixForm,
  useLocation,
  useNavigate,
  useSearchParams,
} from '@remix-run/react';
import type { FormType } from 'nextmix-shared';

type HTMLSubmitEvent = React.BaseSyntheticEvent<SubmitEvent, Event, HTMLFormElement>;
type HTMLFormSubmitter = HTMLButtonElement | HTMLInputElement;

// This is temporary until this happens: https://github.com/remix-run/remix/discussions/2481
const StubForm: FormType = React.forwardRef<
  HTMLFormElement,
  React.ComponentProps<FormType>
>((props, ref) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const submitter = (event as unknown as HTMLSubmitEvent).nativeEvent
      .submitter as HTMLFormSubmitter | null;

    const targetName = submitter?.getAttribute('name');
    const targetValue = submitter?.getAttribute('value');
    const formData = new FormData(event.target as HTMLFormElement);
    if (targetName && targetValue) {
      formData.append(targetName, targetValue);
    }

    // we don't support methods other than GET
    if (props.method !== 'get') {
      return props.onSubmit?.(event, formData);
    }

    for (const [key, value] of formData) {
      if (!(value instanceof File)) {
        searchParams.set(key, value);
      }
    }

    const action = props.action ?? location.pathname;
    navigate(`${action}?${searchParams}`);

    props.onSubmit?.(event, formData);
  };

  return <form ref={ref} {...props} onSubmit={onSubmit} />;
});

export const Form: FormType =
  process.env.NEXTMIX_USE_STUB === 'true' ? StubForm : RemixForm;
