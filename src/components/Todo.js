import React from 'react'

const Todo = ({text,todo,setTodos,todos}) => {

    const deleteHandler = ()=>{
        setTodos(
            todos.filter((el)=>el.id!==todo.id)
        )
        // console.log(todo)
    }
    const completeHandler =()=>{
        setTodos(
            todos.map((item)=>{
                if(item.id===todo.id){
                    return{
                        ...item, 
                        completed:!item.completed
                    }
                }
                return item
            })
        )
    }
  return (
    <>
        <div className='todolist-div'>
              <li className={`${todo.completed? "completed":""}`}>{text} </li>
              <button className='complete-button' onClick={completeHandler}>complete</button>
              <button className='complete-button' onClick={deleteHandler}>delete</button>
            </div>
    </>
    )
}

export default Todo