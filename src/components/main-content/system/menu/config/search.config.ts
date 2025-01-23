const searchConfig = {
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '菜单名称',
      placeholder: '请输入查询的菜单名称',
    },
    {
      type: 'input',
      prop: 'type',
      label: '菜单级别',
      placeholder: '请输入查询的菜单级别',
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间',
    },
  ],
};
export default searchConfig;
