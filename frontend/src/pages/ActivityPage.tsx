import { Route, Routes } from 'react-router-dom';
import ActivityList from '../components/activity/ActivityList';
import ActivityDetail from '../components/activity/activityDetail/ActivityDetail';
import ActivityCreate from '../components/activity/activityCreateUpdate/ActivityCreate';

import ActivityStyles from '../components/activity/Activity.module.css';
import ActivityUpdate from '../components/activity/activityCreateUpdate/ActivityUpdate';

function ActivityPage() {
  return (
    <div className={ActivityStyles.container}>
      <Routes>
        <Route path="" element={<ActivityList />} />
        <Route path="create" element={<ActivityCreate />} />
        <Route path=":activityId" element={<ActivityDetail />} />
        <Route path="update/:activityId" element={<ActivityUpdate />} />
      </Routes>
    </div>
  );
}

export default ActivityPage;