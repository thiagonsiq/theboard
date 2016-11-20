(function(homeController){
    
    homeController.init = function(app){
        app.get("/", function(req, res){
            //res.send("<html><body><h1>Express</h1></body></html>")
            res.render("index", { title: "Express + Vash" });
        });  
    };

})(module.exports);