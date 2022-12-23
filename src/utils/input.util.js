
export const INPUT_CLASSNAME = "w-full py-3 input";
export const INPUT_ERR_CLASSNAME = `${INPUT_CLASSNAME}-error`;


export const EMAIL_PLACEHOLDER = "Email";
export const PASSWORD_PLACEHOLDER = "Password";
export const NAMESURNAME_PLACEHOLDER = "Name Surname";
  
export const clearErrors = (errorRef, inputRef, placeholder) => {
    errorRef.current.innerHTML = '';
    inputRef.current.value = '';
    inputRef.current.placeholder = placeholder;
    inputRef.current.className = INPUT_CLASSNAME;
};

export const setUserError = (inputRef, message) => {
    inputRef.current.value = '';
    inputRef.current.placeholder = message;
    inputRef.current.className = INPUT_ERR_CLASSNAME;
};

