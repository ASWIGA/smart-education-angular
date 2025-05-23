import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/courses`);
  }

  enrollInCourse(course: any, email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/enroll`, { course, email });
  }

  getEnrolledCourses(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/enrollments?email=${email}`);
  }
}
