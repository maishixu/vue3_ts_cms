const searchConfig = {
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '商品名称',
      placeholder: '请输入查询的商品名称',
    },
    {
      type: 'input',
      prop: 'address',
      label: '商品地址',
      placeholder: '请输入查询的商品产地',
    },
    {
      type: 'select',
      prop: 'status',
      label: '商品状态',
      placeholder: '请选择查询的商品状态',
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 },
      ],
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间',
    },
  ],
};
export default searchConfig;
