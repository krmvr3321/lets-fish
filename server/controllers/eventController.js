const db = require('../db/database');

exports.logEvent = (req, res) => {
  const { user_id, campaign_id, event_type } = req.body;

  const query = `
    INSERT INTO events (user_id, campaign_id, event_type)
    VALUES (?, ?, ?)
  `;

  db.run(query, [user_id, campaign_id, event_type], function (err) {
    if (err) {
      return res.status(500).json({
        message: 'Failed to log event',
        error: err.message
      });
    }

    res.status(201).json({
      message: 'Event logged successfully',
      eventId: this.lastID
    });
  });
};