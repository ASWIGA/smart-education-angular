import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  // Define subjects
  subjects = [
    { id: 1, title: 'Web Development' },
    { id: 2, title: 'Angular Framework' },
    { id: 3, title: 'React.js' },
    { id: 4, title: 'Node.js & Express' },
    { id: 5, title: 'Python Programming' },
    { id: 6, title: 'Java Programming' },
    { id: 7, title: 'Machine Learning' },
    { id: 8, title: 'Cybersecurity Basics' },
    { id: 9, title: 'Cloud Computing' },
    { id: 10, title: 'Mobile App Development' },
  ];

  // Define questions for each subject
  questions = {
    'Web Development': [
      { question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'HighText Markup Language'], answer: 'HyperText Markup Language' },
      { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Cascading Styling Sheets'], answer: 'Cascading Style Sheets' },
      { question: 'Which of these is a JavaScript framework?', options: ['Angular', 'Bootstrap'], answer: 'Angular' },
      { question: 'Which of these is a JavaScript library?', options: ['React', 'Vue'], answer: 'React' },
      { question: 'What is the purpose of the alt attribute in an image tag?', options: ['To provide alternative text', 'To provide an alternative image'], answer: 'To provide alternative text' },
    ],
    'Angular Framework': [
      { question: 'What is Angular?', options: ['A JavaScript library', 'A TypeScript-based framework'], answer: 'A TypeScript-based framework' },
      { question: 'What command is used to create a new Angular project?', options: ['ng new', 'ng init'], answer: 'ng new' },
      { question: 'What is RxJS used for in Angular?', options: ['Reactive programming', 'Routing'], answer: 'Reactive programming' },
      { question: 'Which of these is an Angular module?', options: ['HttpClientModule', 'jQuery'], answer: 'HttpClientModule' },
      { question: 'What is a component in Angular?', options: ['A directive', 'A building block of UI'], answer: 'A building block of UI' },
    ],
    // Add questions for other subjects similarly
  };

  selectedSubjects: string[] = []; // Array to store selected subjects

  constructor(private router: Router) {}

  toggleSubject(subject: string) {
    const index = this.selectedSubjects.indexOf(subject);
    if (index === -1) {
      // If subject is not selected, add it to the list
      this.selectedSubjects.push(subject);
    } else {
      // If subject is selected, remove it
      this.selectedSubjects.splice(index, 1);
    }
  }

  startQuiz() {
    if (this.selectedSubjects.length === 5) {
      // Navigate to the quiz start page with selected subjects
      this.router.navigate(['/quiz/start'], {
        state: { selectedSubjects: this.selectedSubjects, questions: this.questions },
      });
    } else {
      alert('Please select exactly 5 subjects to proceed.');
    }
  }
}

