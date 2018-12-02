

var questions = [{
    question: "How do you say 'Please' in Spanish?",
    choices: ["Ciao", "Por favor", "Xiexie (谢谢)", "Prosze"],
    correctAnswer: 1
}, {
    question: "How do you say 'Where are you from' in Chinese?",
    choices: ["Nishinaguoren (你是哪国人？)", "De donde eres?", "...Nun odi imnikka?(...는 어디 입니까?)", "Gdzie jest?"],
    correctAnswer: 0
}, {
    question: "How do you say 'Okay' in Polish?",
    choices: ["Bien", "Prosto", "Spoko", "Pa"],
    correctAnswer: 2
}, {
    question: "How do you say 'Can I see the menu' in Korean?",
    choices: ["Eolmaimnikka (얼마입니까?)", "Keyi-maidan (可以买单)", "Lai-ge-caidan (来个菜单)", "Mehnyu juseyo (메뉴 주세요)"],
    correctAnswer: 3
}, {
    question: "How do you say 'What do I know?' in Spanish?",
    choices: ["seguir recto", "nishuoshenmehuaya (你说什么话呀？)", "Como conecemos", "Que se yo"],
    correctAnswer: 3
}, {
    question: "How do you say 'Excuse me?' in Korean?",
    choices: ["sillyehamnida (실례합니다)", "qingwen (请问)", "hoel (헐)", "Pomocy!"],
    correctAnswer: 0
}, {
    question: "How do you say 'How are you?' in Polish?",
    choices: ["Eolmaimnikka (얼마입니까?)", "Kurcze", "Jak się masz?", "Que tal?"],
    correctAnswer: 2
}, {
    question: "How do you say 'I don't understand' in Chinese?",
    choices: ["No entiendo", "Tingbudong (听不懂)", "Nie rozumiem", "Manzou (慢走)"],
    correctAnswer: 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {

                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();

                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}
