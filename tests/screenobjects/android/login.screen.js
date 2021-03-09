import AppScreen from '../app.screen';
import { androidIDSelector } from '../../helpers/android-selector'

const SELECTORS = {
  userName: androidIDSelector('yash.tubbr:id/sign_in_username'),
  password: androidIDSelector('yash.tubbr:id/sign_in_password'),
  signInButton: androidIDSelector('yash.tubbr:id/btn_sign_in'),
  ALREADY_MEMBER: androidIDSelector('yash.tubbr:id/do_not_have_account'),
};

class LoginScreen extends AppScreen {
  constructor() {
    super(SELECTORS.LAUNCH_SCREEN)
  }

  get userNameInput () {
    return $(SELECTORS.userName);
  }

  get passwordInput() {
    return $(SELECTORS.password);
  }

  get signInButton() {
    return $(SELECTORS.signInButton);
  }
}

export default new LoginScreen();