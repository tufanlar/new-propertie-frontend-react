 /*
    The caret (^)
    This specific symbol has two meanings. In short, 
    when added as the first character in a regex pattern, 
    it means “the beginning of the searched string”, 

    The dollar sign ($)
    This means “the end of the searched string”

    The period or dot (.)
    This matches every single character in the searched string

    The vertical bar or pipe (|)
    This means “or” and it’s used only in combination with other identifiers.

    The asterisk or star (*)
    This is a repetition symbol, 
    stating that the instruction to the left of it might exist 0 or multiple times.

    The plus (+)
    This is basically the same as the star symbol, 
    with the only difference that it expects the instruction 
    it represents to repeat one or more times

    The question mark (?)
    This symbol means “optional” or “the pattern to my left might or might not exists”.

    The curly braces ({ and })
    They are similar to the dot and plus symbols, in that they specify how many times an instruction repeats itself.
    /a{1,3}/ means that a might repeat 1 to 3 times, this matches a, aa and aaa.
    /a{1,}/ means that a repeats one or more times. It is equivalent to +
    /a{0,}/ means that a repeats zero or more times. It is equivalent to *

    The parentheses (( and ))
    They’re used in combination to signify a “group.”

    The square brackets ([ and ])
    They create a group of possible character matchings. 
    If you want to match the letter a or the letter b, you type [ab] or [ba].

    ------ * ------

    The dot symbol . matches any character: 

    The “+” matches 1 or more of the preceding expression.
    It matches 1 or more of the preceding expression.
    It is equivalent to {1,}

    The “*” matches 0 or more of the preceding expression.
    It is equivalent to {0,}

    The “?” matches 0 or 1 of the preceding expression.
    It is equivalent to {0,1}

    All of the following expressions are equivalent:
    [0–9]+
    [0–9]{1,}
    [0–9][0–9]*
    
    All of the following expressions are equivalent:
    [0–9]*
    [0–9]{0,}

    All of the following are equivalent:
    [0–9]?
    [0–9]{0,1}

*/

export class MailError extends Error {} ;
export class PasswordError extends Error {};


export const getLength = (data) => {
    try {
        return data.length;
    } catch(err) {
        return 0;
    }
}

export const checkEmail = (email) => {


    if(getLength(email) === 0)
        throw new MailError("Enter email !");

    if(email.length < 8 )
        throw new MailError("Must be at least eight characters !");

    const re = /^\w+([.-]?\w+)*@\w+([.]?\w+)*(\.\w+)+$/;
    if (!re.test(email)) 
        throw new MailError("Email not valid !");

}

export const checkPassword = (password) => {

    if(getLength(password) === 0)
        throw new PasswordError("Enter password !");

    if(password.length < 8 )
        throw new PasswordError("Must be at least eight characters !");

    const re = /[a-z]+[A-Z]+[0-9]+[-+!]+/;
    if (!re.test(password)) 
        throw new PasswordError("Must have at least one lowercase letter[a-z], uppercase[A-Z], number[0-9] and symbol[-+!] ");
    
    
}