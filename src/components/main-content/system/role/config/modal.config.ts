const modalConfig = {
  pageName: 'role',
  header: {
    newTitle: '新建角色',
    editTitle: '新建用户',
  },
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '角色名称',
      placeholder: '请输入角色名称',
    },
    {
      type: 'input',
      prop: 'intro',
      label: '权限描述',
      placeholder: '请输入角色描述',
    },
  ],
};
export default modalConfig;
