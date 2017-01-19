(function () {
    angular
        .module("MandrillTest")
        .controller("LoginController", LoginController);

    function LoginController(EmailService) {
        var vm = this;
        vm.login = login;
        vm.submitted = false;

        function login(username, password) {
            vm.submitted = true;
            console.log('hi');

            EmailService
                .sendEmail(username, password)
                .then(function (res) {
                    var result = res.data;
                },
                function (err) {
                    vm.error = err;
                })
        }



    }
})();