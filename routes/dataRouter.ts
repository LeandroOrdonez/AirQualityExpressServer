﻿import express = require('express');
import { ObeliskClientAuthentication } from '../utils/Authentication';
const router = express.Router();

var dataController = require('../controllers/dataController')

//router.get('/:id', dataController.dataGet);
router.get('/:zoom/:tile_x/:tile_y', dataController.data_get_z_x_y);

export default router;