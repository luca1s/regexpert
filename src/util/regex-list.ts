type RL = {
    desc: string,
    regex: string
};

export const regexList: RL[] = [
    {
        "desc": "Words that end in \"ing\"",
        "regex": "[a-zA-Z]+ing"
    },
    {
        "desc": "Positive integer",
        "regex": "-\\d+"
    },
    {
        "desc": "Proper nouns",
        "regex": "([A-Z])\\w+"
    },
    {
        "desc": "Hexadecimal numbers",
        "regex": "([a-fA-F0-9]+)"
    },
    {
        "desc": "Dates (MM/DD/YYYY)",
        "regex": "\\d{2}/\\d{2}/\\d{4}"
    },
    {
        "desc": "Credit card numbers",
        "regex": "\\d{4}-?\\d{4}-?\\d{4}-?\\d{4}"
    },
    {
        "desc": "US postal codes",
        "regex": "\\d{5}(-\\d{4})?"
    },
    {
        "desc": "Numbers divisible by 5",
        "regex": "(0|\\d+[0|5])"
    },
    {
        "desc": "Email addresses",
        "regex": "[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}"
    },
    {
        "desc": "Numbers greater than 12",
        "regex": "\\d{3,}|[2-9]\\d|1[3-9]"
    },
    {
        "desc": "IPv4 addresses",
        "regex": "((25[0-5]|(2[0-4]|1\\d|[1-9]|)\\d)\\.?\b){4}"
    },
    {
        "desc": "Regular expressions",
        "regex": "\/((?![*+?])(?:[^\r\n\\[/\\]|\\.|\\[(?:[^\r\n\\]\\]|\\.)*\\])+)\/((?:g(?:im?|mi?)?|i(?:gm?|mg?)?|m(?:gi?|ig?)?)?)"
    }
]