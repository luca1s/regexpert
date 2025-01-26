export const data = [
    {
        desc: "words that end in \"ing\"",
        regex: "[a-zA-Z]+ing",
        examples: ["I was running in the park", "The cat is sleeping", "The dog is barking"],
        captured: ["running", "sleeping", "barking"]
    },
    {
        desc: "negative integers",
        regex: "-\\d+",
        examples: ["The number was -5 degrees", "The temperature was -10 today", "The number was -14949"],
        captured: ["-5", "-10", "-14949"]
    },
    {
        desc: "proper nouns",
        regex: "([A-Z])\\w+",
        examples: ["The capital is Paris", "We were vacationing in Madrid", "The trip to Rome was amazing"],
        captured: ["Paris", "Madrid", "Rome"]
    },
    {
        desc: "hexadecimal numbers",
        regex: "([a-fA-F0-9]+)",
        examples: ["The color was #FF0000", "The number was 0x2F", "The color was #00FF00"],
        captured: ["FF0000", "2F", "00FF00"]
    },
    {
        desc: "dates in MM/DD/YYYY format",
        regex: "\\d{2}/\\d{2}/\\d{4}",
        examples: ["The date was 12/25/2020 yesterday", "Inauguration was 01/20/2025 this year.", "The date was 02/14/2021"],
        captured: ["12/25/2020", "01/01/2021", "02/14/2021"]
    },
    {
        desc: "credit card numbers",
        regex: "\\d{4}-?\\d{4}-?\\d{4}-?\\d{4}",
        examples: ["The credit card number is 1234-5678-9012-3456, it declined.", "The card number is 1234-5678-9012-3456", "1234-5678-9012-3456 was my first credit card."],
        captured: ["1234-5678-9012-3456", "1234-5678-9012-3456", "1234-5678-9012-3456"]
    },
    {
        desc: "US postal codes",
        regex: "\\d{5}(-\\d{4})?",
        examples: ["The zip code is 6789 for my home", "The postal code is 12345 here.", "The zip code is 04107 back in Cape."],
    },
    {
        desc: "numbers divisible by 5",
        regex: "(0|\\d+[0|5])",
        examples: ["The number was 5 on question 3", "The number was 10 on question 17", "The number was 55 for the math test."],
        captured: ["5", "10", "55"]
    },
    {
        desc: "email addresses",
        regex: "[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}",
        examples: ["The email is testemail@fake.com", "My mom's email is test2@anotherfake.com", "The email is test@test"],
        captured: ["testemail@fake.com", "test2@anotherfake.com", ""]
    },
    {
        desc: "numbers greater than 12",
        regex: "\\d{3,}|[2-9]\\d|1[3-9]",
        examples: ["The number was 13 for sure", "I just turned 20 yesterday.", "There were 100 cancellations yesterday.", "The number was 5"],
    },
    {
        desc: "IPv4 addresses",
        regex: "((25[0-5]|(2[0-4]|1\\d|[1-9]|)\\d)\\.?\b){4}",
        examples: ["The IP address at home is 192.168.0.1", "192.172.1.3 is the school IP", "192.168.0.1.4 is a valid IP right?"],
        captured: ["192.168.0.1", "192.172.1.3", ""]
    }
]