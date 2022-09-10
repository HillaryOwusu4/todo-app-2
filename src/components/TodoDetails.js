import { useHistory, useParams } from "react-router-dom";
import { useContext } from "react";
import useFetch from "../fragment.js/useEffect";
import { Context } from "./useContext";

const TodoDetails = () => {
    const history = useHistory()
    const { id } = useParams()
    // const { data: todolist } = useFetch("http://localhost:8000/blogs/" + id)
    const{values: todolist,setValues}=useContext(Context)
    const DeleteTodo = () => {
        
    }
    const back = () => {
        history.push('/')
    }

    return (<div className="w-full  h-full flex justify-center">
        <div className="w-90 h-full flex flex-col items-center">
            {todolist && <h1 className="mt-20 text-2xl font-semibold text-green-500">{todolist.forEach(element => {
                console.log(element[0])
            })}</h1>}
            {todolist && <h1>Duration: {todolist[1]}</h1>}
            {todolist && <h1>Todo-Content: {todolist[2]}</h1>}
            <div className="w-full h-1/5 flex justify-center"><button onClick={DeleteTodo} className="border mr-5 rounded-md h-12 mt-6 w-20 bg-green-400">Delete</button>
                <button onClick={back} className="border rounded-md h-12 mt-6 w-20 bg-red-400">Back</button></div>
        </div>
        <h1>{ }</h1>
    </div>);
}

export default TodoDetails;