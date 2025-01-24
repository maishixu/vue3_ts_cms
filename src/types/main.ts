interface userList {
  id: number;
  name: string;
  realname: string;
  cellphone: number;
  enable: number;
  departmentId: number;
  roleId: number;
  createAt: string;
  updateAt: string;
}
export interface IMain {
  roleList: any[];
  departmentList: any[];
  menuList: any[];
}
export interface ISystem {
  userList: userList[];
  userCount: number;

  pageList: any[];
  pageCount: number;
}
