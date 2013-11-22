#!/bin/sh

s3cmd sync --acl-public $(dirname $0)/../app/ s3://localtime.io
