(function () {
    angular
        .module("MandrillTest")
        .controller("LoginController", LoginController);

    function LoginController() {
        var vm = this;
        vm.login = login;
        vm.submitted = false;

        function login(username, password) {
            vm.submitted = true;
            console.log('hi');
        }



    }
})();