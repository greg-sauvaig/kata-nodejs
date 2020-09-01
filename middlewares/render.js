const jsonexport = require('jsonexport');

const render = (req, res, next) => {
  res.render = async (content) => {
    if (req.params.ext === 'json') {
      res.json(content);
    }
    if (req.params.ext === 'csv') {
      try {
        const csv = await jsonexport(content, { rowDelimiter: ';' });
        res.set('Content-Type', 'application/octet-stream');
        res.send(Buffer.from(csv));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('an error occured when exporting content to csv format', error);
      }
    }
  };
  next();
};

exports.render = render;
