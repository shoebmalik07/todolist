import React from 'react'

const Form = ({ setText, text, todos, setTodos, setSelect }) => {


    const inputHandler = (e) => {
        setText(e.target.value)
    }
    const clickHandler = (e) => {
        e.preventDefault()
        setTodos(
            [
                ...todos,
                { text: text, completed: false, id: Math.random() * 1000 }
            ]

        )
        setText('')
    }
    const statusHandler = (e)=>{
        setSelect(e.target.value)
    }

    return (
        <>
            <div className='main-div'>
                <form>
                    <input
                        value={text}
                        onChange={inputHandler}
                    />
                    <button onClick={clickHandler}>Add</button>
                    <select onChange={statusHandler}>
                        <option value='all'>All</option>
                        <option value='completed'>Completed</option>
                        <option value='uncompleted'>Uncompleted</option>
                    </select>

                </form>
            </div>
        </>
    )
}

export default Form