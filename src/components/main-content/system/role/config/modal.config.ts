const modalConfig = {
  pageName: 'role',
  header: {
    newTitle: '新建角色',
    editTitle: '编辑角色',
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
    {
      type: 'custom',
      prop: 'menuList',
      label: '选择权限',
      slotName: 'menuSlot',
    },
  ],
};
export default modalConfig;
