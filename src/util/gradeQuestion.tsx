import { ReactElement } from "react";
import { data } from "./data";

export function gradeQuestion(regexString: string, index: number): boolean {
    try {
        const question = data[index];
        const regex = new RegExp(regexString);
        const captured = question.examples.map(example => {
            const match = example.match(regex);
            return match ? match[0] : null;
        });

        return JSON.stringify(captured) === JSON.stringify(question.captured);
    } catch (error) {
        console.error("Invalid regex:", error);
        return false;
    }
}

export function createHighlightedString(regexString: string, originalString: string): ReactElement {
    try {
        const regex = new RegExp(regexString, 'g');
        const parts = originalString.split(regex);
        const matches = originalString.match(regex);

        return (
            <p className="text-gray-400">
                {parts.map((part, index) => (
                    <span key={index}>
                        {part}
                        {matches && matches[index] && (
                            <span className="text-green-400 font-bold">{matches[index]}</span>
                        )}
                    </span>
                ))}
            </p>
        );
    } catch (error) {
        console.error("Invalid regex:", error);
        return <p className="text-red-500">Invalid regex pattern</p>;
    }
}