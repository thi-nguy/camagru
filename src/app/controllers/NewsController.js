class NewsController {
    
    // [GET] news/:slug
    show(req, res) {
        res.send('NEWs details')
    }

    // [GET] /news (index cua /news)
    index(req, res) {
        res.render('news');
    }
};

module.exports = new NewsController; // tao mot object va export