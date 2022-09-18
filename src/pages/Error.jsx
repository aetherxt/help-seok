import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const Error = () => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-6xl text-primary flex font-semibold tracking-wide"><ExclamationTriangleIcon className="w-14 h-14 align-text-bottom pr-2 pt-3" />Error</p>
        </div>
    );
};

export default Error;