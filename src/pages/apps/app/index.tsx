import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { getAppConfigs } from '@/api/apps';
import { IApp } from '@/types';
import { RootState } from '@/modules';
import { SIFrame, SDiv } from './styled';

const App = () => {
  const [appInfo, setAppInfo] = useState({});

  const apps: IApp[] = useSelector((state: RootState) => state.apps.list);

  const params = useParams();

  useEffect(() => {
    console.log('### id', params.id);

    if (isEmpty(apps)) {
      getAppConfigs()
        .then((data: IApp[]) => data.find((app) => app.id === params.id))
        .then((data: IApp) => setAppInfo(data));
    } else {
      const app = apps.find((app) => app.id === params.id);
      setAppInfo(app);
    }
  }, []);

  return <SDiv>{<SIFrame src={appInfo.path}></SIFrame>}</SDiv>;
};

export default App;
