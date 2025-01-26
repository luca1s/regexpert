import Correct from "./components/correct"
import Examples from "./components/examples"
import Incorrect from "./components/incorrect"
import Textarea from "./components/textarea"
import { useState, useEffect, useMemo } from "react"
import { data } from "./util/data"
import { gradeQuestion, RegExMatch } from "./util/gradeQuestion"
import { useLocalStorage } from "usehooks-ts"

function App() {
  const [index, setIndex] = useLocalStorage<number>("index", 0);
  const [regexString, setRegexString] = useState<string>("");
  const currentQuestion = useMemo(() => data[index], [index]);

  const isCorrect = gradeQuestion(regexString, index);

  let incorrectValues = [];
  for (let i = 0; i < currentQuestion.examples.length; i++) {
    if (!RegExMatch(regexString, currentQuestion.examples[i], currentQuestion.captured[i])) {
      incorrectValues.push(currentQuestion.examples[i]);
    }
  }

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
          regexString={currentQuestion.regex}
        />
        <Textarea
          value={regexString}
          setValue={setRegexString}
          isCorrect={isCorrect}
        />
        {!isCorrect && regexString.length > 0 && <div className="flex flex-row gap-2 flex-wrap justify-center">
          {incorrectValues.slice(0, 2).map((example) => <Incorrect
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
