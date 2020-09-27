/*
  * Created By : Ankita Solace
  * Created Date : 26-09-2020
  * Purpose : Declare all routes,
*/

var express = require('express'),
    router = express.Router();

var { addArticle,editArticle, deleteArticle } = require("../controller/mutation/articles");
var {  fetchAllArticles, fetchArticleByID } = require("../controller/queries/articles");


router.post('/addArticle',addArticle);
router.post('/editArticle',editArticle);
router.post('/deleteArticle',deleteArticle);
router.post('/fetchArticleByID',fetchArticleByID);
router.get('/fetchAllArticles',fetchAllArticles);

module.exports = router;
