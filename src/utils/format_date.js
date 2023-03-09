import dayjs from 'dayjs'

// 格式化成xx月xx日
export function fomatMonthDate(date) {
  return dayjs(date).format('MM月DD日') 
}
// 计算时间差
export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day")
}