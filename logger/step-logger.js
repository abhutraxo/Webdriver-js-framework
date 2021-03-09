import allureReporter from '@wdio/allure-reporter'

class StepLogger {
    static stepIdVar = '';
    static id;
    static testCaseId;
    static logMessages = '';
    static debug = process.env.DEBUG || true;

    static set caseId(theCaseId) {
        this.testCaseId = theCaseId;
        allureReporter.addTestId(theCaseId);
        this.id = 1;
        this.logMessages = '';
    }

    static step(stepName) {
        let operation = 'Pre-Condition';
        if (this.testCaseId) {
            operation = 'Step';
        }
        this.commonLogger(operation, stepName);
    }

    static stepId(optionalId = 0) {
        this.id = optionalId > 0 ? optionalId : this.id + 1;
        this.commonLogger('Step Id', this.id.toString());
    }

    static commonLogger(operation, step) {
        const message = `${this.stepIdVar}- *${operation}* - ${step}`;
        if (this.debug) {
            console.log(`${this.testCaseId || ''}${message}`);
        }
        if (!process.env.NO_ALLURE) {
            // tslint:disable-next-line:no-empty
            allureReporter.addStep(message);
        }
        if (this.logger) {
            this.logger.debug(message);
        } else {
            this.logMessages += message;
        }
    }

    static verification(verificationDescription) {
        this.commonLogger('Verification', verificationDescription);
    }

    static takeScreenShot() {
        // tslint:disable-next-line:no-floating-promises
        browser.takeScreenshot().then((png) => {
        if (!process.env.NO_ALLURE) {
            allure.createAttachment('Screenshot', function () {
                return Buffer.from(png, 'base64');
            }, 'image/png')();
        }});
    }

    /**
     * Called for any precondition related step-log shown towards Spec file, never used anywhere else such as validation/helper
     * @param {string} preConditionDescription
     */
    static preCondition(preConditionDescription) {
        this.commonLogger('Pre-Condition', preConditionDescription);
    }

    /**
     * Called for any postCondition related step-log shown towards Spec file
     * @param postConditionDescription
     */
    static postCondition(postConditionDescription) {
        this.commonLogger('Post-Condition', postConditionDescription);
    }

    /**
     * Called wherever a helper/validation method need to have a step/action step significant enough to log
     * @param {string} stepName
     */
    static subStep(stepName) {
        this.commonLogger('Sub-Step', stepName);
    }

    /**
     * Called wherever a helper/validation method need to have a verification step significant enough to log
     * @param {string} verificationDescription
     */
    static subVerification(verificationDescription) {
        this.commonLogger('Sub-Verification', verificationDescription);
    }
}

export default StepLogger;
