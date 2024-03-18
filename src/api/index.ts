import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

const client: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

client.interceptors.request.use((config) => {
  console.log('### interceptors.request');

  return config;
});

client.interceptors.response.use(
  (res) => {
    console.log('### interceptors.response');

    return res;
  },
  (error: AxiosError) => {
    const { data, status, config } = error.response!;
    switch (status) {
      case 200:
        console.log('success');
        break;

      case 400:
        console.error(data);
        break;

      case 401:
        console.error('unauthorised');
        break;

      case 404:
        console.error('/not-found');
        break;

      case 500:
        console.error('/server-error');
        break;
    }
    return Promise.reject(error);
  }
);

export const getData = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await client.get<T>(url, config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('api returned an error');
    }
  }
};

export const postData = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  try {
    const response = await client.post<AxiosResponse<T>>(url, data, config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('api returned an error');
    }
  }
};

export const putData = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  try {
    const response = await client.put<AxiosResponse<T>>(url, data, config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('api returned an error');
    }
  }
};

export const deleteData = async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  try {
    const response = await client.delete<AxiosResponse<T>>(url, config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error('api returned an error');
    }
  }
};
