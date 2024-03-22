import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient, QueryClient } from '@tanstack/react-query';
import { getAppConfigs, fetchAppData } from '@/api/apps';

import { SIFrame, SDiv } from './styled';
import { useAppInfoQuery } from '@/hooks/useAppData';
import StyledLoadingDiv from '@/components/styled/StyledLoadingDiv';
import StyledErrorDiv from '@/components/styled/StyledErrorDiv';
import { useEffect } from 'react';
import { IApp } from '@/types';

const App = () => {
  const params = useParams();

  // const [appInfo, setAppInfo] = useState<IApp>({ id: '', publish: false, path: '' });
  const { data: appInfo, isLoading, isError } = useAppInfoQuery(params.id || '');

  if (isLoading) {
    return <StyledLoadingDiv>Fetching [{params.id}] App Info ...</StyledLoadingDiv>;
  }

  if (isError) {
    return <StyledErrorDiv>Error ......</StyledErrorDiv>;
  }

  return <SDiv>{appInfo && <SIFrame src={appInfo.path}></SIFrame>}</SDiv>;
};

export default App;
