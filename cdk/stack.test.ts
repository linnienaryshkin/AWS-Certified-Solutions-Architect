import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Stack } from './stack';

const context = {
  // Disable bundling functions, to speed up testing
  'aws:cdk:bundling-stacks': [],
  // But if you want check bundle size - use `cdk synth` command
};

describe('Stack', () => {
  const app = new cdk.App({ context });
  const stack = new Stack(app, 'Stack');
  const template = Template.fromStack(stack);

  test('should check general overview of the stack', () => {
    template.resourceCountIs('AWS::ApiGateway::RestApi', 1);
    template.resourceCountIs('AWS::ApiGateway::Method', 1);
    template.resourceCountIs('AWS::Lambda::Function', 1);
  });
});
