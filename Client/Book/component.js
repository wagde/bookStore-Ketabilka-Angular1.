mod.component('bookComponent', {
    templateUrl: './Book/template.html',
    controller: ["bookService", "$rootScope", function (bookService, $rootScope) {
        this.bookService = bookService;
        this.books = books;
        ctrl = this;
        
        this.hidebook = function () {
            $rootScope.hidebook()
        }
        $rootScope.getId = function (id) {
           ctrl.mybook=books[id-1];
        }


    }]
});
