
export const executeRecaptcha =  (errorRef, executeFn) => {
    try{
      const now = new Date();
      const current = now.getHours() + ':' + now.getMinutes();
      errorRef.current.innerHTML = `${current} Executing...`; 
      window.grecaptcha.ready(function(){
        executeFn();
      });
    } catch(err){
      console.log(err);
    }
}