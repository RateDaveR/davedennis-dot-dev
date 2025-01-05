export const handler = async (event) => {
    image: `interpolate{ddrouter.url}/public-key.txt`;
    console.log(`Hello World ${event}`);
    return {
        statusCode: 200,
        body: JSON.stringify({ status: "ok" }, null, 2),
    };
};

