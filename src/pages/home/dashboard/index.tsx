import { useAppListQuery } from '@/store/queries/useAppData';
import { IApp } from '@/types';

import Card from '@/components/organisms/cardSimple';
import StyledLoadingDiv from '@/components/common/styled/StyledLoadingDiv';
import StyledErrorDiv from '@/components/common/styled/StyledErrorDiv';

const Dashboard = () => {
  const { data: apps, isLoading, isError } = useAppListQuery();

  if (isLoading) {
    return <StyledLoadingDiv>Fetching App Data...</StyledLoadingDiv>;
  }

  if (isError) {
    return <StyledErrorDiv>Error ......</StyledErrorDiv>;
  }

  return (
    <div className="home_container" style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', flexWrap: 'wrap' }}>
          {apps &&
            apps
              .filter((app) => app.publish === true)
              .map((app) => (
                <Card
                  key={app.id}
                  type={app.type || ''}
                  id={app.id || ''}
                  title={app.title || ''}
                  desc={app.desc || ''}
                  thumbnail={app.thumbnail || ''}
                  created={app.created || ''}
                  updated={app.updated || ''}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
