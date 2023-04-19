"use strict";
class IndexRoute {
    async index(req, res) {
        res.render("index/index");
    }
    async projects(req, res) {
        res.render("index/projects");
    }
}
module.exports = IndexRoute;
//# sourceMappingURL=index.js.map