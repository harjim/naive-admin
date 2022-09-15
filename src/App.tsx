import { RouterView } from 'vue-router'
import { NConfigProvider } from 'naive-ui'
import { useConfig } from '@/stores/config'

export default defineComponent({
  setup() {
    const { lang } = useConfig()

    return () => (
      <NConfigProvider locale={lang.locale} dateLocale={lang.dateLocale}>
        <RouterView />
      </NConfigProvider>
    )
  }
})
