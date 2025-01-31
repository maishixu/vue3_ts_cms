const contentConfig = {
  header: {
    title: '商品列表',
    btnTitle: '新建商品',
  },
  pageName: 'goods',
  dataList: [
    {
      type: 'index',
      label: '序号',
      width: '60px',
    },
    {
      type: 'normal',
      prop: 'name',
      label: '商品名称',
      width: '130px',
    },
    {
      type: 'normal',
      prop: 'oldPrice',
      label: '原价格',
      width: '80px',
    },
    {
      type: 'normal',
      prop: 'newPrice',
      label: '新价格',
      width: '80px',
    },
    {
      type: 'custom',
      prop: 'imgUrl',
      label: '图片',
      width: '90px',
      slotName: 'imgSlot',
    },
    {
      type: 'normal',
      prop: 'inventoryCount',
      label: '库存',
      width: '70px',
    },
    {
      type: 'normal',
      prop: 'saleCount',
      label: '销量',
      width: '70px',
    },
    {
      type: 'normal',
      prop: 'favorCount',
      label: '收藏',
      width: '70px',
    },
    {
      type: 'normal',
      prop: 'address',
      label: '地址',
      width: '70px',
    },
    {
      type: 'timer',
      prop: 'updateAt',
      label: '更新时间',
    },
    {
      type: 'handler',
      label: '操作',
      width: '90px',
    },
  ],
};
export default contentConfig;
