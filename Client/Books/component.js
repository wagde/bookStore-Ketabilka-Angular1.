mod.component('booksComponent', {
    templateUrl: './Books/template.html',
    controller: ["bookService", "$rootScope", function (bookService, $rootScope) {
        this.bookService = bookService;
        this.books = books;
        this.bookshow = false;
        serv = this;
        this.showBook = function (id) {
            $rootScope.getId(id)
            if (serv.bookshow) { serv.bookshow = false; }
            else {
            serv.bookshow = true;
            }
          
        }
        $rootScope.hidebook = function () {
            serv.bookshow = false;
        }
    }]
});
