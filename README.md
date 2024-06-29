## AWS-Certified-Solutions-Architect

Sandbox for [AWS Certification](https://aws.amazon.com/certification/certified-solutions-architect-associate/?ch=sec&sec=rmg&d=1)

## Deployment

1. [Authorization](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_auth) - follow the guide, you need an active AWS access portal session for the AWS CDK.
2. [Bootstrapping](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_bootstrap) - deploying stacks with the AWS CDK requires dedicated Amazon S3 buckets and other containers to be available to AWS CloudFormation during deployment.

After, you should be available to deploy.

- `cdk synth` emits the synthesized CloudFormation template
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with the current state

## Usage

Current CDK expose two lambdas.

1. `writeMerkleTree` - paramsless function, launch once to store static Merkle Tree in S3 bucket
2. `readMerkleTree` - accepts Merkle Tree Node index, the return value of that node, depth and offset (read [TASK.md](./TASK.md) to understand more)

   Additionally, `readMerkleTree` is connected to AWS API Gateway, and by `curl https://{BASE_URL}/merkle-tree/{nodeIndex}` you'll get the same output

## Be Aware

In the core of the project, you'll find `cdk.context.json` - highly recommended to fill it in case of production usage :)

Read more here: https://docs.aws.amazon.com/cdk/v2/guide/context.html

## Hygiene

- `npm update --save`
- `npm audit fix`
