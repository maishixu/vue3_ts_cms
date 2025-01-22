const contentConfig = {
  header: {
    title: '角色列表',
    btnTitle: '新建角色',
  },
  pageName: 'role',
  dataList: [
    {
      type: 'index',
      label: '序号',
      width: '70px',
    },
    {
      type: 'normal',
      prop: 'name',
      label: '角色名称',
      width: '150px',
    },
    {
      type: 'normal',
      prop: 'intro',
      label: '角色介绍',
      width: '150px',
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
      width: '160px',
    },
  ],
};
export default contentConfig;
