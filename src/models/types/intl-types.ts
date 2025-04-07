export enum EnumIntl {
  KYRGYZ = "kk",
  RUSSIAN = "ru",
}

// types
export type IntlType = EnumIntl.KYRGYZ | EnumIntl.RUSSIAN;

export interface ILocale {
  name: string;
  locale: IntlType;
  short_name: string;
}

export interface PropsWithTitle {
  title: string;
  query?: string;
}
