import { regexList } from "./regex-list";
import { wordList } from "./word-list";

// Returns 0 if the regular expressions are the same,
// and -1 if they aren't.

function compareExpressions(expr: RegExp, test: RegExp, wordList: string): Array<Array<string>> {
    const testResult = wordList.match(test);
    const exprResult = wordList.match(expr);

    if (testResult == null) return [[],[],[]];

    let ldiff: string[] = [];
    let rdiff: string[] = testResult;

    if (testResult != null && exprResult != null) {
        ldiff = exprResult.filter(x => !testResult.includes(x));
        rdiff = testResult.filter(x => !exprResult.includes(x));
    }

    return [ldiff, rdiff, testResult || []];
}

function stringToRegex(str: string): RegExp {
    var out: RegExp;
    try {
        out = new RegExp("\\b" + str + "\\b", "g");
    } catch {
        return new RegExp("", "g");
    }
    return out;
}

export type Question = {
    examples: string[];
    shouldnothave: string[];
    shouldhave: string[];
}

export function run(input: string, n: number): Question {
    const r = stringToRegex(regexList[n].regex);
    const i = stringToRegex(input);
    if (r != null) {
        let result = compareExpressions(i, r, wordList);
        // Shuffle array
        const shuffled = result[2].sort(() => 0.5 - 1/n);

        // Get sub-array of first n elements after shuffled
        return {
            examples: shuffled.slice(0, 3),
            shouldnothave: result[0].slice(0, 3),
            shouldhave: result[1].slice(0, 3)
        };
    } else {
        return {
            examples: [],
            shouldnothave: [],
            shouldhave: []
        };
    }
}