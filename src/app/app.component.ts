import { Component } from '@angular/core';
import { Student } from './Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular App5';
  names: string[] =['Mohammed', 'Ali', 'Sami'];
  students: Student[]=[
    {"id":111, "name": "Ahmad", "major": "SW", "grade": 89.99999},
    {"id":222, "name": "Mostafa", "major": "CS", "grade": 79.99999},
    {"id":333, "name": "Ahmad", "major": "Network", "grade": 69.99999}

  ]
}
