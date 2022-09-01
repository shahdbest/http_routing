import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {


  constructor() { }

  // Write logic to get all issues from IssueService
  ngOnInit() {
  }

  // Implement deleteIssue method to delete the issue
  deleteIssue() {
  }

}
