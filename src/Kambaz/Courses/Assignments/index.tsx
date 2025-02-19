import ListGroup from "react-bootstrap/esm/ListGroup";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentModuleControl from "./AssignmentModuleControl";
import { LuNotebookPen } from "react-icons/lu";
import { useParams } from "react-router";
import * as db from "../../Database";


export default function Assignments() {

  const { cid } = useParams();
  const assignments = db.assignments;

    return (
      <div id="wd-assignments">
        <AssignmentControls></AssignmentControls><br></br><br></br>
        <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />   
          <IoMdArrowDropdown />
            ASSIGNMENTS 
            <AssignmentModuleControl></AssignmentModuleControl>
            </div>
          <ListGroup className="wd-lessons rounded-0">
          {
            assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (


              <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex flex-column">
              <div className="d-flex align-items-center mb-2">
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookPen />
                <a 
                  href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-link" 
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <b>&nbsp;&nbsp;{assignment.title}</b>
                </a>
              </div>
    
              <div className="d-flex justify-content-between align-items-center">
                <div className="ms-3">
                  <span style={{ color: "red" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Multiple Modules</span> | <b>Not available until</b> {assignment.availableUntil} at {assignment.availableUntiltime} |<br />
                  <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Due</b> {assignment.due} at {assignment.dueTime} | 100 pts
                </div>
                <div className="ms-auto">
                  <LessonControlButtons />
                </div>
              </div>
            </ListGroup.Item>


            ))
          }
        </ListGroup>
        </ListGroup.Item>
        </ListGroup>
      </div>
  );}
  
  