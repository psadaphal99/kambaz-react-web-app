import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
// import * as db from "./Database";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FormControl from "react-bootstrap/esm/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, deleteCourse, updateCourse, enrollCourse, unenrollCourse } from "./Courses/reducer";

export default function Dashboard()
  {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const { courses, enrollments } = useSelector((state: any) => state.coursesReducer);
    const dispatch = useDispatch()

    const [course, setCourse] = useState<any>({
      _id: "1234", name: "New Course", number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
      image:"/images/rocket.jpg"
    });

    const [showCourses, setShowCourses] = useState(false);
    const toggleEnrollments = () => setShowCourses(!showCourses);
    const displayCourses = showCourses ? courses : courses.filter((course: any) =>
                                              enrollments.some(
                                                (enrollment: any) =>
                                                  enrollment.user === currentUser._id &&
                                                  enrollment.course === course._id
                                          ))
    const userEnrollments = enrollments.filter((e: any) => e.user === currentUser._id).map((e: any) => e.course);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
      <Button className="btn btn-primary float-end" id="wd-enrollments-click" onClick={toggleEnrollments}>
        Enrollments
      </Button>  
      </h1> 
      <hr />
      {currentUser.role==="FACULTY" && 
      <><h5>New Course
          <button className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={()=> dispatch(addCourse({ ...course, _id: uuidv4() }))}> Add </button>
          <button className="btn btn-warning float-end me-2"
            onClick={()=> dispatch(updateCourse({ ...course}))} id="wd-update-course-click">
            Update
          </button>
        </h5><br />

        <FormControl value={course.name} className="mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} />

        <FormControl value={course.description} as="textarea" rows={3}
          onChange={(e) => setCourse({ ...course, description: e.target.value })} /><hr /></>
      }
      <h2 id="wd-dashboard-published">Published Courses {displayCourses.length}</h2> <hr />
      <div id="wd-dashboard-courses">
      <Row xs={1} md={5} className="g-4">
        {
          displayCourses
          .map((course: any)=>(
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img variant="top" src={`${course.image}`} width="100%" height={160} />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
                    <Card.Text  className="wd-dashboard-course-description overflow-hidden"  style={{ height: "100px" }}>{course.description}</Card.Text>
                    <Button variant="primary">Go</Button>
                    {showCourses && (userEnrollments.includes(course._id) ? (
                      <Button variant="danger" onClick={(e) => {
                        e.preventDefault()
                        dispatch(unenrollCourse({course_id:course._id, user_id: currentUser._id}))}}>Unenroll</Button>
                    ) : (
                      <Button variant="success" onClick={(e) => {
                        e.preventDefault()
                        dispatch(enrollCourse({course_id:course._id, user_id: currentUser._id}))}}>Enroll</Button>
                    ))}
                    {currentUser.role==="FACULTY" && !showCourses &&
                    <><button onClick={(event) => {
                        event.preventDefault();
                        dispatch(deleteCourse(course._id));
                      } } className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                        Delete
                      </button><button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        } }
                        className="btn btn-warning me-2 float-end">
                          Edit
                        </button></>
                    }
  
                  </Card.Body>
                </Link>
              </Card>
            </Col>

          ))
        }
      </Row>

      </div>
    </div>
);}

