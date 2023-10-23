export class LocalStorageUtil {

  public static set(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static get(key: any) {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  public static remove(key: any) {
    localStorage.removeItem(key);
  }

  public static removeAll() {
    localStorage.clear();
  }
}
