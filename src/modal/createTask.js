import React, { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';

const CreateTask = ({ show, handleClose,save}) => {
  const [Title, setTitle] = useState()
  const [Description, setDescription] = useState()
  const saveData = () =>{
    console.log("hellp")
      let listobj = {}
      listobj['Title'] = Title 
      listobj['Description'] = Description
      save(listobj)
      handleClose()
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Title</label>
              <input value={Title} 
              onChange={(e) => {
                setTitle(e.target.value)
              }} 
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea value={Description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>  
          <Button variant="primary" onClick={saveData}>
            create
        </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>

        </Modal.Footer>
      </Modal>
    </>

  );
}

export default CreateTask