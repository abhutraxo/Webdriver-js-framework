
export function androidIDSelector(selector) {
  let str = `'android=new UiSelector().resourceId("${selector}")'`;
  str = str.substring(1, str.length - 1);
  return str;
}

export function androidClassSelector(selector) {
  let str = `'android=new UiSelector().className("${selector}")'`;
  str = str.substring(1, str.length - 1);
  return str;
}

export function androidTextClassSelector(text, className) {
  let str = `'android=new UiSelector().text("${text}").className("${className}")'`;
  str = str.substring(1, str.length - 1);
  return str;
}


