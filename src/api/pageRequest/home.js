import server from '@/api/request';

/**
 * get请求 获取用户
 */
export function getHome(data){   //get请求传参
    return server.get('Home/BlocManage/getAuthUserList', {params:data})
}


/**
 *post请求  授权用户
 */
export function postHome(data){   //post请求传参
    return server.post('Home/BlocManage/auth', data)
}
