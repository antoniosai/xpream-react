
class LocalStorageService {

  addRawItem(key: string,item: Object) {
    localStorage.setItem(key, String(item));
  }

  addJsonItem(key: string,item: Object) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getJsonItem<T>(key: string) {
    if(localStorage.getItem(key) === null ) {
      return JSON.parse("{}") as T;
    }
    return JSON.parse(String(localStorage.getItem(key))) as T;
  }

  // getStringifyJsonItem(key: string) {
  //   if(localStorage.getItem(key) === null ) {
  //     return JSON.parse("{}") as T;
  //   }
  //   return JSON.parse(String(localStorage.getItem(key))) as T;
  // }

  getRawItem(key: string) {
    return localStorage.getItem(key);
  }

  deleteItem(key: string) {
    localStorage.removeItem(key);
  }

  getLocalKey(index: number) {
    return localStorage.key(index);
  }

  deleteAllItem(){
    localStorage.clear();
  }
}

export default new LocalStorageService();