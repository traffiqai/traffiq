import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const main = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log('Hello from TypeScript Lambda!');

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    },
    body: JSON.stringify({
      message: 'Hello from TypeScript Lambda!',
      event: event.httpMethod || 'Unknown method',
    }),
  };
};
