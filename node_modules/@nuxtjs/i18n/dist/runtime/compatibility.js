import { isRef } from "vue";
function isI18nInstance(i18n) {
  return i18n != null && "global" in i18n && "mode" in i18n;
}
function isComposer(target) {
  return target != null && !("__composer" in target) && "locale" in target && isRef(target.locale);
}
export function isVueI18n(target) {
  return target != null && "__composer" in target;
}
export function getI18nTarget(i18n) {
  return isI18nInstance(i18n) ? i18n.global : i18n;
}
export function getComposer(i18n) {
  const target = getI18nTarget(i18n);
  if (isComposer(target)) return target;
  if (isVueI18n(target)) return target.__composer;
  return target;
}
