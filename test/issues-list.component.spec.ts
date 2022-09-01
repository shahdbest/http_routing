import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { IssuesListComponent } from '../src/app/issues-list/issues-list.component';
import { IssueService } from 'src/app/services/issue.service';
import { of } from 'rxjs';

describe('IssuesListComponent', () => {
  let component: IssuesListComponent;
  let fixture: ComponentFixture<IssuesListComponent>;
  let issueService: IssueService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesListComponent ],
      imports: [HttpClientModule],
      providers: [ IssueService]

    })
    .compileComponents();
    issueService = TestBed.get(IssueService);
    spyOn(issueService, 'deleteIssue').and.returnValue(of(''));
    spyOn(issueService, 'getIssues').and.returnValue(of(''));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test to check ngOnInit method existence
  it('ngOnInit() should exists', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

     // test to check deleteIssue is calling IssueService or not
  it('deleteIssue() should call IssueService to delete an Issue', () => {
      component.deleteIssue(1);
      expect(issueService.deleteIssue).toHaveBeenCalled();
    });

  // test to check ngOnInit is calling IssueService or not
  it('ngOnInit() should call IssueService to ga Iet all Issues', () => {
    component.ngOnInit();
    expect(issueService.getIssues).toHaveBeenCalled();
  });
});
