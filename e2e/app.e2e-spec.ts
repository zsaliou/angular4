import { PrimericaDemoPage } from './app.po';

describe('primerica-demo App', function() {
  let page: PrimericaDemoPage;

  beforeEach(() => {
    page = new PrimericaDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
