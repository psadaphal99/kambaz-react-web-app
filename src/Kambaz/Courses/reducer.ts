import { createSlice } from "@reduxjs/toolkit";
import { courses, enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  courses: courses,
  enrollments: enrollments,
};
const CoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setEnroll: (state, action) => {
      state.enrollments = action.payload;
    },
    setC: (state, action) => {
      state.courses = action.payload;
    },
    addCourse: (state, { payload: module }) => {
      const newModule: any = {
        _id: uuidv4(),
        name: module.name, 
        number: module.name,
        startDate: module.startDate, 
        endDate: module.endDate, 
        description: module.description,
        image:module.image
      };
      state.courses = [...state.courses, newModule] as any;
    },
    deleteCourse: (state, { payload: moduleId }) => {
      state.courses = state.courses.filter(
        (m: any) => m._id !== moduleId);
    },
    updateCourse: (state, { payload: module }) => {
      state.courses = state.courses.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
    editCourse: (state, { payload: moduleId }) => {
      state.courses = state.courses.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },
    enrollCourse: (state, {payload: module}) => {
        const newModule: any = {
            _id: uuidv4(),
            user: module.user_id,
            course: module.course_id,
          };
        state.enrollments = [...state.enrollments, newModule]
    },
    unenrollCourse : (state, { payload: module }) => {
        state.enrollments = state.enrollments.filter((m: any) => (m.user===module.user_id)).filter(
          (m: any) => (m.course !== module.course_id));
      },
  },
});
export const { addCourse, deleteCourse, updateCourse, editCourse, enrollCourse, unenrollCourse, setEnroll, setC } =
CoursesSlice.actions;
export default CoursesSlice.reducer;

