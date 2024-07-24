/**
 *Store token in localstorage
 *
 * @param {*} token  access token
 */
export const setToken = (token: string) => {
  localStorage.setItem('token', JSON.stringify(token));
};

/**
 *Get from localstorage
 *
 * @param {*} name name of item
 * @returns object stored in localstorage
 */
export const getFromStorage = (name: string) => {
  const data = localStorage.getItem(name);

  if (!data || typeof data === 'undefined') {
    return '';
  }

  return data;
};

/**
 *Store user in localstorage
 *
 * @param {*} user user object
 */
export const setUser = (user: any) => {
  localStorage.setItem('user', JSON.stringify(user));
};

/**
 *Store user in localstorage
 *
 * @param {*} user user object
 */
export const setUserData = (user: any) => {
  localStorage.setItem('userData', JSON.stringify(user));
};

/**
 * Clear everything in local storage
 *
 *
 */
export const clearStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('userData');
};
