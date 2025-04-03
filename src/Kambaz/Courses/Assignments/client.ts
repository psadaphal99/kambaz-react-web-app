import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;

export const findAssignmentForCourse = async (courseId: string) => {
    const response = await axios
      .get(`${ASSIGNMENT_API}/${courseId}/assignment`);
    return response.data;
  };

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios
      .delete(`${ASSIGNMENT_API}/${assignmentId}`);
    return response.data;
  }

export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    const response = await axios.post(
        `${ASSIGNMENT_API}/${courseId}/assignment`,
        assignment
    );
    return response.data;
  };


export const updateAssignment = async (assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return data;
  };
  