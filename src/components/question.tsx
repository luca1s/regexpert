import Correct from "./correct"
import Examples from "./examples"
import Incorrect from "./incorrect"
import Textarea from "./textarea"
import { useState, useEffect, useMemo } from "react"
import { data } from "../util/data"
import { gradeQuestion, RegExMatch } from "../util/gradeQuestion"

export default function Question({ index, setIndex }: { index: number, setIndex: (index: number) => void }) {
    const [regexString, setRegexString] = useState<string>("");
    const currentQuestion = useMemo(() => data[index], [index]);

    const isCorrect = gradeQuestion(regexString, index);

    let incorrectValues = [];
    for (let i = 0; i < currentQuestion.examples.length; i++) {
        if (!RegExMatch(regexString, currentQuestion.examples[i], currentQuestion.regex)) {
            incorrectValues.push(currentQuestion.examples[i]);
        }
    }

    useEffect(() => {
        setRegexString("");
    }, [index])


    return <div className="flex-grow flex flex-col items-center justify-start bg-gray-900">
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
            {incorrectValues.slice(0, 2).map((example, index) => <Incorrect
                key={index}
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
}