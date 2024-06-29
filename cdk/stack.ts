import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class Stack extends cdk.Stack {
  private runtime = lambda.Runtime.NODEJS_18_X; // Used 18 just because it's how in my current production project :)

  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new apigateway.RestApi(this, 'api');
    const environment = {};

    {
      const helloWorld = new nodejs.NodejsFunction(this, `${this.stackName}-helloWorld`, {
        functionName: `${this.stackName}-helloWorld`, // I like just by looking onto lambda name understand which stack it belongs to
        entry: 'src/functions/helloWorld.ts',
        runtime: this.runtime,
        environment,
        memorySize: 10240, // Just to stress out - current exercise allows read whole storage into memory - hence we use maximum allowed
      });

      api.root
        .addResource('helloWorld')
        .addResource('{nodeIndex}')
        .addMethod('GET', new apigateway.LambdaIntegration(helloWorld));
    }
  }
}
