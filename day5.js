class Trivia {
    constructor(amount, type) {
        this.amount = amount;
        this.type = type;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const type = document.getElementById('type').value;

    const trivia = new Trivia(amount, type);
    const url = `https://opentdb.com/api.php?amount=${trivia.amount}&type=${trivia.type}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayTrivia(data.results, type);
        })
        .catch(error => console.error('Error:', error));
}

function displayTrivia(questions, type) {
    const container = document.getElementById('trivia-container');
    container.innerHTML = '';

    questions.forEach((question, index) => {
        const card = document.createElement('div');
        card.className = 'card mb-3';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.innerHTML = `Question ${index + 1}`;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerHTML = question.question;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        if (type === 'boolean') {
            const trueLabel = document.createElement('label');
            trueLabel.innerHTML = 'True';
            trueLabel.className = 'mr-2';
            const trueInput = document.createElement('input');
            trueInput.type = 'radio';
            trueInput.name = `question${index}`;
            trueInput.value = 'True';
            trueInput.className = 'mr-3';

            const falseLabel = document.createElement('label');
            falseLabel.innerHTML = 'False';
            falseLabel.className = 'mr-2';
            const falseInput = document.createElement('input');
            falseInput.type = 'radio';
            falseInput.name = `question${index}`;
            falseInput.value = 'False';
            falseInput.className = 'mr-3';

            cardBody.appendChild(trueLabel);
            cardBody.appendChild(trueInput);
            cardBody.appendChild(falseLabel);
            cardBody.appendChild(falseInput);
        } else if (type === 'multiple') {
            const answers = [...question.incorrect_answers, question.correct_answer].sort();
            answers.forEach(answer => {
                const answerLabel = document.createElement('label');
                answerLabel.innerHTML = answer;
                answerLabel.className = 'mr-2';
                const answerInput = document.createElement('input');
                answerInput.type = 'radio';
                answerInput.name = `question${index}`;
                answerInput.value = answer;
                answerInput.className = 'mr-3';

                cardBody.appendChild(answerLabel);
                cardBody.appendChild(answerInput);
            });
        }

        card.appendChild(cardBody);
        container.appendChild(card);
    });

    const submitButton = document.createElement('button');
    submitButton.innerHTML = 'Submit Answers';
    submitButton.className = 'btn btn-success';
    submitButton.onclick = () => checkAnswers(questions);

    container.appendChild(submitButton);

    // Create an element to display the total score
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'results-container';
    container.appendChild(resultsContainer);
}

function checkAnswers(questions) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    let score = 0;

    questions.forEach((question, index) => {
        const card = document.querySelector(`input[name="question${index}"]:checked`).closest('.card-body');
        const selectedInput = document.querySelector(`input[name="question${index}"]:checked`);
        const result = selectedInput && selectedInput.value === question.correct_answer ? 'Correct' : 'Incorrect';

        if (result === 'Correct') {
            score++;
            card.className += ' bg-success text-white';
        } else {
            card.className += ' bg-danger text-white';
        }

        const resultText = document.createElement('p');
        resultText.innerHTML = `Answer: ${result}`;
        card.appendChild(resultText);
    });

    const resultCard = document.createElement('div');
    resultCard.className = 'card mt-3';

    const resultCardBody = document.createElement('div');
    resultCardBody.className = 'card-body';

    const resultCardText = document.createElement('p');
    resultCardText.className = 'card-text';
    resultCardText.innerHTML = `You scored ${score} out of ${questions.length}`;

    resultCardBody.appendChild(resultCardText);
    resultCard.appendChild(resultCardBody);
    resultsContainer.appendChild(resultCard);
}
