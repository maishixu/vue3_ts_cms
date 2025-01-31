const contentConfig = {
  header: {
    title: '用户列表',
    btnTitle: '新建用户',
  },
  pageName: 'users',
  dataList: [
    {
      type: 'index',
      label: '序号',
      width: '55px',
    },
    {
      type: 'normal',
      prop: 'name',
      label: '用户名',
      width: '108px',
    },
    {
      type: 'normal',
      prop: 'realname',
      label: '真实姓名',
      width: '108px',
    },
    {
      type: 'normal',
      prop: 'cellphone',
      label: '电话号码',
      width: '125px',
    },
    {
      type: 'custom',
      prop: 'enable',
      label: '状态',
      width: '80px',
      slotName: 'enableSlot',
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
      width: '135px',
    },
  ],
};
export default contentConfig;
