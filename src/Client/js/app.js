const BaseUrl = "http://api.geonames.org/findNearbyPostalCodes?";
const ApiKey1 = process.env.API_KeyGeo;
const GenerateBtn = document.getElementById('generate');


GenerateBtn.addEventListener('click' , GenerateData);

function GenerateData() {
    const country = document.getElementById('TravelCountry').value;
    const DateOfTravel = document.getElementById('TravelDate').value;

    CountryPart(BaseUrl , ApiKey1 , country)
    .then(function(data) {
        console.log(data);
        postData()
        UpdataUI()

    })
    DatePart()

}