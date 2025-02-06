import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentModuleControl() {
  return (
    <div className="float-end">
        <span style={{border: '1px solid',borderRadius: '30px', padding: '10px'}}>40% of Total</span>
      <BsPlus className="fs-4"></BsPlus>
      <IoEllipsisVertical className="fs-4" />
    </div> );}