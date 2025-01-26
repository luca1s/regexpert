import { useLocalStorage } from "usehooks-ts"
import Question from "./components/question";
import Finished from "./components/finished";

function App() {
  const [index, setIndex] = useLocalStorage<number>("index", 0);

  return (
    <div className="h-screen flex flex-col">
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">RegExpert</button>
      </div>
      <progress className="progress progress-accent w-full" value={index / 10} max="1"></progress>
      {index < 10 && <Question index={index} setIndex={setIndex} />}
      {index == 10 && <Finished />}
    </div>
  )
}

export default App
