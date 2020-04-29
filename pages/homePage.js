let homepage = function(){

    let enterFirstNumber = element(by.model('first'));
    let enterSecondNumber = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    //create functions for actions
    this.getUrl =function(url){
        browser.get(url);
    };

    this.enterFNumber = function(firstNum){
        enterFirstNumber.sendKeys(firstNum);
    };

    this.enterSecondNumber = function(secondNum){
        enterSecondNumber.sendKeys(secondNum);
    };

    this.goButton = function(){
        goButton.click();
    };

    this.verifyResult = function(result)
    {
        let output = element(by.cssContainingText('.ng-binding',result));

        expect(output.getText()).toEqual(result);
        browser.sleep(5000);
    };
};
    module.exports = new homepage();