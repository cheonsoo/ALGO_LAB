import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useAppListQuery } from '@/hooks/useAppData';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { SIFrame, SDiv } from './styled';
import { IApp } from '@/types';

const initialState: IApp = {
  id: '',
  publish: false,
  path: '',
  type: '',
  title: '',
  desc: '',
  thumbnail: '',
  created: '',
  updated: ''
};

const App2 = (id: string) => {
  const queryClient = useQueryClient();

  const { data: appList, isLoading, isError } = useAppListQuery();
  const [appInfo, setAppInfo] = useState<IApp>(initialState);

  const params = useParams();

  const tmp = queryClient.getQueryData(['app-data']);
  console.log(`tmp: ${tmp}`);

  // useEffect(() => {
  //   try {}
  //   queryClient.getQueryData(['app-data']);
  // }, []);

  // useEffect(() => {
  //   console.log('### appList', appList);
  //   if (!isEmpty(appList) && appList.length > 0) setAppInfo(appList.find((app) => app.id === id));
  // }, [appList]);

  return <SDiv>{<SIFrame src={appInfo.path}></SIFrame>}</SDiv>;
};
