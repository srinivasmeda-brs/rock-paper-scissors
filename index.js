const rockEl = document.getElementById('btn1');
const paperEl = document.getElementById('btn2');
const scissorsEl = document.getElementById('btn3');

const computerEl = document.getElementById('computer');
const userEl = document.getElementById('user'); 




let userCount = 0
let computerCount = 0

function computerPlay() {
    const choices = ['rock', 'paper','scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
    
}

function compareChoices(userChoice) {
    let computerChoice = computerPlay()
    
   
    if  (userChoice === computerChoice){
         return 'It\'s a tie!';
    }else if (userChoice === "rock" &&  computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock"  ||userChoice ===  'scissors' && computerChoice === "paper" ) {
         userCount++ 
         console.log(`user ${userCount}`) 
         userEl.textContent =  `${userCount}`
         return "You Win"   
         
    }else {
        computerCount++
        console.log(`computer ${computerCount}`)
        computerEl.textContent = `${computerCount}`
        return "You Loose"
        
    }
    

}



rockEl.addEventListener('click',function(){
      let res = compareChoices('rock');
      alert(res)
      // console.log(res)
})

paperEl.addEventListener('click',function(){
   let res = compareChoices('paper');
   alert(res)
   // console.log(res)
})

scissorsEl.addEventListener('click',function(){
     let res = compareChoices('scissors')
     alert(res)
    //  console.log(res)
})   
