let currentQuestion = 0;


const questions = [

    {
        question: "What do I love most about you? ❤️",

        options: [
            "Your Smile 😊",
            "Your Eyes 👀",
            "Everything About You ❤️"
        ],

        answer: 2
    },


    {
        question: "What is my favorite memory with you? 💕",

        options: [
            "Our first meeting 🌸",
            "Our first trip ✈️",
            "Every moment with you ❤️"
        ],

        answer: 2
    },


    {
        question: "What makes me happiest? 💗",

        options: [
            "Eating food 🍕",
            "Watching movies 🎬",
            "Spending time with you 🥰"
        ],

        answer: 2
    },


    {
        question: "If I could go anywhere with you, where would I go? 🌎",

        options: [
            "Paris 🇫🇷",
            "Maldives 🏝️",
            "Anywhere, as long as you're with me ❤️"
        ],

        answer: 2
    },


    {
        question: "How much do I love you? 💖",

        options: [
            "A little 😊",
            "A lot 💕",
            "More than words can explain ❤️"
        ],

        answer: 2
    }

];



/* ================= PAGE SYSTEM ================= */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {

        page.classList.remove("active");

    });


    document.getElementById(pageId)
        .classList.add("active");

}



/* ================= STORY ================= */

function startStory() {

    createHeartBurst();

    setTimeout(() => {

        showPage("photos");

    }, 400);

}



function startQuiz() {

    currentQuestion = 0;

    showQuestion();

    createHeartBurst();

    showPage("quiz");

}



function showQuestion() {

    const questionData = questions[currentQuestion];


    // Display question

    document.getElementById("question").innerText =
        questionData.question;


    // Display question number

    document.getElementById("questionNumber").innerText =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    // Get options container

    const optionsContainer =
        document.getElementById("options");


    // Remove old options

    optionsContainer.innerHTML = "";


    // Create new buttons

    questionData.options.forEach((option, index) => {

        const button = document.createElement("button");


        button.innerText = option;


        button.onclick = function () {

            answer(index);

        };


        optionsContainer.appendChild(button);

    });

}


function answer() {

    createHeartBurst();

    currentQuestion++;


    if (currentQuestion < questions.length) {

        setTimeout(() => {

            showQuestion();

        }, 300);

    } else {

        setTimeout(() => {

            showPage("result");

        }, 500);

    }

}



function showLetter() {

    createHeartBurst();

    setTimeout(() => {

        showPage("letter");

    }, 400);

}



/* ================= FLOATING HEARTS ================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");


    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝",
        "✨"
    ];


    heart.innerText =
        symbols[Math.floor(Math.random() * symbols.length)];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";


    const duration =
        5 + Math.random() * 7;


    heart.style.animationDuration =
        duration + "s";


    document
        .querySelector(".hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}



/* Create hearts continuously */

setInterval(createHeart, 500);



/* ================= HEART BURST ================= */

function createHeartBurst() {

    for (let i = 0; i < 15; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        heart.innerText = "❤️";


        heart.style.left =
            (45 + Math.random() * 10) + "%";


        heart.style.bottom =
            "40%";


        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";


        heart.style.animationDuration =
            (2 + Math.random() * 2) + "s";


        document
            .querySelector(".hearts")
            .appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 4000);

    }

}