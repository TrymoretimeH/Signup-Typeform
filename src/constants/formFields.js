const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"Email",
        labelFor:"Email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email",
        msgBlank:"This field cannot be left blank",
        msgEmailInvalid: "Enter a valid email address"
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password",
        msgBlank:"This field cannot be left blank",
        msgPasswordInvalid:"Use 8 or more characters with a mix of letters, numbers and symbols",
        msgContainEmail:"The password should not contain parts of the username"
    }
]

export {loginFields,signupFields}