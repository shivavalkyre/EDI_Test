const router = require('express').Router();


// init controller
const {
    setDataUser,
    getDataUser,
    updateDataUser,
    delDataUser
} = require('../../../src/controllers/user/userController');



router.route('/setDataUser')
    .post(setDataUser);
   

router.route('/getDataUser/:id')
    .get(getDataUser);

router.route('/updateDataUser/:id')   
    .put(updateDataUser);

router.route('/delDataUser/:id')
    .delete(delDataUser);

module.exports = router;