const {Builder, By, until} = require('selenium-webdriver');
const {expect} = require('chai');

describe('Google Search Test', function() {
  this.timeout(30000);
  let driver;
  
  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });
  after(async () => {
    await driver.quit();
  });

  it('should search in Google', async () => {
    await driver.get('https://www.google.com');
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Jenkins Selenium React');
    await searchBox.submit();
    await driver.wait(until.titleContains('Jenkins'), 5000);
    const title = await driver.getTitle();
    expect(title).to.include('Jenkins');
  });
});
