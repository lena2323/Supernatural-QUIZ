


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



    var questions = [`
    <p>Who is this?</p>
    <img src="images/BobbySinger.jpg" class="imagesInTheContainer">
    <div class="allButtonsContainer">
        <button class="allButtons right" id="correctButton" >Bobby Singer</button>
        <button class="allButtons wrong" id="wrongButton1">Jo Harvelle</button>
        <button class="allButtons wrong" id="wrongButton2" >Castiel</button>
        <button class="allButtons wrong" id="wrongButton3">Death</button>
    </div>`,
    `<p>Who is this?</p>
    <img src="images/BobbySinger.jpg" class="imagesInTheContainer">
    <div class="allButtonsContainer">
        <button class="allButtons right" id="correctButton" >Dean Winchester</button>
        <button class="allButtons wrong" id="wrongButton1">Sam Harvelle</button>
        <button class="allButtons wrong" id="wrongButton2" >Crowley</button>
        <button class="allButtons wrong" id="wrongButton3">War</button>
    </div>`,
    `<p>Who is this?</p>
    <img src="images/BobbySinger.jpg" class="imagesInTheContainer">
    <div class="allButtonsContainer">
        <button class="allButtons right" id="correctButton" >Dean JOOJO</button>
        <button class="allButtons wrong" id="wrongButton1">Sam Winchester</button>
        <button class="allButtons wrong" id="wrongButton2" >Ruby</button>
        <button class="allButtons wrong" id="wrongButton3">Azazel</button>
    </div>`,
    `<p>How do you kill a vampire?</p>
    <img src="images/BobbySinger.jpg" class="imagesInTheContainer">
    <div class="allButtonsContainer">
        <button class="allButtons right" id="correctButton" >You look at him funny</button>
        <button class="allButtons wrong" id="wrongButton1">You cut its head off</button>
        <button class="allButtons wrong" id="wrongButton2" >With silver bullets</button>
        <button class="allButtons wrong" id="wrongButton3">You can't</button>
    </div>`,
    `<p>Who killed Death?</p>
    <img src="images/BobbySinger.jpg" class="imagesInTheContainer">
    <div class="allButtonsContainer">
        <button class="allButtons right" id="correctButton" >Dean Winchester</button>
        <button class="allButtons wrong" id="wrongButton1">Lucifer</button>
        <button class="allButtons wrong" id="wrongButton2" >Crowley</button>
        <button class="allButtons wrong" id="wrongButton3">Billie</button>
    </div>`,
    `<p>What happened to Bella?</p>
    <img src="images/BobbySinger.jpg" class="imagesInTheContainer">
    <div class="allButtonsContainer">
        <button class="allButtons right" id="correctButton" >She died by hellhounds</button>
        <button class="allButtons wrong" id="wrongButton1">She lives</button>
        <button class="allButtons wrong" id="wrongButton2" >She married and fucked off</button>
        <button class="allButtons wrong" id="wrongButton3">She stole the colt and killed herelf with it</button>
    </div>`,
    `<p>Who is in heaven by the end of the show?</p>
    <img src="images/BobbySinger.jpg" class="imagesInTheContainer">
    <div class="allButtonsContainer">
        <button class="allButtons right" id="correctButton" >Kevin, Dean, Sam, Death</button>
        <button class="allButtons wrong" id="wrongButton1">Ash, Jess, Rufus, Bobby</button>
        <button class="allButtons wrong" id="wrongButton2" >Crowley, Sam, Dean, Bobby</button>
        <button class="allButtons wrong" id="wrongButton3">Mary, John, Sam, Azazel</button>
    </div>`
];



     function nextQuestion() {
        var randomNumber = Math.floor(Math.random() * (questions.length));
        document.getElementById('containerForEverything').innerHTML =
        questions[randomNumber];
      };


     