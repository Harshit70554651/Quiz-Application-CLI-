
import readline from 'readline';
import chalk from 'chalk';

// Quiz Questions
const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "Which is the national animal of India?",
    options: ["Lion", "Elephant", "Bengal Tiger", "Leopard"],
    answer: "Bengal Tiger"
  },
  {
    question: "Who is known as the Father of the Nation in India?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "B. R. Ambedkar"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is the largest ocean in the world?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "Who wrote the Indian national anthem?",
    options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Premchand"],
    answer: "Rabindranath Tagore"
  },
  {
    question: "Which is the smallest state in India by area?",
    options: ["Sikkim", "Tripura", "Goa", "Manipur"],
    answer: "Goa"
  },
  {
    question: "How many colours are there in the Indian national flag?",
    options: ["Two", "Three", "Four", "Five"],
    answer: "Three"
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    answer: "Carbon dioxide"
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Dollar"],
    answer: "Yen"
  },
  {
    question: "Who was the first Prime Minister of India?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Lal Bahadur Shastri", "Rajendra Prasad"],
    answer: "Jawaharlal Nehru"
  },
  {
    question: "Which is the largest continent in the world?",
    options: ["Africa", "Europe", "Asia", "North America"],
    answer: "Asia"
  },
  {
    question: "How many days are there in a leap year?",
    options: ["364", "365", "366", "367"],
    answer: "366"
  },
  {
    question: "Which organ pumps blood throughout the human body?",
    options: ["Lungs", "Brain", "Heart", "Kidneys"],
    answer: "Heart"
  },
  {
    question: "What is the national flower of India?",
    options: ["Rose", "Sunflower", "Lotus", "Jasmine"],
    answer: "Lotus"
  },
  {
    question: "Which is the highest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Nanda Devi"],
    answer: "Mount Everest"
  },
  {
    question: "Which country is famous for the Great Wall?",
    options: ["India", "Japan", "China", "Thailand"],
    answer: "China"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Fe", "Go"],
    answer: "Au"
  },
  {
    question: "How many players are there in a cricket team on the field?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    question: "Which is the national bird of India?",
    options: ["Parrot", "Peacock", "Eagle", "Swan"],
    answer: "Peacock"
  }
];

// CLI Setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let score = 0;
let index = 0;

console.log(
  chalk.yellow.bold('\nWelcome to the Quiz Application!\n')
);

function askQuestion() {
if (index >= questions.length) {
  console.log(chalk.yellow.bold("\nQuiz Completed!"));
  console.log(chalk.green(`Your Final Score: ${score}/${questions.length}`));
  console.log(chalk.cyan(`Correct Answers: ${score}`));
  console.log(chalk.red(`Wrong Answers: ${questions.length - score}`));

  rl.close();
  return;
}

  const q = questions[index];

  console.log(chalk.blue(`\nQ${index + 1}: ${q.question}`));

  q.options.forEach((option, i) => {
    console.log(chalk.green(`${i + 1}. ${option}`));
  });

  rl.question(chalk.cyan('Your Answer (1-4): '), (answer) => {
    const userAnswer = Number(answer);

    if (
      Number.isInteger(userAnswer) &&
      userAnswer >= 1 &&
      userAnswer <= q.options.length
    ) {
      if (q.options[userAnswer - 1] === q.answer) {
        console.log(chalk.green('Correct Answer!'));
        score++;
      } else {
        console.log(
          chalk.red(`Wrong! Correct Answer: ${q.answer}`)
        );
      }
    } else {
      console.log(chalk.red('Invalid option!'));
    }

    index++;
    askQuestion();
  });

  
}

askQuestion()
