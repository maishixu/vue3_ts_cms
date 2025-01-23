const contentConfig = {
  header: {
    title: '菜单列表',
  },
  pageName: 'menu',
  dataList: [
    {
      prop: 'name',
      label: '菜单名称',
      width: '140px',
    },

    {
      prop: 'url',
      label: '菜单url',
      width: '140px',
    },
    {
      prop: 'icon',
      label: '菜单icon',
      width: '140px',
    },

    {
      prop: 'sort',
      label: '排序',
      width: '60px',
    },
    {
      prop: 'type',
      label: '级别',
      width: '60px',
    },
    {
      prop: 'permission',
      label: '权限',
      width: '100px',
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
  ],
};
export default contentConfig;
