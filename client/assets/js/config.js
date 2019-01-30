// Set up Amazon Cognito Pool Data
const poolData = {
    UserPoolId: 'us-east-1_LdeUNln8Z',
    ClientId: '73v130f82gglf1a9u1r1vsm8oj'
};

// Initialize Amazon Cognito Identity
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const log = console.log;