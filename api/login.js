import request from '@/utils/request'

export default {

   //发送验证码
   submitLogin(userInfo){
      return request({
          url: `/educenter/member/login`, 
          method: 'post',
          data: userInfo
        })
    },
    getLoginInfo(){
        return request({
            url: `/educenter/member/getMemberInfo`, 
            method: 'get'
        })
    }
}

