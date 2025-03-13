import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0" style={{ width: 120 }}>
      {
        links.map((link)=> <><Link to={`/Kambaz/Account/${link}`} className={`list-group-item ${pathname.includes(link) ? "active" : "text-danger"} border border-0`}> {link} </Link><br /></>)
      }
      {/* <Link to={`/Kambaz/Account/Signin`} className="list-group-item active border border-0" > Signin  </Link> <br/>
      <Link to={`/Kambaz/Account/Signup`} className="list-group-item text-danger border border-0" > Signup  </Link> <br/>
      <Link to={`/Kambaz/Account/Profile`} className="list-group-item text-danger border border-0"> Profile </Link> <br/> */}
    </div>
);}

