# -------------------------------------------------- #
# ----- OpenTofu state backend (S3 + DynamoDB) ----- #
# -------------------------------------------------- #

# S3 Bucket: stores the OpenTofu state files
resource "aws_s3_bucket" "opentofu_state" {
  bucket = var.opentofu_state_s3_bucket_name

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_s3_bucket_versioning" "state_versioning" {
  bucket = aws_s3_bucket.opentofu_state.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "state_encryption" {
  bucket = aws_s3_bucket.opentofu_state.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "block_public_access" {
  bucket = aws_s3_bucket.opentofu_state.id

  block_public_acls   = true
  block_public_policy = true
  ignore_public_acls  = true
  restrict_public_buckets = true
}

# > DynamoDB: state locking to prevent concurrent modifications
resource "aws_dynamodb_table" "opentofu_locks" {
  name         = var.opentofu_lock_dynamodb_table_name
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}