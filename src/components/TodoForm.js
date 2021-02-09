import React,{useState,useEffect,useRef} from 'react'

function TodoForm(props) {
const [input,setInput] = useState('');

const inputRef = useRef(null);  // The useRef Hook allows us to create mutable variables in functional components. It's useful for accessing DOM nodes/React elements, and to store mutable variables without triggering a re-render.

useEffect(() => {
    inputRef.current.focus()   //  By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
})

const handleChange = e => {
    setInput(e.target.value);
}


const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id:Math.floor(Math.random() * 10000),
        text:input
    });

    setInput('');
};
    return (
        <form className="container d-flex justify-content-center py-5 border-bottom rounded" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a todo" value={input}
            name="text" className="border-5 border-primary " onChange={handleChange} ref={inputRef}/>

            <button className="btn btn-outline-primary rounded-0">Add todo</button>
        </form>
    )
}

export default TodoForm
