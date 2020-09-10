import request from '@/utils/request'

export default {

   //生成订单
   createOrder(courseId){
        return request({
            url: `/eduorder/order/createOrder/${courseId}`, 
            method: 'post',
          })
    },
    //查询订单
    getOrderInfo(orderId){
    return request({
        url: `/eduorder/order/getOrderInfo/${orderId}`, 
        method: 'get',
      })
    },
    //生成微信支付二维码
    createNative(orderNo) {
        return request({
            url: `/eduorder/paylog/createNative/${orderNo}`,
            method: 'get'
        })
    },
    //根据id获取订单支付状态
    queryPayStatus(orderNo) {
        return request({
            url: `/eduorder/paylog/queryPayStatus/${orderNo}`,
            method: 'get'
        })
    },
    //根据用户id，课程id查询课程是否已购买
    isPay(courseId){
        return request({
            url: `/eduorder/order/isPay/${courseId}`,
            method: 'get'
        })
    }

}

