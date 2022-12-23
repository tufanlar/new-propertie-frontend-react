import { useRef } from 'react';
import Reaptcha from 'reaptcha';

export default function useRecaptcha({taskFn}) {


    const captcha  = useRef(null);
    
    
    const onVerify = async (recaptchaResponse) => {
        captcha.current.reset();
        console.log("Task işleniyor..");
        await taskFn(recaptchaResponse);
    }

    const onLoad = () => {
    }
   
    const onError = () => {
        console.log("Recapcha onError occured!");
        captcha.current.reset();
        taskFn(null);
        
    };

    const onExpire = () => {
        console.log("Recapcha onExpire occured!");
        captcha.current.reset();
        taskFn(null);
    };

    const ReCAPTHA = () =>{
        return (
            <Reaptcha
                ref={captcha}
                sitekey={process.env.REACT_APP_PROPERTIE_RECAPTCHA_SITE_KEY}
                onVerify={onVerify}
                onLoad={onLoad}
                onError={onError}
                onExpire={onExpire}
                size="invisible"
            />
        );
    };

    return {
        captcha,
        ReCAPTHA
    }

}


// https://github.com/react-hook-form/react-hook-form/issues/1001