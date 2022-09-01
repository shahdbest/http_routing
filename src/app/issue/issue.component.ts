import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  form;

  // message to be display if Issue added or not
  message = '';

  // Form is created in html file and write code to make it functional using FormBuilder
  // Write logic to make all fields as mandatory

  constructor() {}

  ngOnInit() {
  }

  // Implement onSubmit method to save a Issue, verify form is valid or not
  // Display message 'Title and Description should not be empty!!! Please verify details' if form is invalid
  // Display message 'Failed to add Issue!!' while error handling
  // Display message 'Issue added' if Issue is added
  onSubmit() {
  }
  // clearForm method is to reset the form after submitting
  clearForm() {
  }

}
