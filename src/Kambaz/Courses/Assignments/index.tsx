import ListGroup from "react-bootstrap/esm/ListGroup";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentModuleControl from "./AssignmentModuleControl";
import { LuNotebookPen } from "react-icons/lu";

export default function Assignments() {
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
          <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex flex-column">
          <div className="d-flex align-items-center mb-2">
            <BsGripVertical className="me-2 fs-3" />
            <LuNotebookPen />
            <a 
              href="#/Kambaz/Courses/1234/Assignments/123"
              className="wd-assignment-link" 
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <b>&nbsp;&nbsp;A1</b>
            </a>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="ms-3">
              <span style={{ color: "red" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |<br />
              <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Due</b> May 13 at 11:59pm | 100 pts
            </div>
            <div className="ms-auto">
              <LessonControlButtons />
            </div>
          </div>
        </ListGroup.Item>


            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex flex-column">
    <div className="d-flex align-items-center mb-2">
      <BsGripVertical className="me-2 fs-3" />
      <LuNotebookPen />
      <a 
        href="#/Kambaz/Courses/1234/Assignments/123"
        className="wd-assignment-link" 
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <b>&nbsp;&nbsp;A2</b>
      </a>
    </div>

    <div className="d-flex justify-content-between align-items-center">
      <div className="ms-3">
        <span style={{ color: "red" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |<br />
        <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Due</b> May 20 at 11:59pm | 100 pts
      </div>
      <div className="ms-auto">
        <LessonControlButtons />
      </div>
    </div>
  </ListGroup.Item>

  <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex flex-column">
    <div className="d-flex align-items-center mb-2">
      <BsGripVertical className="me-2 fs-3" />
      <LuNotebookPen />
      <a 
        href="#/Kambaz/Courses/1234/Assignments/123"
        className="wd-assignment-link" 
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <b>&nbsp;&nbsp;A3</b>
      </a>
    </div>

    <div className="d-flex justify-content-between align-items-center">
      <div className="ms-3">
        <span style={{ color: "red" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |<br />
        <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Due</b> May 27 at 11:59pm | 100 pts
      </div>
      <div className="ms-auto">
        <LessonControlButtons />
      </div>
    </div>
  </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        </ListGroup>
      </div>
  );}
  
  