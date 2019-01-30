

$('button[type="submit"]').on('click', function(event) {
    event.preventDefault();

    const name = $('#name').val();
    const email = $('#email').val();
    const password = $('#password').val();

    /*
        ClassName: AmazonCognitoIdentity.CognitoUserAttribute
        Param: { Name: 'email', Value: 'email' }
    */
    const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute();

    /*
        ClassName: AmazonCognitoIdentity.CognitoUserAttribute
        Param: { Name: 'name', Value: 'name' }
    */
    const attributeName = new AmazonCognitoIdentity.CognitoUserAttribute();

     /*
        MethodName: signUp
        Param1: email
        Param2: password
        Param3: [attributeEmail, attributeName]
        Param4: null
        Param5: handleCognitoSignUp
    */
    userPool.signUp();

});


function handleCognitoSignUp(err, result) {
    if (err) {
        log('Error: ', err);
        alert('No table to sign you up, try again: ', err);
        return;
    }

    window.location.href = 'verify.html'; // redirecting to verify.html

    log('Result: ', result);
    log('Cognito User: ', result.user);
    const cognitoUser = result.user;
    log('Username: ', cognitoUser.getUsername());
}