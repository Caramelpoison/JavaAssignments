let Gmail = {
    myName: 'Alexander Forward',
    email: 'Alexander@ctach.com',
    mailboxes: [
    {
        name: "inbox",
            emails: [
            {
                from: "Lauren@ctach.com",
                subject: "Absent tomorrow",
                body: "I wont be in class today",
                time: "04/05/2023"
            },
            {
                from: "Kelan@ctach.com",
                subject: "Let's do This",
                body: "Today, we are going to rock it!",
                time: "04/05/2023"
            },
            {
                from: "Christina@ctach.com",
                subject: "Deskmate problems",
                body: "I don't want to sit next to her",
                time: "04/05/2023"
            },
            ],
    },
    {
        name: "sent",
        emails: [
            {
            to: "Christina@ctach.com",
            subject: "Deskmate problems",
            body: "Stahp dude she's really nice",
            },
            {
            to: "Darranda@ctach.com",
            subject: "I fogrgot deodorant ",
            body: "Can you tell?",
            }

        ],        
    },
    {
        name: "trash",
        emails: [
            {
            from: "faceinlarger.com",
            subject: "Make your face Larger $4.99",
            body: "Use this cream to make your face bigger than a snap filter ever will",
            },
        ],   
    },
    {
        name: "draft",
        emails: [
            {
            to: "faceinlarger.com",
            subject: "Make your face Larger $4.99",
            body: "I'm very interested in making face larger!! Are their any side affects like my skull having too much space for my brain?",
            },
        ],   
    }

    ],
    contacts: [
            {name: 'Lauren', email: 'Lauren@ctach.com', lastMessage: "I wont be in class today"},
            {name: 'Kelan', email: 'Kelan@ctach.com', lastMessage: "Today, we are going to rock it!"},
            {name: 'Christina', email: 'Christina@ctach.com', lastMessage: "I don't want to sit next to her"},
            {name: 'Darranda', email: 'Darranda@ctach.com', lastMessage: "Yeah I smell it from here"},
            {name: 'Alexander', email: 'Alexander@ctach.com', lastMessage: "We're going to learn so mcuh today"}
    ],
}


// List of Mailboxes 
console.log("")
for (let mailboxNames in Gmail.mailboxes) {
    console.log(Gmail.mailboxes[mailboxNames].name);
  }


// List of emails 
console.log("")

for (let emailList of Gmail.mailboxes[0].emails) {
    console.log(emailList.subject);
}

console.log("")

//second email
let secondEmail = Gmail.mailboxes[0].emails[1];
let emailText = secondEmail.body;
console.log(emailText);

console.log("")


//move email to sent
Gmail.mailboxes[1].emails.unshift(Gmail.mailboxes[3].emails.shift());

let sentEmail = Gmail.mailboxes[1].emails[0];

console.log(sentEmail)

//make a new email in draft
console.log("");
console.log("");console.log("")

let newEmail = {
    to: "Hector@ctach.com",
    subject: "This was hard",
    body: "But I like a challenge",
  };
  

Gmail.mailboxes[3].emails.push(newEmail);

console.log(Gmail.mailboxes[3].emails);