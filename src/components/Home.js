import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Todolists from "../fragment.js/todoprop";
import useFetch from "../fragment.js/useEffect";

const HomePge = () => {
const {data: todolist} =useFetch("http://localhost:8000/blogs")
const {id} = useParams()



    return ( <div className="h-4/5 w-full flex  flex-col items-center justify-center">
       
           {todolist && <Todolists todos={todolist} />}
    </div> );
}
 
export default HomePge;