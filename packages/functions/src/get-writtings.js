export const handler = async (event) => {
    console.log(`Hello World ${event}`);
    return {
        statusCode: 200,
        body: JSON.stringify({ status: "ok" }, null, 2),
    };
};

