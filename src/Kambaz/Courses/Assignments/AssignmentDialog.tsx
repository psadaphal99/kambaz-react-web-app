import { Modal, Button } from "react-bootstrap";

export default function ModulAssignmentDialog({ show, handleClose, dialogTitle, assignmentId, deleteAssignment,}: {
 show: boolean; handleClose: () => void; dialogTitle: string; assignmentId: string; deleteAssignment: (name: string) => void;
}) {

 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{dialogTitle}</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    <p>Are sure you want to remove the assignment</p>
   </Modal.Body>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="danger"
     onClick={() => {
      deleteAssignment(assignmentId);
      handleClose();
     }} > Delete </Button>
   </Modal.Footer>
  </Modal>
);}