import Correct from "./components/correct"
import Examples from "./components/examples"
import Incorrect from "./components/incorrect"
import Textarea from "./components/textarea"
import { useState, useEffect } from "react"
import { run } from './util/check-regex'
import { regexList } from "./util/regex-list"

function App() {
  const [index, setIndex] = useState<number>(0);
  const [regexString, setRegexString] = useState<string>("");

  let question = run(regexString, index);
  const isCorrect = question.shouldhave.length + question.shouldnothave.length == 0;
  const desc = regexList[index].desc;

  useEffect(() => {
    setRegexString("");
  }, [index])

  return (
    <div className="h-screen flex flex-col">
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">RegExpert</button>
      </div>
      <progress className="progress progress-accent w-full" value={(index + 1) / 12} max="1"></progress>
      <div className="flex-grow flex flex-col items-center justify-start bg-gray-900">
        <Examples
          examples={question.examples}
          desc={desc}
          index={index}
        />
        <Textarea
          value={regexString}
          setValue={setRegexString}
          isCorrect={isCorrect}
        />
        {!isCorrect && regexString.length > 0 &&  <Incorrect
          shouldhave={question.shouldhave}
          shouldnothave={question.shouldnothave}
        />}
        {isCorrect && <Correct
          index={index}
          setIndex={setIndex}
        />}
      </div>
    </div>
  )
}

export default App
