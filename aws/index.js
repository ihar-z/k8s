const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const bucketName = 'de-feeds-dev';

const params = { Bucket: bucketName, Key: 'test', Body: 'test' };

s3.putObject(params, (err, data) => console.log(err, data));