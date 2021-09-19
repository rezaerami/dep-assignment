export const serializeObject = (object) => {
  if (!object || typeof object !== 'object') {
    return '';
  }
  const result = [];
  Object.keys(object).forEach((property) => {
    const prop = object[property];
    if (typeof prop === 'object' && prop !== null) {
      if (Array.isArray(prop) && prop.length) {
        prop.forEach((item) => result.push(`${property}[]=${item}`));
      } else if (!Array.isArray(prop) && Object.keys(prop).length) {
        Object.keys(prop).forEach((key) =>
          result.push(`${property}[${key}]=${prop[key]}`),
        );
      }
    } else if (typeof prop !== 'undefined' && prop !== null) {
      result.push(`${property}=${prop}`);
    }
  });
  return result.join('&');
};
