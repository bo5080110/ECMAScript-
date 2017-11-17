var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


// 获取新闻内容   http://localhost:3000/news?id=2
router.get('/news', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    var id = req.query.id;
    console.log('/news id='+id);
    var news = {
        id: id,
        title: 'news title1...',
        content: 'news content1...',
        commentsUrl: '/comments?newsId='+id
    };
    res.json(news);
});


// 获取评论列表
router.get('/comments', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    console.log('/comments newsId=' + req.query.newsId);
    var newsId = req.query.newsId;
    var comments = [
        {
            id: 1,
            content: 'comment content1111...',
            newsId : newsId
        },
        {
            id: 2,
            content: 'comment content2222...',
            newsId : newsId
        }];
    res.json(comments);
});

module.exports = router;
