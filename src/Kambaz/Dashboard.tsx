import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br /><br />
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/pdp.jpg" width={200} />
            <div>
              <h5> CS5010 Program Design Paradigm </h5>
              <p className="wd-dashboard-course-title">
                Design Patterns for Software Development </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br /><br />

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/Algo.jpg" width={200} />
            <div>
              <h5> CS5800 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Algorithms for Computation  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br /><br />

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/database.jpg" width={200} />
            <div>
              <h5> CS5200 Database Management </h5>
              <p className="wd-dashboard-course-title">
              Database Management Systems</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br /><br />

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/ai.jpg" width={200} />
            <div>
              <h5> CS5100 Foundations of AI </h5>
              <p className="wd-dashboard-course-title">
                Begining to AI  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br /><br />

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cloud.jpg" width={200} />
            <div>
              <h5> CS6000 Cloud Computing </h5>
              <p className="wd-dashboard-course-title">
                Cloud Architecture  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br /><br />

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/ml.jpg" width={200} />
            <div>
              <h5> CS6010 Machine Learning </h5>
              <p className="wd-dashboard-course-title">
                Intro TO ML  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

      </div>
    </div>
);}
