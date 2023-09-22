import { twMerge } from "tailwind-merge";

export default function Button({ text, className = "" }) {
    return (
        <button
            className={twMerge(
                "hover:animate-btn-animation  text-base font-bold lg:mt-0 w-full p-3 text-white rounded-md lg:min-w-[150px] lg:max-w-[200px] bg-primary-color -z-10 cursor-pointer",
                className
            )}
        >
            {text}
        </button>
    );
}
