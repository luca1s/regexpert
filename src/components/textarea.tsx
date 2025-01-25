import { Dispatch, SetStateAction } from "react";

export default function Textarea({ isCorrect, value, setValue }: { isCorrect?: boolean, value: string, setValue: Dispatch<SetStateAction<string>>}) {
    let outlineClass;
    if (isCorrect == true) {
        outlineClass = "border-3 border-green-500";
    } else if (isCorrect == false && value.length > 0) {
        outlineClass = "border-3 border-red-500";
    }

    const cardClass = `card w-full max-w-xl mx-auto shadow-xl bg-gray-800 ${outlineClass}`;

    return (
        <div className={cardClass}>
            <div className="card-body">
                <div className="flex flex-row justify-center items-center space-x-2">
                    <span className="text-gray-500 text-lg font-mono">/^</span>
                    <div className="flex-grow bg-gray-900 px-4 py-2 rounded-md flex items-center">
                        <input
                            type="text"
                            className="bg-transparent border-0 outline-none text-center tracking-widest text-green-300 placeholder-gray-600 w-full"
                            placeholder="regex"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <span className="text-gray-500 text-lg font-mono">$/g</span>
                </div>
                <p className="mt-4 text-sm text-gray-400 text-center">
                    Enter a valid regular expression pattern above.
                </p>
            </div>
        </div>
    );
}