import Form from "react-bootstrap/esm/Form";
import FormSelect from "react-bootstrap/esm/FormSelect";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>

      <Form.Control id="wd-username"
             placeholder="username"
             defaultValue="alice"
             className="mb-2"/>

      <Form.Control id="wd-password"
             placeholder="password"
             defaultValue="123"
             className="mb-2"/>

      <Form.Control id="wd-firstname"
             placeholder="First Name"
             defaultValue="Alice"
             className="mb-2"/>   

      <Form.Control id="wd-lastname"
             placeholder="Last Name"
             defaultValue="Wonderland"
             className="mb-2"/>       

      <Form.Control type="date" defaultValue="MM/DD/YYYY" className="mb-2"/>
      
        <Form.Control type="email" defaultValue="alice@wonderland.com" className="mb-2"/>

      {/* <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </select><br/> */}

{/* <FormSelect>
     <option selected>User</option>
     <option value="USER">User</option>
     <option value="ADMIN">Admin</option>
     <option value="FACULTY">Faculty</option>
     <option value="STUDENT">Student</option>
  </FormSelect> */}

      <Form.Control id="wd-role"
             placeholder="User"
             defaultValue="User"
             className="mb-2"/>

      <Link id="wd-signup-btn"
                  to="/Kambaz/Account/Signin"
                  className="btn btn-danger w-100 mb-2">
                  Signout </Link>  

    </div>
);}

