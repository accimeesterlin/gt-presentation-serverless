


$('button[type="submit"]').on('click', function(event) {
    event.preventDefault();

    const code = $('#code').val();
    const email = $('#email').val();

    /*
        ClassName: AmazonCognitoIdentity.CognitoUser
        Param: { Username: 'email', Pool: userPool }
    */
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser();
    
    
    /*
        MethodName: confirmRegistration
        Param1: code
        Param2: true
        Param3: handleConfirmRegistration
    */
    cognitoUser.confirmRegistration();
});


function handleConfirmRegistration(err, result) {
    if (err) {
        log('Error: ', err);
        alert('Fail to validate your code');
        return;
    }

    window.location.href = 'profile.html';
    alert('Successfully validated!');
}