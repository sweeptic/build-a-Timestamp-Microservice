exports.getHello = (req, res, next) => {
  res.json({ greeting: 'hello API' });
};

exports.getDate = (req, res, next) => {
  const inputData = req.params.date;

  //regex for validate utc date is correct format
  const dateRegexExpr = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

  let UnixTimestamp, utcDate;
  let isValidUtcDate,
    isValidUnixTimeStamp = false;

  //validate data
  if (dateRegexExpr.test(inputData)) {
    UnixTimestamp = new Date(inputData).getTime();
    utcDate = new Date(inputData);
    isValidUtcDate = true;
  } else if (new Date(+inputData).getTime() > 0) {
    UnixTimestamp = +inputData;
    utcDate = new Date(+inputData);
    isValidUnixTimeStamp = true;
  }

  if (!(isValidUtcDate || isValidUnixTimeStamp)) {
    res.json({ error: 'Invalid Date' });
  } else {
    try {
      res.json({
        unix: UnixTimestamp,
        utc: utcDate,
      });
    } catch (error) {
      res.json({ error: 'oops, something happened...' });
    }
  }
};
