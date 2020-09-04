import request from '@/utils/request'

export default {

   //查询banner
   banner(){
        return request({
            url: `/educms/bannerfront/banner`, 
            method: 'get',
          })
    },
    //查询热门讲师和热门课程
    index(){
    return request({
        url: `/eduservice/indexfront/index`, 
        method: 'get',
      })
}

}

