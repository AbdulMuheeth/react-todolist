import React,{useState,useEffect,useRef} from 'react'

function TodoForm(props) {
const [input,setInput] = useState('');

const inputRef = useRef(null);

useEffect(() => {
    inputRef.current.focus()
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
