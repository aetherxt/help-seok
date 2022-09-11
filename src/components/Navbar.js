import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const SimpleNav = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content rounded-b-lg shadow-md">
            <div className="flex-1 pl-5">
                <a href="/" className="btn btn-ghost normal-case text-xl">Help Seok</a>
            </div>
            <div className="flex-none pr-5">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
            </div>
        </div>
    );
};

const ResponsiveNav = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                <div className="navbar bg-neutral w-full text-neutral-content rounded-b-lg shadow-md">
                    <div className="flex-none md:hidden">
                        <label for="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div> 
                    <div className="flex w-full justify-between">
                        <div className="flex pl-5">
                            <a className="btn btn-ghost normal-case text-xl">Help Seok</a>
                        </div>
                        <div className="flex hidden md:block pr-5">
                            <ul className="menu menu-horizontal p-0">
                            <li className="px-2"><a><ExclamationCircleIcon className="w-6 h-6"/>Due Today</a></li>
                            <li className="px-2"><a><StarIcon className="w-6 h-6"/>Important</a></li>
                            <li className="px-2"><a><ClockIcon className="w-6 h-6"/>Pomodoro Timer</a></li>
                            </ul>
                        </div>
                        <div className="flex">
                            <div className="dropdown dropdown-end">
                                <label tabindex="0" className="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                                </label>
                                <ul tabindex="0" className="dropdown-content menu p-2 shadow-md bg-neutral-focus rounded-box w-52">
                                    <li className="p-1"><a>Homework</a></li>
                                    <li className="p-1"><a>Extracurricular</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="drawer-side rounded-r-lg shadow-md">
                <label for="my-drawer-3" className="drawer-overlay"></label> 
                <ul className="menu p-4 place-content-center overflow-y-auto w-56 bg-base-100">
                <li className="py-2"><a><ExclamationCircleIcon className="w-6 h-6"/>Due Today</a></li>
                <li className="py-2"><a><StarIcon className="w-6 h-6"/>Important</a></li>
                <li className="py-2"><a><ClockIcon className="w-6 h-6"/>Pomodoro</a></li>
                </ul>
            </div>
        </div>
    );
};

export default ResponsiveNav;