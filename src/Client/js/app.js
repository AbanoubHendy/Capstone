const BaseUrl = "http://api.geonames.org/findNearbyPostalCodes?";
const ApiKey1 = process.env.API_KeyGeo;
const GenerateBtn = document.getElementById('generate');
GenerateBtn.addEventListener('click' , GenerateData);

function GenerateData() {
    const country = document.getElementById('TravelCountry').value;
    CountryPart(BaseUrl , ApiKey1 , country)
    .then(function(data) {
        console.log(data);
        PostData('http://localhost:7000/AddData' , {lat:data.main.lat , lon:data.main.lon , country:country})
        UpdataUI();
    });
}
const CountryPart= async(BaseUrl , ApiKey1 , country) => {
    const response = await fetch(BaseUrl+ApiKey1+country)
    try{
        const data= await response.json();
        return data;
    }catch(error) {
        console.log("There Is An Error" , error)
    }
}

const PostData = async (url = 'http://localhost:7000/AddData' , data = {})=> {
    console.log(data);
    const response = await fetch('http://localhost:7000/AddData', {
        method: 'POST',
        credentials: 'same-origin' ,
        headers: {
            'Content-Type' : 'application/json' ,
        },
        body: JSON.stringify(data),
    });
    try{
        const NewData = await response.json();
        console.log(NewData);
        return NewData;
    }catch(error) {
        console.log("There Is An Error" , error)
    }
}

const UpdataUI = async () => {
    const request = await fetch('/getData');
    try{
        const UpdataData = await request.json();
        document.getElementById('latitude').innerHTML=`Lat: ${UpdataData.lat}`;
        document.getElementById('longitude').innerHTML=`Lon: ${UpdataData.lon}`;
        document.getElementById('country').innerHTML=`Country: ${UpdataData.country}`;
    }catch(error) {
        console.log("There Is An Error" , error)
    }
}
export { GenerateData }