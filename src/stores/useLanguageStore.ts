import { create } from "zustand";
import en from "../../messages/kg.json";
import ru from "../../messages/ru.json";

interface LanguageStore {
  language: "kg" | "ru";
  setLanguage: (language: "kg" | "ru") => void;
  t: (key: string) => string;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  language: "kg",
  setLanguage: (language: "kg" | "ru") => set({ language }),
  t: (key: string): string => {
    const currentLanguage = get().language;
    const translations: Record<string, any> = currentLanguage === "ru" ? ru : en;

    // Попробуем найти перевод, вернем строку по умолчанию, если не найдено
    const translation = key
      .split('.')
      .reduce((obj, keyPart) => (obj && obj[keyPart] !== undefined ? obj[keyPart] : undefined), translations);

    return typeof translation === "string" ? translation : key; // Гарантируем, что возвращается строка
  },
}));
