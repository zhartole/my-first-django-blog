/**
 * Created by a.zhmakin on 27.04.2016.
 */

function Car(data) {
    var car = this;
    function buildCarDescription(elem){
        var resultBox = document.querySelector(''+elem+'');
        resultBox.innerHTML =   '<div class="col-xs-12 col-md-8">\
                                    <img src="'+ car.img + '" alt="'+ car.name + '" class="img-responsive">\
                                </div>\
                                <div class="col-xs-12 col-md-4">\
                                    <div class="car-name">'+car.name+'</div>\
                                    <div class="car-description">'+car.snippet+'</div>\
                                </div>';
    }

    this.name = data.name;
    this.snippet = data.snippet;
    this.img = data.imageUrl;
    this.display = function(result){
        buildCarDescription(result)
    }
}

var btnBuildCar = document.querySelector('#build-car');
btnBuildCar.addEventListener('click', carReguests);

function carReguests(){
    carReguest = new httpClient();
    carReguest.get('script/data/cars.json', function(data) {
        if(data) {
            var mercedes = new Car(data[0]);
            mercedes.display('.cars-info .mercedes');

            var audi = new Car(data[1]);
            audi.display('.cars-info .audi');
        }
    });
}
