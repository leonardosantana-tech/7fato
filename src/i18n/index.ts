import { ptBR } from "./dictionaries/pt-BR";
import { en } from "./dictionaries/en";
import { Locale } from "./config";
export const dictionaries = { pt: ptBR, en: en };
export const getDictionary = (locale: Locale) => {
  return dictionaries[locale] || dictionaries.pt;
};
