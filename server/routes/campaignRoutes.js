const express = require('express');
const router = express.Router();

const {
  createCampaign,
  getCampaignById
} = require('../controllers/campaignController');

router.post('/', createCampaign);
router.get('/:id', getCampaignById);

module.exports = router;