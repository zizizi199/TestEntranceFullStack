const data = [ 
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What team won the 2016 MLS Cup?",
        "correct_answer": "Seattle Sounders",
        "incorrect_answers": [
            "Colorado Rapids",
            "Toronto FC",
            "Montreal Impact"
        ]
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "When was the first official international game played?",
        "correct_answer": "1872",
        "incorrect_answers": [
            "1880",
            "1863",
            "1865"
        ]
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which player holds the NHL record of 2,857 points?",
        "correct_answer": "Wayne Gretzky",
        "incorrect_answers": [
            "Mario Lemieux ",
            "Sidney Crosby",
            "Gordie Howe"
        ]
        },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "&quot;Stadium of Light&quot; is the home stadium for which soccer team?",
        "correct_answer": "Sunderland FC",
        "incorrect_answers": [
            "Barcelona FC",
            "Paris Saints-Germain",
            "Manchester United"
        ]
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won the UEFA Champions League in 2016?",
        "correct_answer": "Real Madrid C.F.",
        "incorrect_answers": [
            "FC Bayern Munich",
            "Atletico Madrid",
            "Manchester City F.C."
            ]
        }
];


const questionText =document.querySelector('.question-text');
const answer =document.querySelector('.answer');
const point = document.querySelector('point')
const scorePlayer = document.querySelector('.score')
let count =0;
let availableQuestion=[];
let availableAnswer=[];
let scoreP =0;
let currentQuestion=[];



function setAvailableQuestion(){
    for( let i=0;i<data.length;i++){
        availableQuestion.push(data[i])
    }
    // console.log(availableQuestion);

}

function display(){
    currentQuestion =  availableQuestion[(Math.floor(Math.random() * availableQuestion.length))]
    questionText.innerHTML = currentQuestion.question;
    
    const passQuestion = availableQuestion.indexOf(currentQuestion)
    availableQuestion.splice(passQuestion,1)
    // console.log(currentQuestion);
    // console.log(availableQuestion);
    
    let currentAnswer=[]
    currentAnswer = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer);
    console.log(currentAnswer);
    for(let i=0;i<currentAnswer.length;i++){
        availableAnswer.push(i)
    }
  
    answer.innerHTML='';

    for(let i=0;i<currentAnswer.length;i++){
        const answerIndex = availableAnswer[(Math.floor(Math.random() * availableAnswer.length))]
        const passAnswer = availableAnswer.indexOf(answerIndex)
        availableAnswer.splice(passAnswer,1)
        console.log(answerIndex)
        console.log(availableAnswer);

        const option =document.createElement('button')
        option.innerHTML=currentAnswer[i]
        option.value=currentAnswer[i]
        option.className ='option'
        answer.appendChild(option);
        option.setAttribute('onclick','getResult(this)')
       

    }   
    
}
function getResult(element){
    const value = element.value;
    if(value === currentQuestion.correct_answer){
        alert('Đúng')
        scoreP++;
        scorePlayer.innerHTML = scoreP;
    } else{
        alert('Sai')
    }
    
}




function next(){
    if(count == data.length){
        alert('game over')
        

    }else(display())
}

window.onload= function(){
    setAvailableQuestion();
    display()
}
