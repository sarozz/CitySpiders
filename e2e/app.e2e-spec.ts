import { CitySpidersPage } from './app.po';

describe('city-spiders App', () => {
  let page: CitySpidersPage;

  beforeEach(() => {
    page = new CitySpidersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
