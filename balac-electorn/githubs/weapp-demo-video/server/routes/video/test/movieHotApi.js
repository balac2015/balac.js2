const RouterBase = require('../../../common/routerbase');
const urllib = require('urllib')

class MovieHotApi extends RouterBase {
    handle () {
        const pageCount = 0
        const url = `https://movie.douban.com/explore#!type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=${pageCount*20}`
        urllib.request(url, (err, data, res) => {
            if (err) {
                throw err
            }
            this.res.json({
                data: data,
                res: res
            })
        })

    }
}

module.exports = MovieHotApi.makeRouteHandler();
