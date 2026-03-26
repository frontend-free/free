import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ICU from 'i18next-icu';
import { I18nextProvider, initReactI18next } from 'react-i18next';

enum EnumLanguage {
  ZH_CN = 'zh-CN',
  EN_US = 'en-US',
}

const valueEnumLanguage = {
  [EnumLanguage.ZH_CN]: {
    text: '中文',
    value: EnumLanguage.ZH_CN,
  },
  [EnumLanguage.EN_US]: {
    text: '英文',
    value: EnumLanguage.EN_US,
  },
};

const listLanguage = Object.keys(valueEnumLanguage).map((key) => {
  const item = valueEnumLanguage[key];

  return {
    value: item.value !== undefined ? item.value : key,
    label: item.text,
    originData: item.data,
  };
});

let hasSetupPlugins = false;

function getDefaultLng() {
  if (typeof window === 'undefined') {
    return EnumLanguage.ZH_CN;
  }

  const cacheLng = window.localStorage.getItem('i18nextLng') || EnumLanguage.ZH_CN;
  const lng = listLanguage.find((item) => item.value === cacheLng) ? cacheLng : EnumLanguage.ZH_CN;

  return lng;
}

function initI18n({ enTranslation = {} }: { enTranslation?: Record<string, unknown> } = {}) {
  if (i18n.isInitialized) {
    i18n.addResourceBundle(EnumLanguage.EN_US, 'translation', enTranslation, true, true);
    return;
  }

  if (!hasSetupPlugins) {
    i18n.use(LanguageDetector).use(initReactI18next).use(ICU);
    hasSetupPlugins = true;
  }

  const lng = getDefaultLng();
  console.log('initI18n', lng);

  void i18n.init({
    resources: {
      [EnumLanguage.ZH_CN]: {
        translation: {},
      },
      [EnumLanguage.EN_US]: {
        translation: enTranslation,
      },
    },
    lng,
    fallbackLng: EnumLanguage.ZH_CN,
    interpolation: {
      escapeValue: false,
    },
  });
}

function I18nProvider({ children }: { children: React.ReactNode }) {
  initI18n();
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

initI18n();

if (typeof window !== 'undefined') {
  // @ts-ignore
  window._i18n = i18n;
}

export { EnumLanguage, I18nProvider, initI18n, listLanguage, valueEnumLanguage };
