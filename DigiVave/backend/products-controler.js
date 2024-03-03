const connection = require("./db_config")
const { request } = require("express");

module.exports = {

    getProducts: (req, res) =>{
        let sql = "select * from products";
        connection.query(sql,[],(err, results)=>{
          if(err){
            return res.status(500).json({
              success: 0,
              message: "No Data Avilable"
            });
          }else{
            res.send(results)
          }
        })
      },

      getProductBySearch : (req, res)=>{
        const key= req.params.key
        let sql = "SELECT * FROM products where ProductName like '%"+key+"%'";
        connection.query(sql,[key],(err, results)=>{
          if(err){
            res.send(err)
          }else{
            res.send(results)
          }
        })
      },


}