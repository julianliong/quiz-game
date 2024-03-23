let question = document.getElementById("question-temp")
let questions = [
    {
        statement:"Do bears drink water?",
        answers:["yes","no"],
        correctanswers:0
    },

    {
        statement:"Are french fries made of potatoes?",
        answers:["yes","no"],
        correctanswers:0
    },

    {
        statement:"What is 5x9x8x7x6x76x872x728",
        answers:["729479761930","74284328","93098137","x","2882387"],
        correctanswers:3
    },

    {
        statement:"What is the highest mountain on earth?",
        answers:["Mount Everest","Mount Fuji","Mount Rainier","Mount Olympus"],
        correctanswers:0
    },

    {
        statement:"Who composed Moonlight Sonota?",
        answers:["Mozart","Beethoven","Bach","Chopin"],
        correctanswers:1
    },

    {
        statement:"What is the third element of the periodic table?",
        answers:["Hydrogen","Oxygen","Lithium","Potassium"],
        correctanswers:2
    }
]
let score = 0
function deletequestion(){
    let questions = document.querySelector(".text")
    let answers = document.querySelector(".answers")
    
    if(answers !== null || questions !== null){
        answers.remove()
        questions.remove()
    }
}

let questionnumber = 0
function nextquestion(){
    let selectedanswer = document.querySelector("input[type='radio']:checked")
    if (selectedanswer === null){
        alert("Please select an answer before continuing.")
        return
    }
    if (selectedanswer.hasAttribute("correct")){
        score ++
    }
    deletequestion()
    questionnumber += 1
    if (questionnumber >= questions.length){
        let scoretext = document.querySelector(".score")
        scoretext.classList.remove("score")
        scoretext.innerText = `Your score is ${score/questionnumber*100}%`
    }
    else {
        createquestion(questionnumber)
    }
}

function createquestion(questionnum){
    let singlequestion = questions[questionnum]
    let template = document.getElementById("question-temp")
    let tempcontent = template.content.cloneNode(true)
    let statement = tempcontent.querySelector(".text")
    statement.innerText = singlequestion.statement
    statement.setAttribute("potatobanana","bananapotatoes")
    let answers = tempcontent.querySelector(".answers")
    for(let i = 0; i<singlequestion.answers.length; i++){
        let answer = singlequestion.answers[i]
        let label = document.createElement("label")
        let input = document.createElement("input")
        label.innerText = answer
        input.type = "radio"
        input.name = statement.innerText
        
        if (singlequestion.correctanswers == i){
            input.setAttribute("correct",true)
        }
        answers.appendChild(input)
        answers.appendChild(label)
    }
    document.querySelector("body").appendChild(tempcontent)
}

createquestion(questionnumber)