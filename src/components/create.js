import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateTodo = () => {
  const [title,setTodoform] =useState('');
  const [duration,setDurations]=useState('');
  const [body,setbody]=useState('');
   
  const history = useHistory();

  const handleChange = (e) =>{
    e.preventDefault()
    const todoData = {title,duration,body}
    console.log(todoData)

    fetch("http://localhost:8000/blogs",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(todoData)
    }).then(()=>{
        console.log("new data added")
        history.push("/")
    })
  }
//   const {todoform,durations,body}=useState()
    return (
        <div className="w-full h-full flex  justify-center">
            <div className="w-90 h-full">
                <form className="w-full h-full flex flex-col  items-center " onSubmit={handleChange}>
                    <label className="mt-12 font-semibold text-2xl text-green-300">Add Daily Activity</label>
                    <label className="mt-8 mr-64 lg:mr-96" >Todo Title:</label>
                    <input type="text" required value={title} onChange={(e)=>{
                        setTodoform(e.target.value)
                    }} className="w-full mt-2 h-12 border outline-none lg:w-2/5 border-gray-500 " />
                    <label className="mr-60 mt-4 lg:mr-96">Todo Duration:</label>
                    <input type="text" required className="w-full lg:w-2/5 h-12 mt-2 border outline-none border-gray-500" value={duration} onChange={(e)=>{
                        setDurations(e.target.value)
                    }}/>
                    <label className="mr-64 mt-4 lg:mr-96">Todo Body:</label>
                    <textarea required className="w-full h-20 mt-2 lg:w-2/5 border outline-none border-gray-500 " value={body}
                    onChange={
                        (e)=>{
                            setbody(e.target.value)
                        }
                    }></textarea>
                    
                    <button className="bg-green-300 text-white w-24 mt-6 rounded-md outline-none h-12">Add Activity</button>
                  
                </form>
            </div>

        </div>
    );
}

export default CreateTodo;