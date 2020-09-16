import * as user from './action-type'
export const saveUserInfo = (userInfo) =>{
  return {
    type:user.SAVE_USERINFO,
    userInfo
  }
}
export const saveAttrInfo = (dataType,value) =>{
  return {
    type:user.SAVE_ATTRINFO,
    dataType,
    value
  }
}
export const modifyUserInfo = (key,value) =>{
  return {
    type:user.MODIFY_USERINFO,
    key,
    value
  }
}
export const savePageInfo = (pageInfo) =>{
  return {
    type:user.SAVE_PAGEINFO,
    pageInfo
  }
}
export const modifyPageInfo = (pageInfo) =>{
  return {
    type:user.MODIFY_PAGEINFO,
    pageInfo
  }
}
