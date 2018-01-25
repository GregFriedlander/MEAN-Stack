import { RegistrationAssignmentPage } from './app.po';

describe('registration-assignment App', () => {
  let page: RegistrationAssignmentPage;

  beforeEach(() => {
    page = new RegistrationAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
