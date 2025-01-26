import Correct from "./components/correct"
import Examples from "./components/examples"
import Incorrect from "./components/incorrect"
import Textarea from "./components/textarea"
import { useState, useEffect, useMemo } from "react"
import { data } from "./util/data"
import { gradeQuestion } from "./util/gradeQuestion"

function App() {
  const [index, setIndex] = useState<number>(0);
  const [regexString, setRegexString] = useState<string>("");
  const currentQuestion = useMemo(() => data[index], [index]);

  const isCorrect = gradeQuestion(regexString, index);

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
          examples={currentQuestion.examples}
          desc={currentQuestion.desc}
          index={index}
        />
        <Textarea
          value={regexString}
          setValue={setRegexString}
          isCorrect={isCorrect}
        />
        {!isCorrect && regexString.length > 0 && <div className="flex flex-row gap-2">
          {currentQuestion.examples.slice(0, 2).map((example) => <Incorrect
            keyRegex={currentQuestion.regex}
            userRegex={regexString}
            originalString={example}
          />)}
        </div>}
        {isCorrect && <Correct
          index={index}
          setIndex={setIndex}
        />}
      </div>
    </div>
  )
}

export default App
