import * as user from './action-type'

let defaultState = {
  addressList: [],
  addressName: '',
  temMessage: '',
  hasAddressList: [],
  operate: 'edit',
  userInfo: {},
  geohash: [],
  pageInfo: {}
}
export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case user.SAVE_USERINFO:
      return {
        ...state,
        userInfo: action.userInfo
      }
    case user.SAVE_ATTRINFO:
      return {
        ...state,
        ...{[action.dataType]: action.value}
      }
    case user.MODIFY_USERINFO:
      return {
        ...state,
        userInfo: {...state.userInfo, [action.key]: action.value}
      }
    case user.SAVE_PAGEINFO:
      return {
        ...state,
        pageInfo: action.pageInfo
      }
    case user.MODIFY_PAGEINFO:
      return{
        ...state,
        pageInfo: Object.assign({},state.pageInfo,action.pageInfo)
      }
    default:
      return state
  }
}
