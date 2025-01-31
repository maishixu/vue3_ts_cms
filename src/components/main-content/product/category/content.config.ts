const contentConfig = {
  header: {
    title: '类别列表',
    btnTitle: '新建类别',
  },
  pageName: 'category',
  dataList: [
    {
      type: 'index',
      label: '序号',
      width: '70px',
    },
    {
      type: 'normal',
      prop: 'name',
      label: '类别名称',
      width: '170px',
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
      width: '170px',
    },
  ],
};
export default contentConfig;
