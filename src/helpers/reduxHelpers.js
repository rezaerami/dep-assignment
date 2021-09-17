export const createAction = (type) => (payload) => ({
  type,
  payload,
});

export const getActionStatus = (type) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)$/.exec(type);

  if (matches) {
    const [, name, status] = matches;
    return [name, status];
  }
  return [type, ''];
};
