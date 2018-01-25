import { FormsLecturePage } from './app.po';

describe('forms-lecture App', () => {
  let page: FormsLecturePage;

  beforeEach(() => {
    page = new FormsLecturePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
