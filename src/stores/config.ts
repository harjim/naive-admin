import { dateZhCN, zhCN } from 'naive-ui'

export const useConfig = defineStore('config', () => {
  const lang = ref({ locale: zhCN, dateLocale: dateZhCN })

  return { lang }
})
