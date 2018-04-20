const path = require('path');

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  // Allowed ext
  const filetypes = /\.(png|jpe?g|webp|tiff)$/;
  const mimetypes = /\/(png|jpe?g|webp|tiff)/;
  // Check ext
  const matchExt = filetypes.test(ext);
  // Check mime
  const matchMIME = mimetypes.test(file.mimetype);

  if(matchMIME && matchExt){
    cb(null, true);
  } else {
    cb(`Error: ${ext.substr(1)} files are not supported.\nThe following formats are supported: png, jpeg, webp and tiff`);
  }
};

module.exports = fileFilter;
