mod.component('signupComponent', {
    templateUrl: './SignUp/template.html',
    controller: ['autoComp',"regSer", function (autoComp,regSer) {
        this.city = city;
        this.regSer=regSer;
        this.$onInit = function () {
            autoComp.aoutocomp();
        }

    }]
});
