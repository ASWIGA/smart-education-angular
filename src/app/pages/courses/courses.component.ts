import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses = [
    {
      id: '1',
      title: 'Web Development',
      description: 'Learn HTML, CSS, JavaScript, and build websites.',
      youtubeLink: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
      materialUrl: 'assets/materials/web-development.pdf'
    },
    {
      id: '2',
      title: 'Angular Framework',
      description: 'Build SPAs using Angular and TypeScript.',
      youtubeLink: 'https://www.youtube.com/watch?v=2OHbjep_WjQ',
      materialUrl: 'assets/materials/angular-framework.pdf'
    },
    {
      id: '3',
      title: 'React.js',
      description: 'Learn modern frontend development with React.',
      youtubeLink: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
      materialUrl: 'assets/materials/react-js.pdf'
    },
    {
      id: '4',
      title: 'Node.js & Express',
      description: 'Build backend applications using Node.js.',
      youtubeLink: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
      materialUrl: 'assets/materials/nodejs-express.pdf'
    },
    {
      id: '5',
      title: 'Python Programming',
      description: 'Master Python for web, data, and AI.',
      youtubeLink: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
      materialUrl: 'assets/materials/python-programming.pdf'
    },
    {
      id: '6',
      title: 'Java Programming',
      description: 'Develop software and apps with Java.',
      youtubeLink: 'https://www.youtube.com/watch?v=grEKMHGYyns',
      materialUrl: 'assets/materials/java-programming.pdf'
    },
    {
      id: '7',
      title: 'Machine Learning',
      description: 'Intro to ML concepts and tools using Python.',
      youtubeLink: 'https://www.youtube.com/watch?v=Gv9_4yMHFhI',
      materialUrl: 'assets/materials/machine-learning.pdf'
    },
    {
      id: '8',
      title: 'Cybersecurity Basics',
      description: 'Learn about network and system security.',
      youtubeLink: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
      materialUrl: 'assets/materials/cybersecurity.pdf'
    },
    {
      id: '9',
      title: 'Cloud Computing',
      description: 'Understand AWS, Azure, and cloud infrastructure.',
      youtubeLink: 'https://www.youtube.com/watch?v=2LaAJq1lB1Q',
      materialUrl: 'assets/materials/cloud-computing.pdf'
    },
    {
      id: '10',
      title: 'Mobile App Development',
      description: 'Create apps using Flutter and React Native.',
      youtubeLink: 'https://www.youtube.com/watch?v=VPvVD8t02U8',
      materialUrl: 'assets/materials/mobile-development.pdf'
    }
  ];

  constructor(
    private courseService: CourseService,
    private router: Router,
    private userService: UserService
  ) {}

  enroll(course: any) {
    const userEmail = this.userService.getLoggedInUserEmail();

    if (!userEmail) {
      alert('Please log in to enroll in courses.');
      return;
    }

    this.courseService.enrollInCourse(course, userEmail).subscribe({
      next: () => {
        alert(`You have successfully enrolled in: ${course.title}`);
        this.router.navigate(['/enrollment']);
      },
      error: () => {
        alert('Enrollment failed. Please try again later.');
      }
    });
  }
}
