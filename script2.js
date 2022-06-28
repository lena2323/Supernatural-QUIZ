

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

function getSiblings(e) {
    let siblings = []; 
    if(!e.parentNode) {
        return siblings;
    }
    let sibling  = e.parentNode.firstChild;    
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

var allQuestions = [ {
    question: 'Who is this?',
    answers:[
        { text: 'Bobby Singer', correct: true},
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


let startQuizContainer = document.getElementById("startQuizContainer");
let startQuizButton = document.getElementById("startQuizButton"); 
let containerForEverything =  document.getElementById("containerForEverything"); 


let nextQuestionContainer = document.getElementById("nextQuestionContainer");

let nextQuestionButton = document.getElementById("nextQuestionButton");

let questionInTheQuiz = document.getElementById("questionInTheQuiz");

let answerButton0 = document.getElementById("answerButton0");
let answerButton1 = document.getElementById("answerButton1");
let answerButton2 = document.getElementById("answerButton2");
let answerButton3 = document.getElementById("answerButton3");

let currentQuestionIndex = 0;

let correctAnswerTotal = 0;
let wrongAnswerTotal = 0;

let resultContainer = document.getElementById("resultContainer");
let resultText = document.getElementById("resultText");


function resetQuiz() {
    containerForEverything.classList.add('hide');
    startQuizContainer.style.display = "flex";
    nextQuestionContainer.classList.add('hide');
    startQuizButton.innerText = "Restart?";
    currentQuestionIndex = 0;
    resultContainer.classList.remove('hide');
    resultText.innerText = "Correct answers: " + correctAnswerTotal + "Wrong answers: " + wrongAnswerTotal + "Total answered questions:" + (correctAnswerTotal + wrongAnswerTotal);
    correctAnswerTotal = 0;
    wrongAnswerTotal = 0;
}

function startQuiz() {
    containerForEverything.classList.remove('hide');
    startQuizContainer.style.display = "none";
    nextQuestionContainer.classList.remove('hide');
    shuffleArray(allQuestions);
    displayQuestion(currentQuestionIndex);
}

function displayQuestion(index){
    
    if(currentQuestionIndex == allQuestions.length)
        resetQuiz();
    else{
        questionInTheQuiz.innerText = allQuestions[index].question;
        displayAnswers(index);
        currentQuestionIndex++;
    }
}

function updateAnswerButton(button, answer) {
    button.innerText = answer.text;
    if(answer.correct == true) {
        button.setAttribute("correct", "true");
    }        
    else {
        button.setAttribute("correct", "false");
    }

    button.disabled = false;

    button.classList.remove("wrong");
    button.classList.remove("right");
}

function displayAnswers(index) {
    shuffleArray(allQuestions[index].answers);
    
    updateAnswerButton(answerButton0, allQuestions[index].answers[0]);
    updateAnswerButton(answerButton1, allQuestions[index].answers[1]);
    updateAnswerButton(answerButton2, allQuestions[index].answers[2]);
    updateAnswerButton(answerButton3, allQuestions[index].answers[3]);        
}

function nextQuestion() {
    displayQuestion(currentQuestionIndex);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function clickedAnswer(id) {
    var button = document.getElementById(id);

    if(button.getAttribute("correct") == "true") {
        button.classList.remove("wrong");
        button.classList.add("right");
        correctAnswerTotal++
    }        
    else {
        button.classList.remove("right");
        button.classList.add("wrong");
        wrongAnswerTotal++
    }
        
    var otherButtons = getSiblings(button);

    otherButtons.forEach((buttonToDisable) => {
        buttonToDisable.disabled = true;
    });

}





      








     