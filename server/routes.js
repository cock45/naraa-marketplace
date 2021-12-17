const router = require('express').Router();
const {
    body
} = require('express-validator');
const {signUp} = require('./controllers/signUpController');
const {getUser} = require('./controllers/getUserController');
const {updateUser} = require('./controllers/updateUserController');

router.post('/signup', [body('email', 'username', 'address')], signUp);
router.post('/getUser', [body('address')], getUser);
router.post('/updateUser', [body('username', 'bio', 'address')], updateUser);
router.get('/test', function (request, response) {
    response.send('Server is running');
});

module.exports = router;