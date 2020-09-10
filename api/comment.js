import request from '@/utils/request'

export default {

   //获取课程分页
   getCommentList(page,limit,courseId){
      return request({
          url: `/eduservice/comment/getCommentList/${page}/${limit}/${courseId}`, 
          method: 'get'
        })
    },
    //查询所有分类
    addComment(commentVo){
        return request({
            url: '/eduservice/comment/addComment', 
            method: 'post',
            data: commentVo
          })
    }

}

