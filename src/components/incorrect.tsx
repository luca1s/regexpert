export default function Incorrect({ shouldnothave, shouldhave }: { shouldhave: string[], shouldnothave: string[] }) {
    console.log(shouldnothave, shouldhave);    
    
    return (
        <div className="p-6 bg-gray-600 rounded-lg shadow-md mt-6">
            <h3 className="text-2xl font-bold mb-4 text-center">
                Incorrect
            </h3>
            <div className="flex flex-col md:flex-row gap-4">
                {shouldnothave.length > 1 && shouldnothave[0] != '' && shouldnothave[0] != ' ' && <div className="card w-full max-w-md mx-auto shadow-xl bg-gray-800">
                    <div className="card-body flex flex-row">
                        <div>
                            <p>Should Not Match:</p>
                            {shouldnothave.map((s, index) => <p key={index} className="text-gray-400">{s}</p>)}
                        </div>
                    </div>
                </div>}
                {shouldhave.length > 0 && shouldhave[0] != '' && shouldhave[0] != ' ' && <div className="card w-full max-w-md mx-auto shadow-xl bg-gray-800">
                    <div className="card-body flex flex-row">
                        <div>
                            <p>Should Match:</p>
                            {shouldhave.map((s, index) => <p key={index + shouldnothave.length} className="text-gray-400">{s}</p>)}
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}