var question_answer = [
    { id: 1, question: "question 1", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", order: 1 },
    { id: 2, question: "question 2", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", order: 2 },
    { id: 3, question: "question 3", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", order: 3 },
    { id: 4, question: "question 4", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", order: 4 },
    { id: 5, question: "question 5", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", order: 5 },
    { id: 6, question: "question 6", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", order: 6 },
];

const x = document.getElementById("question");

getQuestion();
function getQuestion(){
    x.innerHTML = '';
    for (let i = 0; i < question_answer.length; i++) {
        x.innerHTML += `<div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading${i}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${i}" aria-expanded="false" aria-controls="flush-collapse${i}">
                ${question_answer[i].question}
            </button>
            </h2>
            <div id="flush-collapse${i}" class="accordion-collapse collapse" aria-labelledby="flush-heading${i}" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"><p> ${question_answer[i].answer}.</p></div>
            </div>
        </div>`
    }
}



function CreateQuestion(question, answer, order) {
    id = Math.floor(question_answer.length + 1);
    question = document.getElementById("CQuestion").value;
    answer = document.getElementById("CAnswer").value;
    order = Math.floor(document.getElementById("COrder").value);
    question_answer.push({ id, question, answer, order });
    getQuestion();
    alert("Create success  !");
}

function UpdateQuestion(id, question, answer, order) {
    id = Math.floor(document.getElementById("UQuestionId").value)
    question = document.getElementById("UQuestion").value;
    answer = document.getElementById("UAnswer").value;
    order = Math.floor(document.getElementById("UOrder").value);
    for (let i = 0; i < question.length; i++) {
        if (question_answer[i].id == id) {
            question_answer[i].question = question;
            question_answer[i].answer = answer;
            question_answer[i].order = order;
        }
    }
    
    if (id > question_answer.length) {
        alert("Update Fail  !");
    } else {
        alert("Update success  !");
    }
    getQuestion();  
}

function DeleteQuestion(id) {
    id = Math.floor(document.getElementById("DQuestionID").value);
    question_answer.splice(id - 1, 1);
    if (id > question_answer.length) {
        alert("Delete Fail  !");
    } else {
        alert("Delete success  !");
    }
    getQuestion();  
}