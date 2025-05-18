import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';  // Import FooterComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],  // Add FooterComponent to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
