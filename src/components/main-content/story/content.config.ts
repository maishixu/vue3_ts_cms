const contentConfig = {
  header: {
    title: '故事列表',
  },
  pageName: 'story',
  dataList: [
    {
      type: 'index',
      label: '序号',
      width: '60px',
    },
    {
      type: 'normal',
      prop: 'title',
      label: '故事名称',
      width: '130px',
    },
    {
      type: 'normal',
      prop: 'content',
      label: '故事内容',
    },
    {
      type: 'timer',
      prop: 'createAt',
      label: '创建时间',
      width: '180px',
    },
  ],
};
export default contentConfig;
