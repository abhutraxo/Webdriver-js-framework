import LoginScreen from '../../../screenobjects/android/login.screen';
import LandingScreen from '../../../screenobjects/android/landing.screen';
import StepLogger from '../../../../logger/step-logger';
import { SuiteNames } from '../../suite-names';

describe(SuiteNames.endTwoEndSuite, () => {
  beforeEach(() => {
    LandingScreen.waitForIsShown(true);
  });

  it('Sign In Into TUBBR Application ', () => {
    StepLogger.caseId = 1111111;
    StepLogger.stepId(1);
    StepLogger.step('Go to Landing Screen');
    LandingScreen.alreadyMember.isDisplayed();
    LandingScreen.signInButton.isDisplayed();
    LandingScreen.createAccountButton.isDisplayed();
    StepLogger.verification('Verify Landing screen');
    const txt = LandingScreen.alreadyMember.getText();
    expect(txt).toEqual('Already a member');

    StepLogger.stepId(2);
    StepLogger.step('Click Sign In Button');
    LandingScreen.signInButton.click(); 
    StepLogger.verification('Sign In Screen open');
    // LoginScreen.waitForIsShown(true);
    LoginScreen.passwordInput.isDisplayed();

    StepLogger.stepId(3);
    StepLogger.step('Enter user name and password');
    LoginScreen.userNameInput.setValue('ashish');
    LoginScreen.passwordInput.setValue('Ashish09');
    LoginScreen.signInButton.click();
  

    LandingScreen.createAccountButton.isDisplayed();

  });
});