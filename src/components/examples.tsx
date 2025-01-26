import { createHighlightedString } from "../util/gradeQuestion";

export default function Examples({ examples, desc, index, regexString }: { examples: string[], desc: string, index: number, regexString: string }) {
    return (
        <div className="mt-8 p-6 bg-gray-700 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Challenge #{index + 1}
            </h2>
            <p className="text-lg mb-6 text-center">
                Your regular expression should <span className="font-bold">only</span> match {desc}, such as:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                {examples.map((example, index) => <div key={index} className="card w-full max-w-md mx-auto shadow-xl bg-gray-800">
                    <div className="card-body">
                        {createHighlightedString(regexString, example)}
                    </div>
                </div>)}
            </div>
        </div>
    );
}