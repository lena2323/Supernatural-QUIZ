


    let correctAnswerButton = document.getElementById('correctButton');
    let wrongAnswerButton1 = document.getElementById('wrongButton1');
    let wrongAnswerButton2 = document.getElementById('wrongButton2');
    let wrongAnswerButton3 = document.getElementById('wrongButton3');


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
