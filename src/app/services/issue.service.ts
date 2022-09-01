import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class IssueService {

  constructor() { }

  // Implement addIssue method using HttpClient for a saving a Issue details
  addIssue(issue): Observable<any> {
  }

  getIssues(): Observable<any> {
  }

  // Implement deleteIssue method to delete a issue by id
  deleteIssue(id: any): Observable<any> {
  }
}
