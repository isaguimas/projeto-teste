import { ProjetoTestePage } from './app.po';

describe('projeto-teste App', () => {
  let page: ProjetoTestePage;

  beforeEach(() => {
    page = new ProjetoTestePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
