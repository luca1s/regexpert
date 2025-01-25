type RL = {
    desc: string,
    regex: string
};

export const regexList: RL[] = [
    {
        "desc": "words that end in \"ing\"",
        "regex": "[a-zA-Z]+ing"
    },
    {
        "desc": "positive integer",
        "regex": "-\\d+"
    },
    {
        "desc": "proper nouns",
        "regex": "([A-Z])\\w+"
    },
    {
        "desc": "hexadecimal numbers",
        "regex": "([a-fA-F0-9]+)"
    },
    {
        "desc": "dates (MM/DD/YYYY)",
        "regex": "\\d{2}/\\d{2}/\\d{4}"
    },
    {
        "desc": "credit card numbers",
        "regex": "\\d{4}-?\\d{4}-?\\d{4}-?\\d{4}"
    },
    {
        "desc": "US postal codes",
        "regex": "\\d{5}(-\\d{4})?"
    },
    {
        "desc": "numbers divisible by 5",
        "regex": "(0|\\d+[0|5])"
    },
    {
        "desc": "email addresses",
        "regex": "[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}"
    },
    {
        "desc": "numbers greater than 12",
        "regex": "\\d{3,}|[2-9]\\d|1[3-9]"
    },
    {
        "desc": "IPv4 addresses",
        "regex": "((25[0-5]|(2[0-4]|1\\d|[1-9]|)\\d)\\.?\b){4}"
    },
    {
        "desc": "regular expressions",
        "regex": "\/((?![*+?])(?:[^\r\n\\[/\\]|\\.|\\[(?:[^\r\n\\]\\]|\\.)*\\])+)\/((?:g(?:im?|mi?)?|i(?:gm?|mg?)?|m(?:gi?|ig?)?)?)"
    }
]