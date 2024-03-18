import { useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { getAppConfigs, fetchAppData } from '@/api/apps';

import { SIFrame, SDiv } from './styled';
import { useAppInfoQuery } from '@/hooks/useAppData';
import StyledLoadingDiv from '@/components/styled/StyledLoadingDiv';
import StyledErrorDiv from '@/components/styled/StyledErrorDiv';
import { useEffect } from 'react';

const App = () => {
  const params = useParams();

  const { data: appInfo, isLoading, isError } = useAppInfoQuery(params.id || '');

  const queryClient = useQueryClient();

  const test1 = async () => {
    try {
      const tmp = queryClient.getQueryData(['app-data']);
      console.log(`tmp: ${tmp}`);

      const data = await queryClient.fetchQuery({ queryKey: ['app-data'], queryFn: getAppConfigs });
      console.log(`data: ${JSON.stringify(data)}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(`tmp222`);

    test1();
  }, []);

  if (isLoading) {
    return <StyledLoadingDiv>Fetching [{params.id}] App Info ...</StyledLoadingDiv>;
  }

  if (isError) {
    return <StyledErrorDiv>Error ......</StyledErrorDiv>;
  }

  return <SDiv>{appInfo && <SIFrame src={appInfo.path}></SIFrame>}</SDiv>;
};

export default App;
