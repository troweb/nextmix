import mitt, { Emitter } from 'mitt';

export const getEventsHandler = (): Emitter<Record<string, any>> => {
  const emitter = mitt();

  // eslint-disable-next-line no-empty-function
  const noOp = () => {};

  emitter.on('routeChangeStart', noOp);
  emitter.on('beforeHistoryChange', noOp);
  emitter.on('routeChangeComplete', noOp);
  emitter.on('routeChangeError', noOp);
  emitter.on('hashChangeStart', noOp);
  emitter.on('hashChangeComplete', noOp);

  return emitter;
};
