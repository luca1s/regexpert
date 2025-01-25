export default function Results() {
    return (
        <div className="p-6 bg-gray-600 rounded-lg shadow-md mt-6">
            <h3 className="text-2xl font-bold mb-4 text-center">
                Incorrect
            </h3>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="card w-full max-w-md mx-auto shadow-xl bg-gray-800">
                    <div className="card-body flex flex-row">
                        <div>
                            <p>Expected:</p>
                            <p className="text-gray-400">This is an <span className="text-green-400 font-bold">example</span> string.</p>
                        </div>
                        <div className="divider divider-horizontal" />
                        <div>
                            <p>Actual:</p>
                            <p className="text-gray-400">This is an <span className="text-green-400 font-bold">an</span> example string.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}