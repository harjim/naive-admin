import { createI18n } from 'vue-i18n'
import zhCN from './language/zhCN'
import enUS from './language/enUS'

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: window.localStorage.getItem('lang') || 'zhCN',
  messages: {
    zhCN,
    enUS
  }
})
