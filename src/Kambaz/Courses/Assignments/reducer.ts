import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  assignments: assignments,
};

const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  };

const formatTime = (isoString: string) => {
const date = new Date(isoString);
return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
};  
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
        console.log("assignment is = ", assignment)
      const newAssignment: any = {
        _id: uuidv4(),
        title: assignment.title,
        course: assignment.course,
        availableUntil: formatDate(assignment.availableUntil)!=="Invalid Date"? formatDate(assignment.availableUntil):"May 20",
        availableUntilTime: formatTime(assignment.availableUntil)!=="Invalid Date"? formatTime(assignment.availableUntil): "11:59 PM", 
        due: formatDate(assignment.due)!=="Invalid Date"? formatDate(assignment.due) : "May 27", 
        dueTime: formatTime(assignment.due) !=="Invalid Date"? formatTime(assignment.due) : "11:59 PM", 
        points: assignment.points

      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? {...assignment, availableUntil: formatDate(assignment.availableUntil)!=="Invalid Date"? formatDate(assignment.availableUntil):"May 20",
            availableUntilTime: formatTime(assignment.availableUntil)!=="Invalid Date"? formatTime(assignment.availableUntil): "11:59 PM", 
            due: formatDate(assignment.due)!=="Invalid Date"? formatDate(assignment.due) : "May 27", 
            dueTime: formatTime(assignment.due)!=="Invalid Date" ? formatTime(assignment.due) : "11:59 PM"} : m
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignmentId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;

