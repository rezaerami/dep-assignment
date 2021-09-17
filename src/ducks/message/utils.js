import { getActionStatus } from 'helpers';

const clearAlert = (alerts, alert) => {
  const [name] = getActionStatus(alert().type);
  return alerts.filter(({ key }) => key !== name);
};

/**
 * Filter all toasts but this one
 * @param id
 * @param toasts
 * @returns {*}
 */
const filterToasts = (id, toasts) => toasts.filter((toast) => toast.id !== id);

export default {
  clearAlert,
  filterToasts,
};
