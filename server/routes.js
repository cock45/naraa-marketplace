const router = require('express').Router();
const {
    body
} = require('express-validator');
const {signUp} = require('./controllers/signUpController');
const {getUser} = require('./controllers/getUserController');

router.post('/signup', [body('email', 'username', 'address')], signUp);
router.post('/getUser', [body('address')], getUser);
router.get('/test', function (request, response) {
    response.send('Server is running');
});





module.exports = router;