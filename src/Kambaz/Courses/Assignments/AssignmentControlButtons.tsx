import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa6";
import AssignmentDialog from "./AssignmentDialog";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
import * as assignmentClient from "./client";

export default function AssignmentControlButtons({ assignmentId}: { assignmentId: string;}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const removeAssignment = async (assignmentId: string) => {
      await assignmentClient.deleteAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
    };
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    
  return (
    <div className="float-end">
      {currentUser.role==="FACULTY" && <FaTrash className="text-danger me-2 mb-1" onClick={()=> handleShow()}/>}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <AssignmentDialog show={show} handleClose={handleClose} dialogTitle="Delete Assignment" assignmentId={assignmentId} deleteAssignment={(assignmentId)=>removeAssignment(assignmentId)} />
    </div> );}