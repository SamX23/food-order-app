export const storeToLocal = (key: string, value: any) => {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(key, jsonValue);
};

export const getFromLocal = (key: string) => {
  const jsonValue = localStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
