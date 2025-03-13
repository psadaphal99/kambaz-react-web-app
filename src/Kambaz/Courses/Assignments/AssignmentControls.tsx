import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Row from "react-bootstrap/esm/Row";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentControls() {
  const navigate=useNavigate()
  const { pathname } = useLocation()
  const _id= uuidv4()
  const { currentUser } = useSelector((state: any) => state.accountReducer);
 return (
   <div id="wd-assignment-controls" className="text-nowrap">
<Row className="align-items-center mb-3">
    <Col md={6}>
    <InputGroup className="mt-2">
  <InputGroup.Text id="basic-addon1">
  <CiSearch />
  </InputGroup.Text>
  <Form.Control 
    type="text" 
    placeholder="Search" 
    id="wd-search-assignment" 
    aria-label="Search"
    aria-describedby="basic-addon1"
  />
</InputGroup>
    </Col>
    <Col>
    {currentUser.role==="FACULTY" && <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn" onClick={()=> navigate(`${pathname}/${_id}`)}>
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Assignment
     </Button>}
     <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Group
     </Button>
    </Col>
    </Row>
   </div>
);}