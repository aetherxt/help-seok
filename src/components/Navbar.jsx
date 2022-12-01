import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

const ResponsiveNav = () => {
    return (
        <div className="navbar bg-neutral w-full text-neutral-content rounded-b-lg shadow-md">
            <div className="flex w-full justify-between">
                <div className="flex overflow-hidden p-1 sm:px-5">
                    <Link to="/" className="btn normal-case text-xl">DoYourWork</Link>
                </div>
                <div className="flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className="sm:px-2"><Link to="/"><ExclamationCircleIcon className="w-6 h-6" /><p className="hidden md:block">Todo</p></Link></li>
                        <li className="sm:px-2"><Link to="/pomodoro"><ClockIcon className="w-6 h-6" /><p className="hidden md:block">Pomodoro Timer</p></Link></li>
                    </ul>
                </div>
                <div className="flex pl-1 sm:pl-5">
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow-md bg-neutral-focus rounded-box w-52">
                            <li className="p-1"><a>To be added</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveNav;