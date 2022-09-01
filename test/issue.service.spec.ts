import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IssueService } from '../src/app/services/issue.service';
import { Issue } from 'src/app/models/Issue';
import { Observable } from 'rxjs';

const issues: Issue[] = [
  {
    title: 'Issue in pom.xml',
    description: 'Avoid redundancy of dependencies'
  },
  {
    title: 'Implementaion in testing',
    description: 'Test all the scenarios'
  }
];
describe('IssueService', () => {
  let httpMock: HttpTestingController;
  let service: IssueService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IssueService],
    });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(IssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // testing service for addIssue method
  it('addIssue() method should add issue', () => {
      const issue: Issue = {
        title: 'testin',
        description: 'This is description of testin issue'
      };
      // We call the service
      service.addIssue(issue).subscribe(data => {
        expect(data.data.length).toBe(2);
        expect(data.data).toEqual(issues);
      });

      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/issues');
      expect(req.request.method).toEqual('POST');
      expect(req.request.headers.get('Content-Type')).toEqual('application/json');
      // Then we set the fake data to be returned by the mock
      req.flush({data: issues});
      });

  // testing service for getIssues method
  it('getIssues() method should get all issues', () => {
    // We call the service
    service.getIssues().subscribe(data => {
      expect(data.data.length).toBe(2);
      expect(data.data).toEqual(issues);
    });

    // We set the expectations for the HttpClient mock
    const req = httpMock.expectOne('http://localhost:3000/issues');
    expect(req.request.method).toEqual('GET');
    // Then we set the fake data to be returned by the mock
    req.flush({data: issues});
    });

    // testing service for deleteIssue method
  it('deleteIssue() method should delete issue', () => {
    // We call the service
    service.deleteIssue(1).subscribe();

    // We set the expectations for the HttpClient mock
    const req = httpMock.expectOne('http://localhost:3000/issues/1/');
    expect(req.request.method).toEqual('DELETE');
    // Then we set the fake data to be returned by the mock
    req.flush({data: issues});
    });

  afterEach( () => {
       httpMock.verify();
    });
});
