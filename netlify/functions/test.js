exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || "Buddy";

  return {
    statusCode: 200,
    body: `Testar`,
  };
};
