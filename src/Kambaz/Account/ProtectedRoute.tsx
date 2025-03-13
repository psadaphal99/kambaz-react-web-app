import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.coursesReducer);
    const param = useParams();
  
    if (!currentUser) {
      return <Navigate to="/Kambaz/Account/Signin" />;
    }
    
    if (param.cid) {
      const userEnrollments = enrollments.filter((e: any) => e.user === currentUser._id).map((e: any) => e.course);
      if (userEnrollments.includes(param.cid)) {
        console.log("includes the cid",children)
        return children;
      }
      console.log("does not include the cid")
      return <Navigate to="/Kambaz/Dashboard" />;
    }
    
    return children;
}
