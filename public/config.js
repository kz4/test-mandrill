(function () {
    angular
        .module("MandrillTest")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/home/home.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            });
            // .otherwise({
            //     // redirectTo: "/views/user/login.view.client.html",
            //     redirectTo: "/login",
            //     controller: "LoginController",
            //     controllerAs: "model"
            // });
    }
})();