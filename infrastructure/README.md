# AWS + OpenTofu

This project is designed to provision AWS resources using OpenTofu, a fork of Terraform.

## Project Structure

- **main.tf**: Contains the main configuration for the AWS resources.
- **providers.tf**: Specifies the provider configuration for AWS.
- **variables.tf**: Defines the variables used in the configuration.
- **outputs.tf**: Specifies the outputs of the configuration.
- **dev.tfvars**: Contains variable values specific to the DEV environment.
- **uat.tfvars**: Contains variable values specific to the UAT environment.
- **prod.tfvars**: Contains variable values specific to the PROD environment.
- **README.md**: Documentation for the project.

## Prerequisites

1. Ensure you have OpenTofu installed on your machine.

```console
$ winget install --exact --id=OpenTofu.Tofu
```

2. Verify OpenTofu installation

```console
$ tofu -version
```

3. Install AWS CLI

```console
$ msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
```

4. Verify AWS CLI installation

```console
$ aws --version
```

5. Create an AWS billing Account

6. Create OpenTofu user role using the IAM service in the AWS Console. 

> User: OpenTofu

7. Give access permissions to OpenTofu IAM role

> AdministratorAccess
> AmazonS3FullAccess

6. Create access key for OpenTofu user in AWS Console

> Access key: AKIAX5EZDD2QXNBO5I5V
> Secret access key: Aq8wb2...
> local.infrastruture.pipeline

## Instructions

1. Clone the repository:

   ```
   $ git clone <repository-url>
   ```

2. Step into /src folder:

   ```
   $ cd src
   ```

3. Configure your AWS credentials:

    ```
    $ aws configure
    AWS Access Key ID [****************RKCT]: AKIAX5EZDD2QXNBO5I5V
    AWS Secret Access Key [****************jYx6]: ...
    Default region name [eu-west-1]: eu-north-1                              
    Default output format [None]: json
    ```

    > Disconnect from Corporate VPN or PROXY to avoid CA (Certificate Authority) errors

    \* You can use environment variables as well:

    ```
    $ export AWS_ACCESS_KEY_ID=AKIA....
    $ export AWS_SECRET_ACCESS_KEY=xxxxxxxx
    $ export AWS_DEFAULT_REGION=us-east-1
    ```

4. Initialize OpenTofu state

    ```console
    $ tofu init
    ```

5. Plan

    ```console
    $ tofu plan
    ```

6. Apply

    ```console
    $ tofu apply

    ...

    Apply complete! Resources: 5 added, 0 changed, 0 destroyed.     

    Outputs:

    cloudfront_url = "d3p8htm6l8mc4s.cloudfront.net"
    ```

7. 

    ```console
    $ tofu state list

    aws_cloudfront_distribution.frontend
    aws_cloudfront_origin_access_control.oac
    aws_s3_bucket.frontend
    aws_s3_bucket_policy.frontend_policy
    aws_s3_bucket_public_access_block.frontend
    ```

8. Upload React artifacts to S3

    ```console
    cd frontend
    ```

    ```console
    npm run build
    ```

    ```console
    aws s3 sync dist/ s3://frontend-montajes-lucho
    ```

9. Access your web using the CloudFront URL from the OpenTofu apply output

10. If you need to delete all the infrastructure execute:

    ```console
    $ tofu destroy
    ```

## AWS Infrastructure Resources

> AWS Shield > Amazon CloudFront > AWS S3

- AWS S3 is a storage service that serves and stores the static files from the web.

- Amazon CloudFront is a Content Delivery Network (CDN) that serves globally the S3 static files reducing latency, elasticity and offering protection against several cyber attacks. It offers DDoS protection thanks to AWS Shield Free Tier plan, its Global Edge Network which handles traffic spikes and distributes the load, implements rate limiting with AWS WAF (if enabled with additional costs) and origin protection.

- AWS Shield is a protection layer against several cyber attacks. AWS Shield Free Tier plan is enabled by default in all AWS Accounts.

\* More on DDoS Protection on AWS with AWS Shield and AWS WAF | Amazon Web Services: https://www.youtube.com/watch?v=-9YzrRCzaKM