const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");

if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config({ path: path.join(__dirname, "config.env") });
}

const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const S3_BUCKET = process.env.S3_BUCKET;

const s3 = new AWS.S3({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

exports.uploadFile = async (key) => {
  fs.readFile(path.join(__dirname, "..", key), (err, data) => {
    if (err) throw err;
    const params = {
      Bucket: S3_BUCKET,
      Key: key,
      Body: data,
    };
    s3.upload(params, function (s3Err, data) {
      if (s3Err) throw s3Err;
    });
  });
};

exports.deleteFile = (key) => {
  const params = {
    Bucket: S3_BUCKET,
    Key: key,
  };
  s3.deleteObject(params, function (s3Err, data) {
    if (s3Err) throw s3Err;
  });
};
