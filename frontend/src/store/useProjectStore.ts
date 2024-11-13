import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getProject, getProjectList } from '../api/projectApi';

interface ProjectCard {
  projectId: number;
  image: string | null;
  title: string;
  description: string;
  status: boolean;
  startDate: string;
  endDate: string;
  notificationStatus: boolean;
}

interface Project {
  projectId: number;
  title: string;
  image: string | null;
  description: string;
  startDate: string;
  endDate: string;
  memberCount: number;
  role: string[];
  skill: string[];
  status: boolean;
  notificationStatus: boolean;
  notificationTime: string;
}

interface ProjectState {
  // 프로젝트 리스트
  projectList: ProjectCard[];
  getProjectList: () => void;

  // 프로젝트 하나
  project: Project;
  setProject: (pjt: Project) => void;
  initProject: () => void;
  getProject: (pjtId: number) => void;
  updateProjectField: (
    field: string,
    value: string | string[] | number | boolean,
  ) => void;

  // 프로젝트 생성/수정
  projectImage: File | null;
  setProjectImage: (value: File) => void;
  titleError: boolean;
  setTitleError: (value: boolean) => void;
  termError: boolean;
  setTermError: (value: boolean) => void;
  errMsgOn: boolean;
  setErrMsgOn: (value: boolean) => void;
}

const useProjectStore = create<ProjectState>()(
  persist(
    (set) => ({
      // 프로젝트 리스트
      projectList: [],
      getProjectList: async () => {
        const data = await getProjectList();
        set(() => ({ projectList: data }));
      },

      // 프로젝트 하나
      project: {
        projectId: -1,
        image: null,
        title: '',
        description: '',
        status: false,
        startDate: '',
        endDate: '',
        memberCount: 1,
        role: [],
        skill: [],
        notificationStatus: false,
        notificationTime: '17:30',
      },
      setProject: (pjt) => set(() => ({ project: pjt })),
      initProject: () =>
        set(() => ({
          projectImage: null,
          project: {
            projectId: -1,
            image: null,
            title: '',
            description: '',
            status: false,
            startDate: '',
            endDate: '',
            memberCount: 1,
            role: [],
            skill: [],
            notificationStatus: false,
            notificationTime: '17:30',
          },
        })),
      getProject: async (pjtId) => {
        const data = await getProject(pjtId);
        set(() => ({
          project: data,
        }));
      },
      updateProjectField: (field, value) =>
        set((state) => ({ project: { ...state.project, [field]: value } })),

      // 프로젝트 생성/수정
      projectImage: null,
      setProjectImage: (value) => set(() => ({ projectImage: value })),
      titleError: false,
      setTitleError: (value) => set(() => ({ titleError: value })),
      termError: false,
      setTermError: (value) => set(() => ({ termError: value })),
      errMsgOn: false,
      setErrMsgOn: (value) => set(() => ({ errMsgOn: value })),
    }),
    {
      name: 'projectStorage',
      partialize: (state) => ({
        project: state.project,
      }),
    },
  ),
);

export default useProjectStore;
