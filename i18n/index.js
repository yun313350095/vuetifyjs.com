import { camelActual } from '@/util/helpers'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/lang/en'

Vue.use(VueI18n)

export function createI18n (ssrContext) {
  let locale = 'en'

  if (ssrContext && ssrContext.lang) {
    locale = ssrContext.lang
  } else if (typeof document !== 'undefined') {
    locale = document.documentElement.lang
  }

  return new VueI18n({
    locale,
    fallbackLocale: 'en',
    messages: { en }
  })
}
