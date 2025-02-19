import { Link, useLocation, useParams } from "react-router-dom";

export default function CourseNavigation() {

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { pathname } = useLocation();
  const { cid } = useParams();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      
      {
        links.map((link)=>(
          <>
          <Link to={`/Kambaz/Courses/${cid}/${link}`} id="wd-course-home-link"
            className={ `list-group-item border border-0 ${pathname.includes(link) ? "" : "text-danger"}`}>
              {link}
          </Link><br />
          </>
    
        ))
      }
    </div>
  );
}