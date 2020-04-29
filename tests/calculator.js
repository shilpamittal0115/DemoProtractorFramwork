let homepage = require('../pages/homePage');

describe('demo calculator test', function () {

    it('additional test', function () {

       
        homepage.getUrl('http://juliemr.github.io/protractor-demo/');
        homepage.enterFNumber('3');
        homepage.enterSecondNumber('4');
        homepage.goButton();
        homepage.verifyResult(7);
        browser.sleep(3000);
         //browser.get('http://juliemr.github.io/protractor-demo/');
        //element(by.model('first')).sendKeys('2');
        //element(by.model('second')).sendKeys('8');
        //element(by.css('[ng-click="doAddition()"]')).click();

        // let result = element(by.cssContainingText('.ng-binding','10'));

        // expect(result.getText()).toEqual(5);
       
        //var input = element(by.model('first')).sendKeys('2');
        // input.sendKeys('123');
        //expect(input.getAttribute('value')).toBe('Foo123');


    })

});