export default function Examples({ examples }: { examples: string[] }) {
    return (
        <div className="mt-8 p-6 bg-gray-700 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Challenge #9
            </h2>
            <p className="text-lg mb-6 text-center">
                Your regular expression should <span className="font-bold">only</span> match the <span className="text-green-400 font-bold">green</span> text in the following examples:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                {examples.map((example, index) => <div key={index} className="card w-full max-w-md mx-auto shadow-xl bg-gray-800">
                    <div className="card-body">
                        <p className="text-gray-300 text-center">
                            {example}
                        </p>
                    </div>
                </div>)}
            </div>
        </div>
    );
}