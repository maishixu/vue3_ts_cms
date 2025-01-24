import myAxios from '..';

// 1.获取部门列表
export function postDepartmentList() {
  return myAxios.post({
    url: '/department/list',
  });
}
// 2.获取角色列表
export function postRoleList() {
  return myAxios.post({
    url: '/role/list',
  });
}
// 2.获取菜单列表
export function postMenuList() {
  return myAxios.post({
    url: '/menu/list',
  });
}
