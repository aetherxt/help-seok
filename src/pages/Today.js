import ResponsiveNav from "../components/Navbar";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const Today = () => {
    return (
        <div>
            <ResponsiveNav />
            <div className="stats shadow pt-3">
                <div className="stat">
                <div className="stat-value text-primary flex align-middle tracking-wide"><ExclamationCircleIcon className="w-10 h-10 pr-2" />Due Today</div>
                    <div className="stat-desc">0 Tasks Remaining</div>
                </div>
                <div className="stat">
                    <div className="stat-value">100%</div>
                    <div className="stat-title">Tasks Done</div>
                </div>
            </div>
        </div>
    );
};

export default Today