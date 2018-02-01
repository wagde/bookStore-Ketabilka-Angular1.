mod.component('reviewsComponent', {
    templateUrl: './Reviews/template.html',
    controller: [ 'reviewsServ', function ( reviewsServ) {
        this.reviewsServ = reviewsServ;
    }]
});
