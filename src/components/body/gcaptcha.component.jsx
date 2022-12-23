import React from 'react'
import Reaptcha from 'reaptcha';

function GCaptcha({isExecute, taskFn}) {

    let captcha = null;
    
    
    const onVerify = recaptchaResponse => {
        taskFn(recaptchaResponse);
        captcha.reset();
    }

    const onLoad = () => {

    }

    const execute = () => {
        console.log("captcha", captcha);
        console.log("Recapcha execute started!");
        captcha.execute();
    }
    
    const onError = () => {
        console.log("Recapcha onError occured!");
        taskFn(null);
        captcha.reset();
    };

    const onExpire = () => {
        console.log("Recapcha onExpire occured!");
        taskFn(null);
        captcha.reset();
    };

    return (
        <Reaptcha
                ref={e => (captcha = e)}
                sitekey={process.env.REACT_APP_PROPERTIE_RECAPTCHA_SITE_KEY}
                onVerify={onVerify}
                onLoad={onLoad}
                onError={onError}
                onExpire={onExpire}
                size="invisible"
            />
  )
}

export default GCaptcha;