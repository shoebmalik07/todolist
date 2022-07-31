
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const[text,setText] = useState('')
  const [todos,setTodos] = useState([])
  const [select,setSelect] = useState('all')
  const [filteredTodos,setFilteredTodos] = useState([])


  useEffect(()=>{
    getLocal()
  },[])
  useEffect(()=>{
    filterHandler()
    saveToLocal()
    // getLocal()
  },[todos,select])

  const filterHandler= ()=>{
    switch(select){
      case 'completed':
       setFilteredTodos(todos.filter(todo=>todo.completed===true))
        break
      case 'uncompleted':
      setFilteredTodos(todos.filter(todo=>todo.completed===false))
      break
      default:
        setFilteredTodos(todos)

    }
      
  }
  const saveToLocal = ()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocal = ()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let localStore = JSON.parse(localStorage.getItem('todos'))
      setTodos(localStore)
    }
  }

  return (
   <>
   <h1 style={{textAlign:'center', fontSize:'3rem', fontFamily:'monospace'}}>Todolist App</h1>
    <Form 
      setText = {setText}
      text  = {text}
      todos = {todos}
      setTodos = {setTodos}
      setSelect = {setSelect}
    
    />
    <TodoList
      todos = {todos}
      setTodos = {setTodos}
      filteredTodos = {filteredTodos}
    />
   </>
  );
}

export default App;
