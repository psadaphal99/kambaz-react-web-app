import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
// import * as db from "./Database";
import { useEffect, useState } from "react";
import FormControl from "react-bootstrap/esm/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { setEnroll, setC } from "./Courses/reducer";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import * as enrollmentClient from "./enrollmentClient";

export default function Dashboard()
  {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    
    const [courses, setCourses] = useState<any[]>([]);
    const [enrollments, setEnrollments] = useState<any[]>([]);
    const dispatch = useDispatch()
    // const p = useSelector((state: any) => state.coursesReducer);

    const fetchCourses = async () => {
      try {
        const courses = await courseClient.fetchAllCourses();
        console.log("courses are:", courses)
        setCourses(courses);
        dispatch(setC(courses))
      } catch (error) {
        console.error(error);
      }
    };
    
    const fetchEnrollments = async () => {
      try {
        const enrollments = await userClient.getAllEnrollments();
        console.log("enrollments are:", enrollments)
        setEnrollments(enrollments);
        dispatch(setEnroll(enrollments))
      } catch (error) {
        console.error(error);
      }
    };

    const addNewCourse = async () => {
      console.log("new course added")
      const newCourse = await userClient.createCourse(course);
      fetchEnrollments()
      console.log("courses")
      setCourses([ ...courses, newCourse ]);
      dispatch(setC([ ...courses, newCourse ]))
    }
    
    const deleteCourse = async (courseId: string) => {
      console.log("course is deleted")
      fetchEnrollments()
      setCourses(courses.filter((c) => c._id !== courseId));
      dispatch(setC(courses.filter((c) => c._id !== courseId))); 
    }

    const updateCourse = async () => {
      await courseClient.updateCourse(course);
      setCourses(courses.map((c) => {
          if (c._id === course._id) { return course; }
          else { return c; }
      }));

      dispatch(setC(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));
  
  };
  
    const enrollCourse = async (courseId: string) => {
      const enrollments = await enrollmentClient.enrollCourse(courseId)
      console.log("enrollments are:", enrollments)
      setEnrollments(enrollments);
      dispatch(setEnroll(enrollments))
    }

    const unEnrollCourse = async (courseId: string) => {
      const enrollments = await enrollmentClient.unEnrollCourse(courseId)
      console.log("enrollments are:", enrollments)
      setEnrollments(enrollments);
      dispatch(setEnroll(enrollments))
    }

    useEffect(() => {
      fetchCourses();
      fetchEnrollments();
    }, [currentUser]);
  
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
    console.log("display courses are", displayCourses)
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
            onClick={()=> addNewCourse()}> Add </button>
          <button className="btn btn-warning float-end me-2"
            onClick={()=> updateCourse()} id="wd-update-course-click">
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
                        unEnrollCourse(course._id)}}>Unenroll</Button>
                    ) : (
                      <Button variant="success" onClick={(e) => {
                        e.preventDefault()
                        enrollCourse(course._id)}}>Enroll</Button>
                    ))}
                    {currentUser.role==="FACULTY" && !showCourses &&
                    <><button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
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

