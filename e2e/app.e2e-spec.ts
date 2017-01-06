import { NgFormValidationPage } from './app.po';

describe('ng-form-validation App', function() {
  let page: NgFormValidationPage;

  beforeEach(() => {
    page = new NgFormValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
