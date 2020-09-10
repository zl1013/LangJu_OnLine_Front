import request from '@/utils/request'

export default {

   //获取讲师分页
   getTeacherList(current,limit){
      return request({
          url: `/eduservice/teacherfront/getTeacherList/${current}/${limit}`, 
          method: 'post'
        })
    },
    getTeacherInfo(id){
        return request({
            url: `/eduservice/teacherfront/getTeacherInfo/${id}`, 
            method: 'get'
          })
    }
}

