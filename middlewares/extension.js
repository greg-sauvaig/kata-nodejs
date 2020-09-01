/**
 * extension middleware, it set extension to json as default or csv if passed in route call
 */
const extension = (req, res, next) => {
  if (req.params.ext === 'csv') {
    req.params.ext = 'csv';
  } else {
    req.params.ext = 'json';
  }
  next();
};

exports.extension = extension;
