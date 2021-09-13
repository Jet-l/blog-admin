import request from '@/utils/request'

export function getArticleList(params) {
  return request({
    url: '/articles',
    method: 'get',
    params
  })
}

export function postArticle(params) {
  return request({
    url: '/addArticle',
    method: 'post',
    data: {
      title: params.title,
      content: params.content,
      category: params.category,
      tags: params.tags.join(),
      tabloid: params.tabloid,
      type: params.type ? 1 : 0,
      author: params.author
    }
  })
}
/**
 * 根据 id 删除文章
 * @param {id:number} id 文章 id
 */
export function deleteArticleById(id) {
  return request({
    url: '/article/' + id,
    method: 'delete'
  })
}

/**
 * 根据 id 更新文章
 * @param {id:number} id 文章 id
 * @param {*} params 要更新的字段
 */
export function updateArticleById(id, params) {
  return request({
    url: '/article/' + id,
    method: 'put',
    data: {
      title: params.title,
      content: params.content,
      category: params.category,
      tags: params.tags.join(),
      tabloid: params.tabloid,
      type: params.type ? 1 : 0,
      author: params.author
    }
  })
}

/**
 * 根据文章 id 获取文章信息
 * @param {id:number} id 文章id
 */
export function getArticleById(id) {
  return request({
    url: '/article/' + id,
    method: 'get'
  })
}

