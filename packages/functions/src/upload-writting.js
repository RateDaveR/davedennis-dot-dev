const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

exports.main = async (event, context) => {
  try {
    const command = new PutCommand({
      TableName: "davedennisdotdev-dev-TableTable",
      Item: {
        pk: "Animal#ShibaInu",
        sk: "Metadata#001",
      },
    });

    const response = await docClient.send(command);
    console.log("PutItem succeeded:", response);
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error("Error occurred while putting item:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

