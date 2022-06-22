const { errorHandler } = require('../../../services/edi-core');
const pool = require('../../config/postgres');
const moment = require("moment");
// bcrypt config
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.setDataUser = async (req, res) => {

    //console.log(req.body);
    var obj = req.body;
    var userid = obj.userid;
    var namalengkap = obj.namalengkap;
    var username = obj.username;
    var password = obj.password;
    var status = obj.status;

    // store to database
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(password, salt, async (err, hash) => {
            if (err) throw err;

            pool.query('INSERT INTO tbl_user (userid,namalengkap,username,password,status) VALUES ($1,$2,$3,$4,$5)', [userid,namalengkap,username,hash,status], (error, results) => {
                if(error){
                    return errorHandler.BadRequest(res, error);
                }
                res.status(200).send({success:1,data: 'New data inserted'})
            });

        });
    });

  

    
}



exports.getDataUser = async (req, res) => {

    var NumberCheck = isNumber(req.params.id);
    //console.log(NumberCheck);

    if (NumberCheck===true){

        const id = parseInt(req.params.id);
        //console.log(id);

        pool.query('SELECT * FROM tbl_user WHERE userid=$1',[id], (error, results) => {
            if(error){
                return errorHandler.BadRequest(res, error);
            }
            res.status(200).send({success:1,data: results.rows })
        });
    }else{
        pool.query('SELECT * FROM tbl_user order by userid ASC', (error, results) => {
            if(error){
                return errorHandler.BadRequest(res, error);
            }
            res.status(200).send({success:1,data: results.rows })
        });
    }
    
    
}

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

exports.updateDataUser = async (req, res) => {

    const id = parseInt(req.params.id);
    const obj = req.body;
    const nama_user = obj.nama_user;
    const updated_at = moment().utcOffset(0, true).format();

    pool.query('UPDATE tbl_user SET nama_user=$1,updated_at=$2 WHERE id=$3',[nama_user,updated_at,id], (error, results) => {
        if(error){
            return errorHandler.BadRequest(res, error);
        }
        res.status(200).send({success:1,data: 'Data Updated' })
    });

    
}

exports.delDataUser = async (req, res) => {

    const id = parseInt(req.params.id);
    

    pool.query('DELETE FROM tbl_user  WHERE userid=$1',[id], (error, results) => {
        if(error){
            return errorHandler.BadRequest(res, error);
        }
        res.status(200).send({success:1,data: 'Data Deleted' })
    });

    
}