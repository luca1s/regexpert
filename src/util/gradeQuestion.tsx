import { ReactElement } from "react";
import { data } from "./data";

// fix actual parsing...it should behave the same hardcoded as it does with the user input (it doesn't)


export function RegExMatch(regexString: string, originalString: string, originalRegex: string): boolean {
    try {
        const regex = new RegExp(regexString, 'g');
        const match = originalString.match(regex);
        const originalMatch = originalString.match(new RegExp(originalRegex, 'g')); 
        return match == originalMatch;
    } catch (error) {
        console.error("Invalid regex:", error);
        return false;
    }
}

export function gradeQuestion(regexString: string, index: number): boolean {
    try {
        const question = data[index];
        const regex = new RegExp(regexString, 'g');
        const captured = question.examples.map(example => {
            const match = example.match(regex);
            return match ? match[0] : null;
        });

        const capturedOriginal = question.examples.map(example => {
            const match = example.match(new RegExp(question.regex, 'g'));
            return match ? match[0] : null;
        });

        return JSON.stringify(captured) === JSON.stringify(capturedOriginal);
    } catch (error) {
        console.error("Invalid regex:", error);
        return false;
    }
}

export function createHighlightedString(regexString: string, originalString: string): ReactElement {
    try {
        const regex = new RegExp(regexString, 'g');
        const elements: ReactElement[] = [];
        let lastIndex = 0;

        let match;
        while ((match = regex.exec(originalString)) !== null) {
            if (match.index > lastIndex) {
                elements.push(
                    <span key={`text-${lastIndex}`}>{originalString.slice(lastIndex, match.index)}</span>
                );
            }

            elements.push(
                <span key={`match-${match.index}`} className="text-green-400 font-bold">
                    {match[0]}
                </span>
            );

            lastIndex = regex.lastIndex;
        }

        if (lastIndex < originalString.length) {
            elements.push(
                <span key={`text-${lastIndex}`}>{originalString.slice(lastIndex)}</span>
            );
        }

        return <p className="text-gray-400">{elements}</p>;
    } catch (error) {
        console.error("Invalid regex:", error);
        return <p className="text-red-500">Invalid regex pattern</p>;
    }
}