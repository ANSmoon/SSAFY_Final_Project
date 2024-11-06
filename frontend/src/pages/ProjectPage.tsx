import { Routes, Route } from 'react-router-dom';

import ProjectList from '../components/project/projectList/ProjectList';
import ProjectDetail from '../components/project/projectDetail/ProjectDetail';
import ProjectCreate from '../components/project/projectCreate/ProjectCreate';
import DiaryPage from './DiaryPage';

function ProjectPage() {
  return (
    <div>
      <Routes>
        <Route path="" element={<ProjectList></ProjectList>}></Route>
        <Route path=":pjtId" element={<ProjectDetail></ProjectDetail>}></Route>
        <Route path="create" element={<ProjectCreate></ProjectCreate>}></Route>
        <Route path=":pjtId/diary/*" element={<DiaryPage></DiaryPage>}></Route>
      </Routes>
    </div>
  );
}

export default ProjectPage;