mod.component('navbarComponent', {
    templateUrl: './NavBar/template.html',
    controller: [function () {

        this.showli = function () {
            var x = document.getElementsByClassName("respli");
            for (elm of x) {
                console.log(elm)
             if(elm.style.display === "none"){
                elm.style.display = "block";
             }
             else{
                elm.style.display = "none";
             }
            }

            // if (x[0].style.display === "none") {
            //     for 
            //         element.display = "block";
            //       });


            // } else {
            //     x.forEach(function(element) {
            //         element.display = "block";
            //       });

            //     x.style.display = "none";
            // }
        }
    }]
});
