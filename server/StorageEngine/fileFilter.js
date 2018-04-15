const path = require('path');

const fileFilter = (req, file, cb) => {
  console.log("FIRED: file filter");
  const ext = path.extname(file.originalname).toLowerCase();
  // Allowed ext
  const filetypes = /\.(png|jpe?g|gif)$/;
  const mimetypes = /\/(png|jpe?g|gif)/;
  // Check ext
  const matchExt = filetypes.test(ext);
  // Check mime
  const matchMIME = mimetypes.test(file.mimetype);

  if(matchMIME && matchExt){
    cb(null, true);
  } else {
    cb(`Error: ${ext.substr(1)} files are not supported.\nThe following formats are supported: png, jpg, jpeg and gif`);
  }
};

module.exports = fileFilter;
