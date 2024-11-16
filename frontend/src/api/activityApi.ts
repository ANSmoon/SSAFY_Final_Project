import axios from 'axios';
import { Activity } from './../store/useActivityStore';
import axiosInstance from './axiosInstance';

// 경험 수동 생성
export const createActivity = async (activity: Activity) => {
  try {
    const response = await axiosInstance.post('/activities', {
      title: activity.title,
      content: activity.content,
      startDate: activity.startDate,
      endDate: activity.endDate,
      keywords: activity.keywords,
      projectId: activity.projectId,
    });
    console.log('경험 수동 생성 성공: ', response.data);
    return response.data;
  } catch (error) {
    console.error('경험 수동 생성 실패: ', error);
  }
};

// 경험 수정
export const updateActivity = async (
  activityId: number,
  activity: Activity,
) => {
  try {
    const response = await axiosInstance.patch(`/activities/${activityId}`, {
      title: activity.title,
      content: activity.content,
      startDate: activity.startDate,
      endDate: activity.endDate,
      keywords: activity.keywords,
      projectId: activity.projectId,
    });
    return response.data;
  } catch (error) {
    console.error('경험 수정 실패: ', error);
  }
};

// 경험 목록 조회
export const fetchActivities = async (
  word: string | null,
  keywords: number[],
  projects: number[],
) => {
  try {
    const response = await axiosInstance.post('/activities/search', {
      word: word,
      keywords: keywords,
      projects: projects,
    });

    return response.data.activities;
  } catch (error) {
    console.error('경험 목록 조회 실패: ', error);
  }
};

export const fetchActivityById = async (activityId: number) => {
  try {
    const response = await axiosInstance.get(`/activities/${activityId}`);
    return response.data;
  } catch (error) {
    console.error('경험 상세 조회 실패: ', error);
  }
};

export const deleteActivity = async (activityId: number) => {
  try {
    await axiosInstance.delete(`/activities/${activityId}`);
  } catch (error) {
    console.error('경험 삭제 실패: ', error);
  }
};

// 경험 AI 생성
export const createActivityAi = async () => {
  const data = await axiosInstance.get('/keywords');

  console.log(data.data.keywords);

  const response = await axios.post(
    'https://bbogle.me/ai/generate/experience',
    {
      // 객체 따로 설정해줘야함
      retrospective_content: 'retrospective',
      keywords: data.data.keywords,
    },
  );

  console.log(response.data);
  // return response.data;
};