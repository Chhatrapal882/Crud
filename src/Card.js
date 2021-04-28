import React,{useState} from 'react'
import { Card } from 'react-bootstrap'
import EditTask from './modal/EditTask'

function Cards({index,deleteTask,item,updateArray}) {
    const [show,setShow] = useState()
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false)
    const color = [
        {
            primarycolor: '#5d93E1',
            secondarycolor: '#ECF3FC'
        },
        {
            primarycolor: '#59D288',
            secondarycolor: '#ECF3FC'
        },
        {
            primarycolor: '#FDC250',
            secondarycolor: '#ECF3FC'
        },
        {
            primarycolor: '#B964F7',
            secondarycolor: '#ECF3FC'
        },
        {
            primarycolor: '#5d93E1',
            secondarycolor: '#ECF3FC'
        },
    ]
    const handleDelete = () =>{
        deleteTask(index)
    }
    const updateTask = (item) => {
        updateArray(item,index)
    }

    return (
        <>
        <div>
            <Card className="mx-2 my-2"
                        style={{
                            width: '18rem',
                            backgroundColor: color[index % 5].primarycolor,
                        }}
                    >
                        <Card.Body>
                            <Card.Title>{item.Title}</Card.Title>
                            <Card.Text>
                                {item.Description}
                            </Card.Text>
                            <button className="mx-2" onClick={handleDelete}>Delete</button>
                            <button onClick={handleShow}>Edit</button>
                        </Card.Body>
                    </Card>
        </div>
        <EditTask show={show} handleShow={handleShow} handleClose={handleClose} updateTask={updateTask} item={item}/>
        </>
    )
}

export default Cards
