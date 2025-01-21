import myAxios from '..';
// 1.请求用户列表
export function postUserListData(postData: any) {
  return myAxios.post({
    url: '/users/list',
    data: postData,
  });
}
// 2.删除用户
export function deleteUserData(id: number) {
  return myAxios.delete({
    url: `/users/${id}`,
  });
}
// 3.新建用户
export function createUser(formData: any) {
  return myAxios.post({
    url: '/users',
    data: formData,
  });
}
// 4.修改用户
export function editUserData(id: number, formData: any) {
  return myAxios.patch({
    url: `/users/${id}`,
    data: formData,
  });
}

/* 封装：增删改查 */
// 1.查询
export function postPageListData(pageName: string, postData: any) {
  return myAxios.post({
    url: `/${pageName}/list`,
    data: postData,
  });
}
// 2.删除
export function deletePageData(pageName: string, id: number) {
  return myAxios.delete({
    url: `/${pageName}/${id}`,
  });
}
// 3.新增
export function createPageData(pageName: string, formData: any) {
  return myAxios.post({
    url: `/${pageName}`,
    data: formData,
  });
}
// 4.修改
export function editPageData(pageName: string, id: number, formData: any) {
  return myAxios.patch({
    url: `/${pageName}/${id}`,
    data: formData,
  });
}
