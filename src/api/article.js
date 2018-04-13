import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/admin/order/search',
    method: 'get',
    params: query
  })
}

export function fetchArticle() {
  return request({
    url: '/article/detail',
    method: 'get'
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}

export function shjres(data) {
  // http://192.168.100.12:28080
  return request({
    url: '/ss/api/jwt/auth',
    method: 'post',
    data
  })
}
