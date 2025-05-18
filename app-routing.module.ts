import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { EnrollmentComponent } from './pages/enrollment/enrollment.component';  // Correct import here
import { ContactComponent } from './pages/contact/contact.component';
import { QuizStartComponent } from './pages/quiz-start/quiz-start.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quiz/start', component: QuizStartComponent },
  { path: 'enrollment', component: EnrollmentComponent },  // This is the correct usage
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
