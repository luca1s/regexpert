export default function Finished() {
    return (
        <div className="flex-grow flex flex-col items-center justify-center bg-gray-900">
            <div className="card shadow-xl bg-gray-800 w-full max-w-xl mx-auto">
                <div className="card-body">
                    <h1 className="text-4xl text-center text-green-400 font-bold">Congratulations!</h1>
                    <p className="text-center text-gray-400 mt-4">
                        You've completed all the questions in RegExpert. Great job!
                    </p>
                    <button className="btn btn-primary mt-8" onClick={() => {
                        localStorage.clear();
                        window.location.reload()
                    }}>Restart</button>
                </div>
            </div>
        </div>
    );
}