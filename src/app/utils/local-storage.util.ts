export class LocalStorageUtil {

  public static set(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static get(key: any) {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  public static getAll() {
    const storageKeys = {...localStorage};
    let data = {};
    for (const key in storageKeys) {
      data = {...data, [key]: this.get(key)};
    }
    return data;
  }

  public static remove(key: any) {
    localStorage.removeItem(key);
  }

  public static removeAll() {
    localStorage.clear();
  }
}
