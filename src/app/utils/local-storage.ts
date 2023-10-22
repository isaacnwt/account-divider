export class LocalStorage {

  public static set(key: any, value: any) {
    window.localStorage.setItem(key, value);
  }

  public static get(key: any) {
    return window.localStorage.getItem(key);
  }
}
