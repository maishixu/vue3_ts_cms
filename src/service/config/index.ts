// 封装的请求配置
let BASE_URL = '';
if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL = 'http://123.207.32.32:5000';
} else {
  // 开发环境
  BASE_URL = 'http://123.207.32.32:5000';
}

export const TIME_OUT = 10000;
export { BASE_URL };
