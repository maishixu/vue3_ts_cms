import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
// 1.格式化UTC时间=>东八区时间
export function formatUTC(utcString: string, format = 'YYYY/MM/DD HH:mm:ss') {
  return dayjs.utc(utcString).utcOffset(8).format(format);
}
