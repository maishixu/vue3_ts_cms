const contentConfig = {
  header: {
    title: '部门列表',
    btnTitle: '新建部门',
  },
  formItems: [
    {
      type: 'index',
      label: '序号',
      width: '60px',
    },
    {
      type: 'normal',
      prop: 'name',
      label: '部门名称',
      width: '120px',
    },
    {
      type: 'normal',
      prop: 'leader',
      label: '部门名称',
      width: '120px',
    },
    {
      type: 'normal',
      prop: 'parentId',
      label: '上级部门',
      width: '120px',
    },
    {
      type: 'timer',
      prop: 'createAt',
      label: '创建时间',
    },
    {
      type: 'timer',
      prop: 'updateAt',
      label: '更新时间',
    },
    {
      type: 'handler',
      label: '操作',
      width: '140px',
    },
    {
      type: 'custom',
      slotName: 'testLeader',
      label: '测试插槽',
      width: '100px',
      prop: 'leader',
    },
  ],
  pageName: 'department',
};
export default contentConfig;
