import react from 'react';
import { useState } from 'react';
import ResponsiveNav from "../components/Navbar";
import TodoList from "../components/TodoList";
import { UserIcon } from "@heroicons/react/24/solid";

const Home = () => {
    return (
        <div>
            <ResponsiveNav />
            <div className="stats shadow pt-3">
                <div className="stat">
                    <div className="stat-value text-primary flex align-middle tracking-wide"><UserIcon className="w-10 h-10 pr-2" />Welcome Back</div>
                    <div className="stat-desc">Get Something Done</div>
                </div>
            </div>
            <div className="hero rounded-lg shadow px-5">
                <div className="hero-content text-center w-1/2">
                    <div className="w-full">
                        <TodoList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home