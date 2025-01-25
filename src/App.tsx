import Correct from "./components/correct"
import Examples from "./components/examples"
import Incorrect from "./components/incorrect"
import Textarea from "./components/textarea"

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">RegExpert</button>
      </div>
      <progress className="progress progress-accent w-full" value="45" max="100"></progress>
      <div className="flex-grow flex flex-col items-center justify-start bg-gray-900">
        <Examples />
        <Textarea />
        {/* <Incorrect /> */}
        <Correct />
      </div>
    </div>
  )
}

export default App
