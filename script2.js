

/*
    const disableButtonForRight = () => {
        wrongAnswerButton1.disabled = true;
        wrongAnswerButton2.disabled = true;
        wrongAnswerButton3.disabled = true;
    };

    const disableButtonForWrong1 = () =>{
        wrongAnswerButton2.disabled = true;
        wrongAnswerButton3.disabled = true;
        correctAnswerButton.disabled = true;

    }

    const disableButtonForWrong2 = () =>{
        wrongAnswerButton1.disabled = true;
        wrongAnswerButton3.disabled = true;
        correctAnswerButton.disabled = true;
    }

    const disableButtonForWrong3= () =>{
        wrongAnswerButton1.disabled = true;
        wrongAnswerButton2.disabled = true;
        correctAnswerButton.disabled = true;
    }

    correctAnswerButton.addEventListener('click', disableButtonForRight);
    

    wrongAnswerButton1.addEventListener('click', disableButtonForWrong1);
    
    wrongAnswerButton2.addEventListener('click', disableButtonForWrong2);

    wrongAnswerButton3.addEventListener('click', disableButtonForWrong3);
*/


let startQuizContainer = document.getElementById("startQuizContainer");
let startQuizButton = document.getElementById("startQuizButton"); 
let containerForEverything =  document.getElementById("containerForEverything"); 


let nextQuestionContainer = document.getElementById("nextQuestionContainer");

let nextQuestionButton = document.getElementById("nextQuestionButton");

let questionInTheQuiz = document.getElementById("questionInTheQuiz");

function startQuiz() {
    startQuizButton.addEventListener('click', () =>{
        containerForEverything.classList.remove('hide');
        startQuizContainer.style.display = "none";
        nextQuestionContainer.classList.remove('hide');
});
displayQuestion();
}



function displayQuestion(){
    questionInTheQuiz.innerText = allQuestions.question;
}


var allQuestions = [ {
    question: 'Who is this?',
    answers:[
        { text: 'Dean Winchester', correct: true},
        { text: 'Sam Harvelle' , correct: false},
        { text: 'Crowley' , correct: false},
        { text: 'Death' , correct: false},
        ]
    },
    {question: 'Who is this?',
    answers:[
        { text: 'Bobby Singer', correct: true},
        { text: 'Jo Harvelle' , correct: false},
        { text: 'Castiel' , correct: false},
        { text: 'War' , correct: false},
        ]
    },
    {question: "Who is this?",
    answers:[
        { text: 'Dean JOOJO', correct: true},
        { text: 'Sam Winchester' , correct: false},
        { text: 'Ruby' , correct: false},
        { text: 'Azazel' , correct: false},
        ]
    },
    {question: "How do you kill a vampire?",
    answers:[
        { text: 'You look at him funny', correct: true},
        { text: 'You cut its head off' , correct: false},
        { text: 'With silver bullets' , correct: false},
        { text: "You can't" , correct: false},
        ]
    },
    {question: "Who killed Death?",
    answers:[
        { text: 'Dean Winchester', correct: true},
        { text: 'Lucifer' , correct: false},
        { text: 'Crowley' , correct: false},
        { text: 'Billie' , correct: false},
        ]
    },
    {question: "What happened to Bella?",
    answers:[
        { text: 'She died by hellhounds', correct: true},
        { text: 'She lives' , correct: false},
        { text: 'She married and fucked off' , correct: false},
        { text: 'She stole the colt and killed herelf with it' , correct: false},
        ]
    },
    {question: "Who is in heaven by the end of the show?",
    answers:[
        { text: 'Kevin, Dean, Sam, Death', correct: true},
        { text: 'Ash, Jess, Rufus, Bobby' , correct: false},
        { text: 'Crowley, Sam, Dean, Bobby' , correct: false},
        { text: 'Mary, John, Sam, my grandma (because the show ran for fucking 15 years ffs)' , correct: false},
    ]
    },
    ]


      








     