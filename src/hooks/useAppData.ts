import { useQuery } from '@tanstack/react-query';
import { getAppConfigs, fetchAppData } from '@/api/apps';
import { IApp } from '@/types';

export const useAppListQuery = () => {
  const appList = useQuery({
    queryKey: ['app-data', { cacheTime: 3000 }],
    queryFn: getAppConfigs
  });

  console.log('### useAppListQuery');

  return { data: appList.data as IApp[], isLoading: appList.isLoading, isError: appList.isError, error: appList.error };
};

export const useAppInfoQuery = (id: string) => {
  const appInfo = useQuery({
    queryKey: ['app-info'],
    queryFn: () => fetchAppData(id)
  });

  console.log('### useAppInfoQuery');

  return { data: appInfo.data, isLoading: appInfo.isLoading, isError: appInfo.isError, error: appInfo.error };
};
