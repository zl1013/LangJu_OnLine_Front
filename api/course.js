import request from '@/utils/request'

export default {

   //获取课程分页
   getCourseList(page,limit,searchObj){
      return request({
          url: `/eduservice/coursefront/getCourseList/${page}/${limit}`, 
          method: 'post',
          data: searchObj
        })
    },
    //查询所有分类
    getAllSubject(){
        return request({
            url: '/eduservice/subject/getAllSubject', 
            method: 'get'
          })
    },
    //课程详情
    getCourseInfo(courseId){
        return request({
            url: `/eduservice/coursefront/frontCourseInfo/${courseId}`, 
            method: 'get'
          })
    }

}

