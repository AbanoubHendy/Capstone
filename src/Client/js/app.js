import {CountDown} from "./CountDown";
import {SaveDelete} from "./SaveDeleteTravel";  
import {GetTheWeather} from "./GetTheWeather";
import {GetImageUrl} from "./PixabayImg";

const GenerateBtn = document.getElementById('generate');
GenerateBtn.addEventListener('click' , GenerateData);


async function GenerateData(event) {
    event.preventDefault()
    const DateOfTravel = document.getElementById('TravelDate').value;
    CountDown(DateOfTravel);
    SaveDelete();
    const cityInput = document.getElementById('TravelCity').value;
    console.log(cityInput);
    const res = await PostData('http://localhost:7000/Geoadd' , {cityInput})
    .then(data=>{ UpdateUI(data);})
    GetTheWeather(cityInput); //updated  
    GetImageUrl(cityInput);
}

const PostData = async (url = 'http://localhost:7000/Geoadd' , data = {})=> {
    console.log('data => ', {url, data });
    const res = await fetch (url , {
        method: 'POST',
        credentials: 'same-origin' ,
        headers: {
            'Content-Type' : 'application/json' ,
        },
        body: JSON.stringify(data),
    });
    try{
        const NewData = await res.json();
        console.log(NewData);
        return NewData;
    }catch(error) {
        console.log("There Is An Error" , error)
    }
}
const UpdateUI = async (data) => {
    try{
        document.getElementById('latitude').innerHTML=`Lat: ${data.geonames[0].lat}`;
        document.getElementById('longitude').innerHTML=`Lon: ${data.geonames[0].lng}`;
        document.getElementById('country').innerHTML=`Country: ${data.geonames[0].countryName}`;
    }catch(error) {
        console.log("There Is An Error" , error)
    }
} 

export { GenerateData }