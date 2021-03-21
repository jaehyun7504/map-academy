const fs = require("fs");

const deleteFile = (filePath) => {
  if (!filePath) return;
  fs.unlink(filePath, (err) => {
    if (err) throw err;
  });
};

module.exports = deleteFile;
