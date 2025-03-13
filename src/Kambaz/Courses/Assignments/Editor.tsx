import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import FormControl from "react-bootstrap/esm/FormControl";
import FormGroup from "react-bootstrap/esm/FormGroup";
import FormLabel from "react-bootstrap/esm/FormLabel";
import FormSelect from "react-bootstrap/esm/FormSelect";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Row from "react-bootstrap/esm/Row";
import { FaCalendarDays } from "react-icons/fa6";
import { Link, useParams } from "react-router";
// import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addAssignment, updateAssignment, editAssignment}
  from "./reducer";

export default function AssignmentEditor() {
  const param = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(editAssignment(param.aid));
  }, [dispatch, param.aid]);

  let assignment = assignments.find((a: { _id: string | undefined; })=>a._id==param.aid)

  if(!assignment){
    assignment = {
      _id: param.aid,
      title: "New Title",
      course: param.cid,
      points: 50,
      availableUntil: "May 20",
      due: "May 27"
    }
  }
  console.log(assignment)

  const [currAssign, setAssignment] = useState(assignment)
  const availableUntil = currAssign?.availableUntil

  // const availableUntilTime = assignment?.availableUntilTime
  const due = currAssign?.due
  // const dueTime = assignment?.dueTime
  // const navigate = useNavigate()
    return (
      <div id="wd-assignments-editor">

        <FormGroup className="mb-3" controlId="wd-email">
            <FormLabel>Assignment Name</FormLabel>
            <FormControl defaultValue={`${currAssign?.title}`} onChange={(e)=>{setAssignment({...currAssign, title: e.target.value})}}/>
        </FormGroup>

        <FormGroup className="mb-3" controlId="wd-textarea">
        <FormControl as="textarea" rows={10} defaultValue={`The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.
The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing`}>
</FormControl>
        </FormGroup>

        <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-end"> Points </Form.Label>
          <Col sm={10}>
            <Form.Control defaultValue={`${currAssign?.points}`} onChange={(e)=>{setAssignment({...currAssign, points: e.target.value})}}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-end"> Assignment Group </Form.Label>
          <Col sm={10}>
          <FormSelect>
            <option selected>ASSIGNMENTS</option>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </FormSelect>

          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-end"> Assignment Group </Form.Label>
          <Col sm={10}>
          <FormSelect>
            <option selected>Percentage</option>
            <option value="Percentage">Percentage</option>
          </FormSelect>

          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2} className="text-end">Submission Type</Form.Label>
          <Col sm={10}>
          <div className="border rounded p-3">
            <FormSelect className="mb-2">
              <option selected>Online</option>
              <option value="Online">Online</option>
            </FormSelect><br/>
            <div>
              <b>Online Entry Options</b><br/><br/>
              <Form.Check type="checkbox" label="Text Entry" /><br/>
              <Form.Check type="checkbox" label="Website URL" defaultChecked={true}/><br/>
              <Form.Check type="checkbox" label="Media Recordings" /><br/>
              <Form.Check type="checkbox" label="Student Annotation" /><br/>
              <Form.Check type="checkbox" label="File Uploads" /><br/>
            </div>
            </div>
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-end">Assign</Form.Label>
          <Col sm={10}>
            <div className="border rounded p-3">
              <div className="mb-3">
                <Form.Label>Assign to</Form.Label>
                <FormSelect>
                  <option selected>Everyone</option>
                  <option value="Everyone">Everyone</option>
                </FormSelect>
              </div>
              <div className="mb-3">
                <Form.Label>Due</Form.Label>
                <InputGroup>
                  <Form.Control defaultValue={`2024-05-${due?.split(" ")[1]}T00:01`} onChange={(e)=>{setAssignment({...currAssign, due: e.target.value})}}/>
                  <InputGroup.Text>
                    <FaCalendarDays />
                  </InputGroup.Text>
                </InputGroup>
              </div>
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label>Available from</Form.Label>
                    <InputGroup>
                      <Form.Control defaultValue={`2024-05-${availableUntil?.split(" ")[1]}T00:01`} onChange={(e)=>{setAssignment({...currAssign, availableUntil: e.target.value})}}/>
                      <InputGroup.Text>
                      <FaCalendarDays />
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Label>Until</Form.Label>
                    <InputGroup>
                      <Form.Control defaultValue={`2024-05-${due?.split(" ")[1]}T00:01`}/>
                      <InputGroup.Text>
                      <FaCalendarDays />
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Form.Group>
        </Form>
        <hr></hr>
        <div>
          <Link to={`/Kambaz/courses/${param.cid}/Assignments`}>
              <Button 
                  style={{ float: 'right', margin: 5 }} 
                  variant="primary"  
                  className="btn btn-danger"
                  onClick={()=> {
                    if (!currAssign.editing) {
                      dispatch(addAssignment({ ...currAssign }));
                    } else {
                      dispatch(updateAssignment({ ...currAssign, editing: false }));
                    }
                  }}
              >
                  Save
              </Button>
          </Link>
          <Link to={`/Kambaz/courses/${param.cid}/Assignments`}>
              <Button 
                  style={{ float: 'right', margin: 5 }} 
                  variant="secondary"
              >
                  Cancel
              </Button>
          </Link>
        </div>
      </div>
  );}
  
  