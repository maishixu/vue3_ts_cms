import myAxios from '@/service';

export function getAmountListData() {
  return myAxios.get({
    url: '/goods/amount/list',
  });
}

export function getGoodsCategoryCount() {
  return myAxios.get({
    url: '/goods/category/count',
  });
}

export function getGoodsCategorySale() {
  return myAxios.get({
    url: '/goods/category/sale',
  });
}

export function getGoodsCategoryFavor() {
  return myAxios.get({
    url: '/goods/category/favor',
  });
}

export function getGoodsAddressSale() {
  return myAxios.get({
    url: '/goods/address/sale',
  });
}
