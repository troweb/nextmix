/* eslint-disable react/display-name */
import React from 'react';

import type { Form as RemixForm } from '@remix-run/react';
import type { FormType } from 'nextmix-shared';

export const Form: FormType = React.forwardRef<
  HTMLFormElement,
  React.ComponentProps<typeof RemixForm>
>((props, ref) => {
  const { onSubmit, ...otherProps } = props;
  const submitForm: React.FormEventHandler<HTMLFormElement> = (...args) => {
    args[0].preventDefault();
    onSubmit?.(...args);
  };

  return <form ref={ref} onSubmit={submitForm} {...otherProps} />;
});
