import { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import Todolists from "../fragment.js/todoprop";
import useFetch from "../fragment.js/useEffect";
import { Context } from "./useContext";
const HomePge = () => {
    const{values,setValue}=useContext(Context)

    // const { data: todolist } = useFetch("http://localhost:8000/blogs")
    // const { id } = useParams()



    return (<div className="h-4/5 w-full flex  flex-col items-center justify-center">

        {values && <Todolists todos={values} />}
    </div>);
}

export default HomePge;