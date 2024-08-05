const { Storage } = require('@google-cloud/storage');
const path = require('path');

const storage = new Storage({
  keyFilename: path.join(__dirname, 'path_to_your_service_account_key.json'),
  projectId: 'your_project_id',
});

const bucket = storage.bucket('your_bucket_name');

// Upload file
exports.uploadFile = (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded');

  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream();

  blobStream.on('error', (err) => res.status(500).send('Server error'));

  blobStream.on('finish', () => res.status(200).send('File uploaded'));

  blobStream.end(req.file.buffer);
};
