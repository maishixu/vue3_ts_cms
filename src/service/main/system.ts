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
