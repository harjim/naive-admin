import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const { t } = useI18n()

    return () => <div>{t(`Home.title`)}</div>
  }
})
