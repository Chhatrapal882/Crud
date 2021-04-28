import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

const EditTask = ({ show, handleClose, item,updateTask }) => {
  const [Title, setTitle] = useState()
  const [Description, setDescription] = useState()
  useEffect(() => {
    setTitle(item.Title)
    setDescription(item.Description)
  }, [])
  const Editupdate = (e) => {
    e.preventDefault()
    let tempObj = {}
    tempObj['Title'] = Title
    tempObj['Description'] = Description
    console.log(tempObj)
    updateTask(tempObj)
    handleClose()
    window.location.reload()
   }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
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
          <Button variant="btn btn-success" onClick={Editupdate}>
            update
        </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>

        </Modal.Footer>
      </Modal>
    </>

  );
}

export default EditTask