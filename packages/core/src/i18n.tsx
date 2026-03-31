import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ICU from 'i18next-icu';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import enUSTranslation from './locales/en-US/translation.json';
import zhHKTranslation from './locales/zh-HK/translation.json';

enum EnumLanguage {
  ZH_CN = 'zh-CN',
  ZH_HK = 'zh-HK',
  EN_US = 'en-US',
}

const valueEnumLanguage = {
  [EnumLanguage.ZH_CN]: {
    text: '中文',
    value: EnumLanguage.ZH_CN,
  },
  [EnumLanguage.ZH_HK]: {
    text: '繁體中文',
    value: EnumLanguage.ZH_HK,
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

function initI18n(
  resources: {
    enTranslation?: Record<string, unknown>;
    zhHKTranslation?: Record<string, unknown>;
  } = {},
) {
  const mergedEnTranslation = { ...enUSTranslation, ...resources.enTranslation };
  const mergedZhHKTranslation = { ...zhHKTranslation, ...resources.zhHKTranslation };

  if (i18n.isInitialized) {
    i18n.addResourceBundle(EnumLanguage.ZH_HK, 'translation', mergedZhHKTranslation, true, true);
    i18n.addResourceBundle(EnumLanguage.EN_US, 'translation', mergedEnTranslation, true, true);
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
      [EnumLanguage.ZH_HK]: {
        translation: mergedZhHKTranslation,
      },
      [EnumLanguage.EN_US]: {
        translation: mergedEnTranslation,
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
