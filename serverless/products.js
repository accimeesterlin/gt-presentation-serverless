const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1'
});

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
});

async function fetchProducts(id) {
    const params = generateParamsById(id);
    return new Promise((resolve, reject) => {
        docClient.query(params, function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}


function generateParamsById(id) {
    const TableName = 'ProductCatalog';
    const params = {
        TableName,
        KeyConditionExpression: "#id = :iii",
        ExpressionAttributeNames: {
            "#id": "Id"
        },
        ExpressionAttributeValues: {
            ':iii': parseFloat(id)
        }
    };
    return params;
}

module.exports = {
    generateParamsById,
    fetchProducts
};