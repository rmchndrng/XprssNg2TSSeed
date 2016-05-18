import { Component } from '@angular/core';

import {Student} from '../common/models/student'

@Component({
  moduleId: module.id,
  selector: 'client-app',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css']
})
export class ClientAppComponent {
  title = 'client works!';
  constructor() {
    var testStudent = new Student();
    testStudent.Age = 29;
    testStudent.Name = "Ram";
    testStudent.Sex = "M";
  }
}
