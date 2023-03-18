import express from 'express';

import {
    createProperty,
    deleteProperty,
    getAllProperties,
    getPropertyDetail,
    updateProperty
} from '../controllers/property.controller.js';

const router = express.Router();

router.route('/').get(getAllProperties);
router.route('/:id').get(getPropertyDetail);
router.route('/').post(createProperty);
router.route('/:id').put(updateProperty);
router.route('/:id').delete(deleteProperty);

export default router;