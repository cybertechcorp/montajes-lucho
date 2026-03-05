terraform {
  backend "s3" {
    bucket         = var.opentofu_state_s3_bucket_name
    key            = "terraform.tfstate"
    region         = var.aws_region
    dynamodb_table = var.opentofu_lock_dynamodb_table_name
    encrypt        = true
  }
}