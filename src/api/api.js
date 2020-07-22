import Server from "./server"
import {getUrlConcat} from '../utils/commons'
class API extends Server{
  async getCaptchaCode(){
    try{
      let result =await this.axios('post','/v1/captchas',{})
      if (result.status === 1 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '获取验证码失败',
          response: result,
        }
        throw err
      }
    }catch(err){
      throw err
    }
  }
  async accountLogin (data) {
    try {
      let result = await this.axios('post', '/v2/login', data)
      if (result.status !== 0 && (result instanceof Object)) {
        return result || []
      } else {
        let err = {
          tip: '登录失败',
          response: result,
        }
        return err
      }
    } catch (err) {
      throw err
    }
  }
}
export default new API()