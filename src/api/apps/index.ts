import { IApp } from '@/types';
import { getData } from '@/api';

export const getAppConfigs = async () => {
  const url: string = `${process.env.REACT_APP_S3_BUCKET_STATIC}/files/config/apps.json`;
  const data = await getData<IApp[]>(url);
  return data || [];
};

export const fetchAppData = async (id: string) => {
  const apps = await getAppConfigs();
  const app = apps.find((app) => app.id === id);
  return app || ({} as IApp);
};
