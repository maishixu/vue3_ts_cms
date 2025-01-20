import myAxios from '..';
// 请求用户列表
export function postUserListData() {
  return myAxios.post({
    url: '/users/list',
    data: {
      offset: 0,
      size: 10,
    },
  });
}
