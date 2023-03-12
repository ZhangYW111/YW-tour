import dayjs from 'dayjs'

// 格式化成xx月xx日
export function fomatMonthDate(date, formatStr="MM月DD日") {
  return dayjs(date).format(formatStr)  // 接收一个formatStr格式， 默认 xx月xx日
}
// 计算时间差
export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day")
}