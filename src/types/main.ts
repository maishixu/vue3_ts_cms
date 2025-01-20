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
export interface ISystem {
  userList: userList[];
  userCount: number;
}
