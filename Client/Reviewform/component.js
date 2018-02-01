mod.component('reviewformComponent', {
    templateUrl: './Reviewform/template.html',
    controller: ['reviewformService', function (reviewformService) {
        this.reviewformService = reviewformService;
    }]
});
