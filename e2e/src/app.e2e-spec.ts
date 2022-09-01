import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should load issue component on base url', () => {
    browser.get('/');
    element(by.linkText('Add Issue')).click();
    expect(browser.getCurrentUrl())
      .toEqual(browser.baseUrl + 'addissue');
  });

  it('should load issue component view on clicking add issue and verify the url', () => {
    browser.get('/addissue');
    element(by.linkText('Add Issue')).click();
    expect(browser.getCurrentUrl())
      .toEqual(browser.baseUrl + 'addissue');
  });

  it('should contain <router-outlet>', () => {
    page.navigateTo();
    expect(page.getRouterOutlet).toBeTruthy('<router-outlet> should exist in app.component.html');
  });

  // given empty title to form
  it('should check form if title is empty', async () => {
    page.navigateToAddIssue();
    element(by.css('input[type="text"]')).sendKeys();
    element(by.css('.btn')).click();
    expect(element(by.css('.alert')).getText()).toBe('Title and Description should not be empty!!! Please verify details');
  });

  // given empty description to form
  it('should check form if description is empty', async () => {
    page.navigateToAddIssue();
    element(by.css('textarea')).sendKeys();
    element(by.css('.btn')).click();
    expect(element(by.css('.alert')).getText()).toBe('Title and Description should not be empty!!! Please verify details');
  });

  // given valid title to form and empty description
  it('should check form is valid or not', async () => {
    page.navigateToAddIssue();
    element(by.css('input[type="text"]')).sendKeys('test');
    element(by.css('.btn')).click();
    expect(element(by.css('.alert')).getText()).toBe('Title and Description should not be empty!!! Please verify details');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
