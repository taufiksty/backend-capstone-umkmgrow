const express = require('express');
const multer = require('multer');

const { auth } = require('../middlewares');
const { putUsersHandler } = require('../controllers/users-controller');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.use(auth);

router.route('/:id').put(upload.single('image'), putUsersHandler);

module.exports = router;
