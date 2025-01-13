import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = 'MeetApp';
  users: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: Response => this.users = Response,
      error: err => console.error('Error: ' + err),
      complete: () => console.log('Req has Completed') 
    })
    }
}
