import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';

// Define routes
const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  // Add other routes here
  { path: '', redirectTo: '/signup', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // No need to declare standalone components like NavbarComponent if using Angular 15+ standalone
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NavbarComponent // Standalone component import
  ],
  providers: [],
  bootstrap: [NavbarComponent] // Or your AppComponent if you have one
})
export class AppModule { }