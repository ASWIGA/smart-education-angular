import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component'; // Make sure to add the relevant component here

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,  // Add CoursesComponent to declarations
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // <-- Add HttpClientModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
