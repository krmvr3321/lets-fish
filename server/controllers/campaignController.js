const db = require('../db/database');

//Create campaign
exports.createCampaign = (req, res) => {
  const { name, template } = req.body;

  const query = `
    INSERT INTO campaigns (name, template)
    VALUES (?, ?)
  `;

  db.run(query, [name, template], function (err) {
    if (err) {
      return res.status(500).json({
        message: 'Failed to create campaign',
        error: err.message
      });
    }

    res.status(201).json({
      message: 'Campaign created successfully',
      campaignId: this.lastID
    });
  });
};

// Get campaign by ID
exports.getCampaignById = (req, res) => {
  const { id } = req.params;

  db.get(
    `SELECT * FROM campaigns WHERE id = ?`,
    [id],
    (err, row) => {
      if (err) {
        return res.status(500).json({
          message: 'Database error',
          error: err.message
        });
      }

      if (!row) {
        return res.status(404).json({
          message: 'Campaign not found'
        });
      }

      res.json(row);
    }
  );
};