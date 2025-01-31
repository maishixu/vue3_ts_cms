const modalConfig = {
  pageName: 'goods',
  header: {
    newTitle: '新建商品',
    editTitle: '编辑商品',
  },
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '商品名称',
      placeholder: '请输入商品名称',
    },

    {
      type: 'input',
      prop: 'desc',
      label: '商品描述',
      placeholder: '请输入商品描述',
    },
    {
      type: 'input',
      prop: 'oldPrice',
      label: '原价格',
      placeholder: '请输入原价格',
    },
    {
      type: 'input',
      prop: 'newPrice',
      label: '新价格',
      placeholder: '请输入新价格',
    },
    {
      type: 'input',
      prop: 'imgUrl',
      label: '商品图片',
      placeholder: '请输入图片地址',
    },
    {
      type: 'input',
      prop: 'inventoryCount',
      label: '库存',
      placeholder: '请输入商品库存',
    },
    {
      type: 'input',
      prop: 'saleCount',
      label: '销量',
      placeholder: '请输入商品销量',
    },
    {
      type: 'input',
      prop: 'favorCount',
      label: '收藏',
      placeholder: '请输入商品销量',
    },
    {
      type: 'input',
      prop: 'address',
      label: '收藏',
      placeholder: '请输入商品产地',
    },
    {
      type: 'select',
      prop: 'status',
      label: '商品状态',
      placeholder: '请选择商品状态',
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 },
      ],
    },
  ],
};
export default modalConfig;
