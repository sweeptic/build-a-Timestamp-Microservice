exports.getHello = (req, res, next) => {
  res.json({ greeting: 'hello API' });
};

exports.getDate = (req, res, next) => {
  //try unix by default
  let date = new Date(+req.params.date);

  //if we have some params
  if (req.params.date !== undefined) {
    //if not valid unix timestamp
    if (!date.getTime() > 0) {
      //try date
      date = new Date(req.params.date);
    }
  } else {
    //if we have not params then set actual date
    date = new Date(Date.now());
  }

  // console.log(date);

  const response =
    //if date is invalid
    date == 'Invalid Date'
      ? { error: 'Invalid Date' }
      : {
          unix: date.getTime(),
          utc: date.toUTCString(),
        };

  res.json(response);
};
