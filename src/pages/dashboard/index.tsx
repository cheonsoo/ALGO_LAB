import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import { getApps, getAllConfigs } from '@/modules/apps/action';
import { getPosts } from '@/modules/posts/action';
import { RootState } from '@/modules';
import { IApp, IPost } from '@/types';

import Card from '@/components/organisms/cardSimple';

const Dashboard = () => {
  const apps: IApp[] = useSelector((state: RootState) => state.apps.list);
  // const posts: IPost[] = useSelector((state: RootState) => state.posts.list);

  const dispatch = useDispatch();
  const getAppsData = useCallback(() => dispatch(getApps()), [dispatch]);
  // const getPostsData = useCallback(() => dispatch(getPosts()), [dispatch]);

  useEffect(() => {
    if (isEmpty(apps)) {
      getAppsData();
    }
  }, []);

  return (
    <div className="home_container" style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', flexWrap: 'wrap' }}>
          {apps
            .filter((app: IApp) => app.publish === true)
            .map((app: IApp) => (
              <Card
                key={app.id}
                type={app.type}
                id={app.id}
                title={app.title}
                desc={app.desc}
                thumbnail={app.thumbnail}
                created={app.created}
                updated={app.updated}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
