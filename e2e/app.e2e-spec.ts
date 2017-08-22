import { RomeosfuelPage } from './app.po';

describe('romeosfuel App', () => {
  let page: RomeosfuelPage;

  beforeEach(() => {
    page = new RomeosfuelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
