
/*
  * Created By : Ankita Solace
  * Created Date : 05-02-2020
  * Purpose : Declare article quries
*/

let { _select } = require("./../db"),
	{ Tables } = require("./../../constants")


  var fetchAllArticles = async(req,res,next)=>{
  		let WhereCond = " Status = 1 "
     	await _select(  "", Tables.Articles , res, "","", "",WhereCond  )
  };


 var fetchArticleByID = async(req,res,next)=>{
  		let WhereCond = " Status = 1 AND ID = "+req.body.ID
     	await _select(  "", Tables.Articles , res, "","", "",WhereCond  )
  };



module.exports = { fetchAllArticles, fetchArticleByID };
