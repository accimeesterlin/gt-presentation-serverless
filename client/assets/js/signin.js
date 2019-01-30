


$('button[type="submit"]').on('click', function (event) {
    event.preventDefault();

    const email = $('#email').val();
    const password = $('#password').val();

    /*
        ClassName: AmazonCognitoIdentity.CognitoUser
        Params: { Username: 'email', Pool: userPool }
    */
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser();

    /*
        ClassName: AmazonCognitoIdentity.AuthenticationDetails
        Params: { Username: 'email', Password: 'password' }
    */
    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails();


    /*
        Method: authenticateUser
        Param1: authenticationDetails
        Param1: { onSuccess, onFailure, mfaRequired }

    */
    cognitoUser.authenticateUser();

});



function onSuccess(result) {
    log('Result: ', result);
    window.location.href = 'dashboard.html';

    if (result.idToken.jwtToken) {
        localStorage.setItem('idToken', result.idToken.jwtToken);
    }
}


function onFailure(err) {
    log('Error: ', err);
    alert('Error: ', err);
}

function mfaRequired() {
    const verificationCode = prompt('Please input verification code', '');
    cognitoUser.sendMFACode(verificationCode, this);
}