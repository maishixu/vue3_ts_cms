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
}
export interface ISystem {
  userList: userList[];
  userCount: number;

  departmentList: any[];
  departmentCount: number;
}
