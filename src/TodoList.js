import React, { useState, useEffect } from 'react'
import CreateTask from './modal/createTask'
import './TodoList.css'
import Cards from './Card'

function TodoList() {
    const [show, setShow] = useState(false);
    const [List, setList] = useState([]);
    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false)

    useEffect(() => {
        let arr = localStorage.getItem('List')
        if (arr != null) {
            let obj = JSON.parse(arr)
            setList(obj)
        }
    }, [])

    const updateArray = (item,index) =>{
        console.log("item",item)
        console.log("index",index)
            let temp  = List
            temp[index] = item
            console.log(temp)
            localStorage.setItem('List', JSON.stringify(temp))
            setList(temp)
            // window.location.reload()
    }

    const saveTask = (listobj) => {
        let temp = List
        temp.push(listobj)
        localStorage.setItem('List', JSON.stringify(temp))
        setList(temp)
    }
    const deleteTask = (index) => {
        const tempDel = List
        tempDel.splice(index, 1)
        setList(tempDel)
        localStorage.setItem('List', JSON.stringify(tempDel))
        window.location.reload()
    }


    return (
        <>
            <div className="container-fluid header text-center">
                <h3>Todo list</h3>
                <button className="btn btn-primary mt-2" onClick={handleShow}>Create Task</button>
            </div>
            <div className="container-fluid task-container">
                {List.map((item, index) =>
                    <Cards item={item} index={index} deleteTask={deleteTask} updateArray={updateArray}/>
                )}
            </div>
            <CreateTask show={show} handleClose={handleClose} save={saveTask} />
        </>
    )
}

export default TodoList
