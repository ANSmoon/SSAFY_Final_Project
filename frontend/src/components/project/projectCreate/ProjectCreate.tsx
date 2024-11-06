import { useNavigate } from 'react-router-dom';
import style from './ProjectCreate.module.css';

import ProjectInfoSection from '../projectInfoSection/ProjectInfoSection';
import ProjectDetailInfoSection from '../projectDetailInfoSection/ProjectDetailInfoSection';
import ProjectTagSection from '../projectTagSection/ProjectTagSection';
import ProjectAlarmSection from '../projectAlarmSection/ProjectAlarmSection';
import useProjectStore from '../../../store/useProjectStore';
import { useEffect, useState } from 'react';

function ProjectCreate() {
  const navigate = useNavigate();

  const project = useProjectStore((state) => state.project);
  const initProject = useProjectStore((state) => state.initProject);

  const [titleError, setTitleError] = useState(false);
  const [termError, setTermError] = useState(false);

  const navPjtList = () => {
    navigate('/project');
  };

  const handleTitleError = (value: boolean) => {
    setTitleError(value);
  };

  const handleTermError = (value: boolean) => {
    setTermError(value);
  };

  const addProject = () => {
    if (project.title === '') {
      setTitleError(true);
      return;
    }

    if (project.startDate === '' || project.finishDate === '') {
      setTermError(true);
      return;
    }

    console.log(project);
    navigate('/project');
  };

  useEffect(() => {
    initProject();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.backBtn} onClick={navPjtList}>
        돌아가기
      </div>

      <span className={style.pageTitle}>프로젝트 생성</span>
      <div className={style.pjtFormWrapper}>
        <div className={style.pjtForm}>
          <ProjectInfoSection
            titleError={titleError}
            handleTitleError={handleTitleError}
          />
          <ProjectDetailInfoSection
            termError={termError}
            handleTermError={handleTermError}
          />
          <ProjectTagSection />
          <ProjectAlarmSection />
        </div>
        <button className={style.submitBtn} onClick={addProject}>
          완료
        </button>
      </div>
    </div>
  );
}

export default ProjectCreate;
