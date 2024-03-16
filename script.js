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
        answers:["729479761920","74284328","93098137","x","a number"],
        correctanswers:[0,3,4]
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

        answers.appendChild(input)
        answers.appendChild(label)
    }
    document.querySelector("body").appendChild(tempcontent)
}

createquestion(4)