let questions = [
    {
        "question": "What is the correct syntax for referring to an external script called 'script.js'?",
        "options": {
            "A": "script name='script.js'>",
            "B": "script src='script.js'>",
            "C": "script href='script.js'>",
            "D": "script ref='script.js'>"
        },
        "correct": "B"
    },
    {
        "question": "How do you write 'Hello World' in an alert box?",
        "options": {
            "A": "msg('Hello World');",
            "B": "alertBox('Hello World');",
            "C": "alert('Hello World');",
            "D": "msgBox('Hello World');"
        },
        "correct": "C"
    },
    {
        "question": "Which of the following is not a reserved word in JavaScript?",
        "options": {
            "A": "interface",
            "B": "throws",
            "C": "program",
            "D": "short"
        },
        "correct": "C"
    },
    {
        "question": "What is the correct way to write a JavaScript array?",
        "options": {
            "A": "var colors = (1:'red', 2:'green', 3:'blue')",
            "B": "var colors = 'red', 'green', 'blue'",
            "C": "var colors = ['red', 'green', 'blue']",
            "D": "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
        },
        "correct": "C"
    },
    {
        "question": "Which event occurs when the user clicks on an HTML element?",
        "options": {
            "A": "onchange",
            "B": "onclick",
            "C": "onmouseclick",
            "D": "onmouseover"
        },
        "correct": "B"
    },
    {
        "question": "How do you declare a JavaScript variable?",
        "options": {
            "A": "variable carName;",
            "B": "var carName;",
            "C": "v carName;",
            "D": "string carName;"
        },
        "correct": "B"
    },
    {
        "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
        "code": "<p id='demo'>This is a demonstration.</p>",
        "options": {
            "A": "document.getElementById('demo').innerHTML = 'Hello World!';",
            "B": "document.getElementByName('demo').innerHTML = 'Hello World!';",
            "C": "document.getElementByTagName('p').innerHTML = 'Hello World!';",
            "D": "document.getElement('p').innerHTML = 'Hello World!';"
        },
        "correct": "A"
    },
    {
        "question": "How do you create a function in JavaScript?",
        "options": {
            "A": "function myFunction()",
            "B": "function:myFunction()",
            "C": "function = myFunction()",
            "D": "function => myFunction()"
        },
        "correct": "A"
    },
    {
        "question": "How do you call a function named 'myFunction'?",
        "options": {
            "A": "call myFunction()",
            "B": "call function myFunction()",
            "C": "myFunction()",
            "D": "Call.myFunction()"
        },
        "correct": "C"
    },
    {
        "question": "How can you add a comment in JavaScript?",
        "options": {
            "A": "'This is a comment",
            "B": "<!--This is a comment-->",
            "C": "//This is a comment",
            "D": "This is a comment"
        },
        "correct": "C"
    },
    {
        "question": "What will the following code return: Boolean(10 > 9)?",
        "options": {
            "A": "false",
            "B": "true",
            "C": "NaN",
            "D": "undefined"
        },
        "correct": "B"
    },
    {
        "question": "Which operator is used to assign a value to a variable?",
        "options": {
            "A": "*",
            "B": "x",
            "C": "=",
            "D": "-"
        },
        "correct": "C"
    },
    {
        "question": "What is the correct JavaScript syntax to write 'Hello World'?",
        "options": {
            "A": "('Hello World')",
            "B": "document.write('Hello World')",
            "C": "response.write('Hello World')",
            "D": "('Hello World').document.write"
        },
        "correct": "B"
    },
    {
        "question": "Which method can be used to find the length of a string?",
        "options": {
            "A": "length()",
            "B": "getLength()",
            "C": "strlen()",
            "D": "length"
        },
        "correct": "D"
    },
    {
        "question": "Which built-in method sorts the elements of an array?",
        "options": {
            "A": "changeOrder(order)",
            "B": "order()",
            "C": "sort()",
            "D": "arrange()"
        },
        "correct": "C"
    },
    {
        "question": "Which of the following is a way to create an object in JavaScript?",
        "options": {
            "A": "var obj = {};",
            "B": "var obj = ();",
            "C": "var obj = [];",
            "D": "var obj = <>;"
        },
        "correct": "A"
    },
    {
        "question": "How do you round the number 7.25 to the nearest integer?",
        "options": {
            "A": "Math.rnd(7.25)",
            "B": "Math.round(7.25)",
            "C": "rnd(7.25)",
            "D": "round(7.25)"
        },
        "correct": "B"
    },
    {
        "question": "How can you detect the client's browser name?",
        "options": {
            "A": "navigator.appName",
            "B": "browser.name",
            "C": "client.navName",
            "D": "window.browser"
        },
        "correct": "A"
    },
    {
        "question": "Which JavaScript method is used to access an HTML element by id?",
        "options": {
            "A": "getElementById()",
            "B": "getElement(id)",
            "C": "getElementByID()",
            "D": "getIdElement()"
        },
        "correct": "A"
    }
];

const uimaker=()=>{
     document.getElementById("quize").innerHTML =""
        // document.getElementById("data").innerHTML=""
    questions.map((ele,i) => {
      
        let question = document.createElement("h3");
            question.innerHTML =`${i+1}.${ele.question}`
    
        let answer1 = document.createElement("button");
        answer1.innerHTML =` A. ${ele.options.A}`
    
        let answer2 = document.createElement("button")
        answer2.innerHTML =`B. ${ele.options.B}`
    
        let answer3 = document.createElement("button")
        answer3.innerHTML =`C. ${ele.options.C}`
    
        let answer4 = document.createElement("button")
        answer4.innerHTML =`D. ${ele.options.D}`
    
        document.getElementById("quize").append(question, answer1, answer2, answer3, answer4)
        let true1=ele.correct
    
        answer1.addEventListener("click",() => {
            if(true1=="A"){
                answer1.style.background="green"
                answer1.style.color="white"
            }
            else{
                answer1.style.background="red"
                answer1.style.color="white"
            }
        })
        answer2.addEventListener("click",() => {
            if(true1=="B"){
                answer2.style.background="green"
                answer2.style.color="white"
            }
            else{
                answer2.style.background="red"
                answer2.style.color="white"
            }
        })
        answer3.addEventListener("click",() => {
            if(true1=="C"){
                answer3.style.background="green"
                answer3.style.color="white"
            }
            else{
                answer3.style.background="red"
                answer3.style.color="white"
            }
        })
        answer4.addEventListener("click",() => {
            if(true1=="D"){
                answer4.style.background="green"
                answer4.style.color="white"
            }
            else{
                answer4.style.background="red"
                answer4.style.color="white"
            }
        })
    
       
    })
}
document.getElementById("data").addEventListener("submit",(e)=>{
    e.preventDefault();
    let adddata={
        question:document.getElementById("question").value,
        "options": {
        A: document.getElementById("A").value,
        B: document.getElementById("B").value,
        C:document.getElementById("C").value,
        D: document.getElementById("D").value,
        },
        correct:document.getElementById("correct").value
        
    }
    questions.push(adddata)
    uimaker()
    })
uimaker()