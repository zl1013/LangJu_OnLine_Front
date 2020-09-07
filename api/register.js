import request from '@/utils/request'

export default {

   //发送验证码
   sendCode(phone){
      return request({
          url: `/educenter/member/sendCode/${phone}`, 
          method: 'get',
        })
    },
    //注册
    regist(registerVo){
    return request({
        url: `/educenter/member/regist`, 
        method: 'post',
        data:registerVo
      })
}

}

