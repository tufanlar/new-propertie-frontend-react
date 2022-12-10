
export const loadData = (key) => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
}

export const saveData = (key, val) => {
    try {
      const serializedState = JSON.stringify(val);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      //ignoring write erros
    }
}