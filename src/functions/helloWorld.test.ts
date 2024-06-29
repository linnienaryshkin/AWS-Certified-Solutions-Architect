import { handler } from './helloWorld';
import type { Context, APIGatewayProxyEventV2 } from 'aws-lambda';

process.env.MERKLE_TREE_BUCKET = 'MERKLE_TREE_BUCKET';

describe('helloWorld', () => {
  it('should return helloWorld', async () => {
    const result = await handler(
      { pathParameters: { nodeIndex: '10' } } as unknown as APIGatewayProxyEventV2,
      {} as Context,
      () => {}
    );

    expect(result).toEqual({
      statusCode: 200,
      body: '"helloWorld"',
    });
  });
});
