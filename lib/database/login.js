export const signinUserWithEmailAndPassword = ({email, password, registerPending, registerSuccess, registerFailed}) => {
    registerPending()
    auth.signInWithEmailAndPassword(email, password)
    .then( result => {
        registerSuccess()
    })
    .catch(function(error) {
        // Handle Errors here.
        registerFailed()
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        } 
    })
}