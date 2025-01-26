export const data = [
    {
        desc: "the word 'apple'",
        regex: "\\bapple\\b",
        examples: [
            "I like eating apple pie.",
            "apple is my favorite fruit.",
            "He bought applesauce, but no apple."
        ],
    },
    {
        desc: "words that end in \"ing\"",
        regex: "[a-zA-Z]+ing",
        examples: [
            "I was running in the park",
            "The cat is sleeping",
            "The dog is barking"
        ],
    },
    {
        desc: "dates in YYYY-MM-DD format",
        regex: "\\b\\d{4}-\\d{2}-\\d{2}\\b",
        examples: [
            "The event is scheduled for 2023-05-20.",
            "Start date: 2024-01-15, end date: 2024-02-15.",
            "Invalid date 20-23-05-10, but here is 2022-11-30."
        ],
    },
    {
        desc: "sequences of three consecutive repeated characters",
        regex: "(.)\\1\\1",
        examples: [
            "The balloon went boom! Wooow.",
            "Look for aaa in this string.",
            "There's no repeat here except eee."
        ],
    },
    {
        desc: "email addresses",
        regex: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
        examples: [
            "Contact us at support@company.com for details.",
            "Send an email to hello.world@domain.org now!",
            "Invalid email: test@site"
        ],
    },
    {
        desc: "URLs starting with http or https",
        regex: "https?://[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(/\\S*)?",
        examples: [
            "Visit our site at https://example.com.",
            "This page http://site.org/info is helpful.",
            "Secure sites use https://www.secure-site.net."
        ],
    },
    {
        desc: "text inside parentheses",
        regex: "\\(([^()]+)\\)",
        examples: [
            "The color (blue) is my favorite.",
            "He said (hello) and waved.",
            "Nested (parentheses (like this)) are tricky."
        ]
    },
    {
        desc: "HTML content with <title> tags",
        regex: "<title>(.*?)<\\/title>",
        examples: [
            "<title>My Website</title>",
            "<html><title>Page Title</title></html>",
            "No title here <title></title>"
        ]
    },
    {
        desc: "phone numbers in (123) 456-7890 format",
        regex: "\\(\\d{3}\\) \\d{3}-\\d{4}",
        examples: [
            "Call me at (123) 456-7890 tomorrow.",
            "Numbers like (987) 654-3210 are valid.",
            "Invalid: 123-456-7890, Valid: (555) 333-1212"
        ]
    },
    {
        desc: "JSON key-value pairs",
        regex: "\"\\s*([^\\\"]+)\\s*\"\\s*:\\s*\"\\s*([^\\\"]+)\\s*\"",
        examples: [
            '{"name": "John", "age": "30"}',
            '{"id": "12345", "status": "active"}',
            '{"city": "New York", "country": "USA"}'
        ]
    }
];