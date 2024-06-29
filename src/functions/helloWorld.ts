import type { APIGatewayProxyHandlerV2 } from 'aws-lambda';

const helloWorld: APIGatewayProxyHandlerV2 = async () => {
  return { statusCode: 200, body: JSON.stringify('helloWorld') };
};

// I do this `handler = helloWorld` as a habit, because in most cases we want to apply some middlewares to the handler before exporting
export const handler = helloWorld;
