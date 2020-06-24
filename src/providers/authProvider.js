import { fetchUtils } from 'react-admin';

import { backendUrl } from './../config';

const httpClient = fetchUtils.fetchJson;

export default {
  // called when the user attempts to log in
  login: ({ username, password }) =>  {
    const url = `${backendUrl}/auth/login`;
    const options = {
      method: 'POST',
      body: JSON.stringify({ userId: username, password }),
    };

    return httpClient(url, options)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        localStorage.setItem('username', 'test');
        //return response.json();
      })
      /*.then(({ token }) => {
        localStorage.setItem('token', token);
      });*/
  },
  // called when the user clicks on the logout button
  logout: () => {
      localStorage.removeItem('username');
      return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('username')
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};
