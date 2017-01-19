(function () {
    angular
        .module("MandrillTest")
        .factory("EmailService", EmailService);

    function EmailService($http) {

        var api = {
            sendEmail : sendEmail
        };
        return api;

        function sendEmail(username, password) {
            var user = {
                'name' : username,
                'email': password
            };
            var url = "/api/email";
            return $http.post(url, user);
        }
    }
})();