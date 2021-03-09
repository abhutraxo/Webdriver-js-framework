import AppScreen from '../app.screen';
import { androidIDSelector } from '../../helpers/android-selector'

const SELECTORS = {
  LAUNCH_SCREEN: androidIDSelector('yash.tubbr:id/action_bar_root'),
  SIGNIN_BUTTON: androidIDSelector('yash.tubbr:id/pre_login_button_sign_in'),
  CREATE_ACCOUNT: androidIDSelector('yash.tubbr:id/pre_login_button_sign_in'),
  ALREADY_MEMBER: androidIDSelector('yash.tubbr:id/do_not_have_account'),
};

// const appString = {
//   accessAcc: 'Access Your Account',
// }

class LandingScreen extends AppScreen {
  constructor() {
    super(SELECTORS.LAUNCH_SCREEN)
  }

  get signInButton () {
    return $(SELECTORS.SIGNIN_BUTTON);
  }

  get createAccountButton() {
    return $(SELECTORS.SIGNIN_BUTTON);
  }

  get alreadyMember() {
    return $(SELECTORS.ALREADY_MEMBER);
  }
}

export default new LandingScreen();