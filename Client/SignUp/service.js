mod.service('autoComp', autoComp);
function autoComp() {
    this.aoutocomp = function () {
        let autocompleteFormField = document.getElementById('address');
        let autocomplete = new google.maps.places.Autocomplete((autocompleteFormField), {
            types: ['(cities)'],
            componentRestrictions: { country: "il" }

        });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {

        })
    }
}
mod.service('regSer', regSer);

function regSer(getDataService) {
    //    then(function (response) 

    var checkEmpty = function (json) {
        for (x in json) {
            if (!json[x]) {
                return false;
            }
        }
        return true;
    }

    this.signUp = function (name, email, password, area, city) {

        var json = { name, email, password, area, city };
        if (!checkEmpty(json)) {
            document.getElementById("errormassage").innerHTML = "Paragraph changed!";
            
        }
        else {
            
        }





    }
}