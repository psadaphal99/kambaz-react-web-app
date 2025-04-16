import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
// import { Link } from "react-router-dom";
import * as client from "../../Account/client";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import FormControl from "react-bootstrap/esm/FormControl";
import Form from "react-bootstrap/esm/Form";


export default function PeopleDetails() {
  const { uid} = useParams();
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);
  const roles = ["STUDENT", "FACULTY", "ADMIN", "TA"];
  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName, email, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    navigate(-1);
  };


  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    navigate(-1);
  };

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
    setEmail(user.email)
    setRole(user.role)
    setName(`${user.firstName} ${user.lastName}`);
  };

  const startEditing = () => {
    setName(`${user.firstName} ${user.lastName}`);
    setEmail(user.email || "");
    setRole(user.role || "");
    setEditing(true);
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;

  console.log("user is = ", user)
  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" /> </button>
      <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />
      <div className="text-danger fs-4 wd-name"> 

        {!editing && (
          <FaPencil onClick={startEditing}
              className="float-end fs-5 mt-2 wd-edit" /> )}
        {editing && (
          <FaCheck onClick={() => saveUser()}
              className="float-end fs-5 mt-2 me-2 wd-save" /> )}
        {!editing && (
          <div className="wd-name"
               onClick={startEditing}>
            {user.firstName} {user.lastName}</div>)}
        {user && editing && (
          <FormControl className="w-50 wd-edit-name"
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") { saveUser(); }}}/>)}
              
      </div>

      <div className="mt-3">
        <b>Email:</b> 
        {!editing ? (
          <span className="wd-email"> {user.email} </span>
        ) : (
          <FormControl 
            type="email"
            className="mt-1 wd-edit-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
      </div>

      <div className="mt-3">
        <b>Role:</b> 
        {!editing ? (
          <span className="wd-roles"> {user.role} </span>
        ) : (
          <Form.Select 
            className="mt-1 wd-edit-role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </Form.Select>
        )}
      </div>

      {/* <b>Roles:</b>           <span className="wd-roles">         {user.role}         </span> <br /> */}
      <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
      <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
      <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span>
      <hr />
      <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
      <button onClick={() => navigate(-1)}
              className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button>

       </div> ); }

