import { useState,useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "./useContext";
const CreateTodo = () => {
    const [title, setTodoform] = useState('');
    const [duration, setDurations] = useState('');
    const [body, setbody] = useState('');
    const{values,setValues}=useContext(Context)
    const history = useHistory();

    const handleChange = (e) => {
        e.preventDefault()
        
    }
    const pushdata = () => {
        const inputvalue = [title, body, duration]
       values.forEach((activity)=>{
          console.log(activity)
       })

       
        setValues((Mu)=>[...Mu,inputvalue])
        history.push("/")
    }
    //   const {todoform,durations,body}=useState()
    return (
        <div className="w-full h-full flex  justify-center">
            <div className="w-90 h-full">
                <form className="w-full h-full flex flex-col  items-center " onSubmit={handleChange}>
                    <label className="mt-12 font-semibold text-2xl text-green-300">Add Daily Activity</label>
                    <label className="mt-8 mr-64 lg:mr-96" >Todo Title:</label>
                    <input type="text" required value={title} onChange={(e) => {
                        setTodoform(e.target.value)
                    }} className="w-full mt-2 h-12 border outline-none lg:w-2/5 border-gray-500 " />
                    <label className="mr-60 mt-4 lg:mr-96">Todo Duration:</label>
                    <input type="text" required className="w-full lg:w-2/5 h-12 mt-2 border outline-none border-gray-500" value={duration} onChange={(e) => {
                        setDurations(e.target.value)
                    }} />
                    <label className="mr-64 mt-4 lg:mr-96">Todo Body:</label>
                    <textarea required className="w-full h-20 mt-2 lg:w-2/5 border outline-none border-gray-500 " value={body}
                        onChange={
                            (e) => {
                                setbody(e.target.value)
                            }
                        }></textarea>

                    <button className="bg-green-300 text-white w-24 mt-6 rounded-md outline-none h-12" onClick={pushdata}>Add Activity</button>

                </form>
            </div>

        </div>
    );
}

export default CreateTodo;