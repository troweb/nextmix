import React, { FormEvent, SyntheticEvent } from 'react';

import type { Form } from '@remix-run/react';

type FormProps = React.ComponentProps<typeof Form>;
type EventHandler<E extends SyntheticEvent<any>> = {
  bivarianceHack(event: E, formData?: FormData): void;
}['bivarianceHack'];

type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;

export interface NextMixFormProps extends Omit<FormProps, 'onSubmit'> {
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export type NextMixForm = React.ForwardRefExoticComponent<
  NextMixFormProps & React.RefAttributes<HTMLFormElement>
>;
