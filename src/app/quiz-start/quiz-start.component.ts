import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-start',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.scss'],
})
export class QuizStartComponent {
  selectedSubjects: string[] = ['Angular Framework'];  // Example subject
  currentSubjectIndex = 0;

  // Dummy questions for demo
  questions: any = {
    'Angular Framework': [
      {
        question: 'What is Angular?',
        options: ['Framework', 'Library', 'Plugin'],
        answer: 'Framework',
      },
      {
        question: 'Which language is used in Angular?',
        options: ['JavaScript', 'TypeScript', 'Python'],
        answer: 'TypeScript',
      },
    ]
  };

  selectedSubject: string = 'Angular Framework'; // Preselected
  quizStarted = false;
  currentQuestionIndex = 0;
  userAnswers: any = {};

  startQuiz() {
    this.quizStarted = true;
    this.currentQuestionIndex = 0;
  }

  submitAnswer(subject: string, questionIndex: number, selectedOption: string) {
    if (!this.userAnswers[subject]) {
      this.userAnswers[subject] = {};
    }
    this.userAnswers[subject][questionIndex] = selectedOption;
  }

  nextQuestion() {
    const totalQuestions = this.questions[this.selectedSubjects[this.currentSubjectIndex]].length;
    if (this.currentQuestionIndex < totalQuestions - 1) {
      this.currentQuestionIndex++;
    } else {
      alert('Quiz Completed!');
    }
  }
}
