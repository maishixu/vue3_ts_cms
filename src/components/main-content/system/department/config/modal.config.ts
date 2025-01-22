const modalConfig = {
  pageName: 'departMent',
  header: {
    newTitle: '创建新部门',
    editTitle: '修改部门信息',
  },
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '部门名称',
      placeholder: '请输入部门名称',
    },
    {
      type: 'input',
      prop: 'leader',
      label: '部门领导',
      placeholder: '请输入部门领导',
    },
    {
      type: 'select',
      prop: 'parentId',
      label: '上级部门',
      placeholder: '请选择上级部门',
      options: [] as { label: string; value: number }[],
    },
  ],
};
export default modalConfig;
