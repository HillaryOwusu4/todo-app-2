import { Link } from "react-router-dom";

const Navbar = () => {
    return (<div className="w-full flex flex-col items-center justify-center h-10">
        <ul className="flex w-90 h-full">
            <li className="w-1/5 bg h-full flex items-end text-4xl font-semibold"><Link to="/">Tasks</Link></li>
            <div className="flex h-full w-4/5 items-end justify-end">
                <li><a><img src="./images/wave.png" className="w-10 mr-9 h-10 " /></a></li>
                <li><Link to="/create"><img src="./images/plus.png" className="w-8 h-8" /></Link></li>
            </div>

        </ul>

    </div>);
}

export default Navbar;