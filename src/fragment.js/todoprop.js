import { Link } from "react-router-dom";

const Todolists = ({ todos, HandleChange }) => {
    return (

        <div className="w-90 h-full" key={todos.id}>
            <p className="text-xl text-gray-500  mr-28 mt-4 lg:ml-32">Click to view main content</p>
            {todos.map((todo) => (
                <div className="w-full h-10 flex mt-10">
                    <div className="w-15 h-full flex justify-center items-center">
                        <p className="w-7 h-7 rounded-full bg-green-200"></p>
                    </div>

                    <div className="w-90 h-full flex flex-col justify-center">
                        <Link to={`/blogs/${todo.id}`}>
                            <h1 className="text-2xl font-normal ml-3 ">{todo[0]}</h1>
                            <p className="text-lg ml-3 text-gray-400 ">{todo[2]}</p>
                        </Link>
                    </div>
                    <Link to={`/blogs/${todo.id}`}> <img src="./images/skip-track.png " alt="close" className="w-4 h-4" onClick={HandleChange} /></Link>
                </div>
            ))}

        </div>

    );
}

export default Todolists;