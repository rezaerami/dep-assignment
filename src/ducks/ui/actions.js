import { createAction } from 'helpers/reduxHelpers';
import uiTypes from './types';

const coreActions = {
  getMenusRequest: createAction(uiTypes.GET_MENUS_REQUEST),
  getMenusSuccess: createAction(uiTypes.GET_MENUS_SUCCESS),
  getMenusFailure: createAction(uiTypes.GET_MENUS_FAILURE),

  getFooterLinksRequest: createAction(uiTypes.GET_FOOTER_LINKS_REQUEST),
  getFooterLinksSuccess: createAction(uiTypes.GET_FOOTER_LINKS_SUCCESS),
  getFooterLinksFailure: createAction(uiTypes.GET_FOOTER_LINKS_FAILURE),
};

export default coreActions;
