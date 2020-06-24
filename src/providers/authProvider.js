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
        const responseJson = JSON.parse(response.body);
        localStorage.setItem('token', responseJson.token);
        localStorage.setItem('departamento', responseJson.departamento);
        localStorage.setItem('id', responseJson.id);
      })
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('departamento');
    localStorage.removeItem('id');
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      localStorage.removeItem('departamento');
      localStorage.removeItem('id');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('token')
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    const role = localStorage.getItem('departamento');
    return role ? Promise.resolve(role) : Promise.reject();
  },
};
