let urscore=0;
let myscore=0;


const msg = document.querySelector("#msg");
const msg1 = document.querySelector("#msg1");
const choices= document.querySelectorAll(".choice");

const playGame = (urchoice) => {
    console.log("ur choice = " , urchoice);
    //Generate Paras's Choice
    const mychoice = genParasChoice();
    console.log("Paras choice =", mychoice)
    let userwin = true;
    if(urchoice==mychoice){
        //Draw game
        drawGame();
    } else {
        
        if(urchoice == "rock") {
            userwin = mychoice == "Paper" ? false : true;
        } 
        else if(urchoice == "Paper"){
            userwin = mychoice == "Scissors" ? false : true;
        } else {
            userwin = mychoice == "rock" ? false : true;
        }
        showWinner(userwin);
    }

    
}

const urscore1 = document.querySelector("#ur")
const myscore1 = document.querySelector("#paras")

const showWinner = (userwin) => {
    if(userwin){
        urscore++;
        urscore1.innerText = urscore;

        /*console.log("you won");*/
        msg.innerText = "You Won";
        msg.style.backgroundColor = "green";
        msg1.style.backgroundColor = "green";
        
        losetrashtalk();
    } else {
            myscore++;
            myscore1.innerText = myscore;

        /*console.log("you lost");*/
        msg.innerText = "You Lost";
        msg.style.backgroundColor = "red";
        msg1.style.backgroundColor = "red";
        
        wintrashtalk();
    }
}

const drawGame = () => {
    /*console.log("BETTER LUCK NEXT TIME, it was a DRAW")*/
    msg.innerText = "DRAW";
    msg.style.backgroundColor = "black";
    msg1.style.backgroundColor = "black";
    
    drawtrashtalk();
}

const genParasChoice = () => {
    const options = ["rock","Paper","Scissors"];
    let random = Math.floor(Math.random()*3);
    return options[random];
}

choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const urchoice = choice.getAttribute("id");
        playGame(urchoice)
    })
})

let wintrashtalk = () => {
    let random = Math.floor(Math.random()*10);
    if(random==0){
        msg1.innerText = "Guess I’m just built different. Better luck next century!"
    }
    if(random==1){
        msg1.innerText = "Guess I’m just built different. Better luck next century!"
    }
    if(random==2){
        msg1.innerText = "I didn’t choose the winning life; the winning life chose me."
    }
    if(random==3){
        msg1.innerText = "Oops, I did it again. Someone call Britney Spears."
    }
    if(random==4){
        msg1.innerText = "Was that even a challenge? I thought we were just warming up."
    }
    if(random==5){
        msg1.innerText = "Hold on, let me grab a broom because I just swept you!"
    }
    if(random==6){
        msg1.innerText = "You played well. By ‘well,’ I mean ‘poorly,’ but still."
    }
    if(random==7){
        msg1.innerText = "Your strategy had potential... the potential to fail spectacularly."
    }
    if(random==8){
        msg1.innerText = "Winning feels great! But beating you? That’s just priceless."
    }
    if(random==9){
        msg1.innerText = "Don’t be mad—it’s not your fault I was born this amazing."
    }

}

let losetrashtalk = () => {
    let random = Math.floor(Math.random()*10);
    if(random==0){
        msg1.innerText = "Well, enjoy your victory now—my revenge arc starts immediately."
    }
    if(random==1){
        msg1.innerText = "I see you’ve been practicing... too bad it’s all downhill from here."
    }
    if(random==2){
        msg1.innerText = "Congratulations! Winning at rock-paper-scissors must be the highlight of your week."
    }
    if(random==3){
        msg1.innerText = "I let you win to boost your confidence. You're welcome."
    }
    if(random==4){
        msg1.innerText = "You only won because I’m in my training phase. Just wait until my final form."
    }
    if(random==5){
        msg1.innerText = "A lucky win is still a win, I guess. Treasure this moment forever."
    }
    if(random==6){
        msg1.innerText = "I’m just testing strategies. The real game starts now."
    }
    if(random==7){
        msg1.innerText = "You may have won, but I have something you'll never have: humility."
    }
    if(random==8){
        msg1.innerText = "You should frame this victory—it's probably the only one you'll get against me."
    }
    if(random==9){
        msg1.innerText = "Ah, the sweet taste of defeat... for you, next round!"
    }
}

let drawtrashtalk = () => {
    let random = Math.floor(Math.random()*10);
    if(random==0){
        msg1.innerText = "A draw? Looks like the universe couldn’t handle my awesomeness just yet."
    }
    if(random==1){
        msg1.innerText = "Great minds think alike... but let’s see whose mind is greater next round."
    }
    if(random==2){
        msg1.innerText = "We’re evenly matched—for now. Consider this your lucky break."
    }
    if(random==3){
        msg1.innerText = "A tie? Let’s call it my warm-up. You ready to lose for real?"
    }
    if(random==4){
        msg1.innerText = "Looks like we’re both equally... average. Let’s fix that."
    }
    if(random==5){
        msg1.innerText = "You may have tied, but you’ll never match my style."
    }
    if(random==6){
        msg1.innerText = "A draw? I’ll let you have this moral victory before I crush you."
    }
    if(random==7){
        msg1.innerText = "Wow, we’re in sync. Too bad you’re still going down next round."

    }
    if(random==8){
        msg1.innerText = "A tie? Guess that’s the best result you can hope for against me."
    }
    if(random==9){
        msg1.innerText = "We’re even for now, but trust me—I’m just getting started."
    }
}