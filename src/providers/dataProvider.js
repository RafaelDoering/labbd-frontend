import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

import { backendUrl } from './../config';

const httpClient = fetchUtils.fetchJson;

export default {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      limit: perPage,
      offset: (page - 1) * perPage,
      filter: JSON.stringify(params.filter),
    };
    const url = `${backendUrl}/${resource}?${stringify(query)}`;

    return httpClient(url)
      .then(({ headers, json }) => {
        return {
          data: json.data,
          total: json.total,
        };
      });
  },

  getOne: (resource, params) => {
    const url = `${backendUrl}/${resource}/${params.id}`;

    return httpClient(url)
      .then(({ json }) => {
        return { data: json };
    });
  },

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${backendUrl}/${resource}?${stringify(query)}`;

    return httpClient(url)
      .then(({ json }) => {
        return { data: json };
      });
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${backendUrl}/${resource}?${stringify(query)}`;

    return httpClient(url)
      .then(({ headers, json }) => {
        return {
          data: json,
          total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }
      });
  },

  update: (resource, params) => {
    const url = `${backendUrl}/${resource}/${params.id}`;
    const options = {
      method: 'PUT',
      body: JSON.stringify(params.data),
    };

    return httpClient(url, options)
      .then(({ json }) => {
        return { data: json };
      });
  },

  updateMany: (resource, params) => {
    const query = {
        filter: JSON.stringify({ id: params.ids}),
    };
    const url = `${backendUrl}/${resource}?${stringify(query)}`;
    const options = {
      method: 'PUT',
      body: JSON.stringify(params.data),
    };

    return httpClient(url, options)
      .then(({ json }) => {
        return { data: json };
      });
  },

  create: (resource, params) => {
    const url = `${backendUrl}/${resource}`;
    const options = {
      method: 'POST',
      body: JSON.stringify(params.data),
    };

    return httpClient(url, options)
      .then(({ json }) => {
        return { data: { ...params.data, id: json.id } };
      });
  },

  delete: (resource, params) => {
    const url = `${backendUrl}/${resource}/${params.id}`;
    const options = {
      method: 'DELETE',
    };

    return httpClient(url, options)
      .then(({ json }) => {
        return { data: json };
      });
  },

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids}),
    };
    const url = `${backendUrl}/${resource}?${stringify(query)}`;
    const options = {
      method: 'DELETE',
      body: JSON.stringify(params.data),
    };

    return httpClient(url, options)
      .then(({ json }) => {
        return { data: json };
      });
  }
};
