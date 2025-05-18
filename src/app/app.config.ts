import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';


import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { EnrollmentComponent } from './pages/enrollment/enrollment.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'enrollment', component: EnrollmentComponent },
 
];

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient() // ✅ moved here
  ]
};




