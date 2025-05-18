import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-enrollment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {
  enrolledCourses: any[] = [];

  constructor(private courseService: CourseService, private userService: UserService) {}

  ngOnInit(): void {
    const email = this.userService.getLoggedInUserEmail();
    if (!email) {
      alert('Please log in to view your enrolled courses.');
      return;
    }

    this.courseService.getEnrolledCourses(email).subscribe({
      next: (data) => {
        this.enrolledCourses = data;
      },
      error: () => {
        alert('Failed to load enrolled courses.');
      }
    });
  }
}

