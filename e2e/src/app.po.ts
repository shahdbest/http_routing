import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }


  navigateToAddIssue() {
    return browser.get('/addissue');
  }

  getRouterOutlet(): ElementFinder {
    return element(by.tagName('router-outlet'));
  }}
