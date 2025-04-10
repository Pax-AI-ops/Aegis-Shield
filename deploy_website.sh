#!/bin/bash
echo "[O1] Deploying website to AWS S3..."
aws s3 sync ~/Documents/O1/o1_nextgen/website/ s3://aegis-public-website/ --delete --acl public-read
echo "[O1] Deployment complete!"
