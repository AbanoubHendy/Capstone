import {CountDown} from "./CountDown";
import {SaveDelete} from "./SaveDeleteTravel";  
import {GetTheWeather} from "./GetTheWeather";
import {GetImageUrl} from "./PixabayImg";


document.addEventListener('DOMContentLoaded', function () {
    const GenerateBtn = document.getElementById('generate');
    GenerateBtn.addEventListener('click' , GenerateData);
})

const GenerateData = async(event) => {
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
    const cityInput = document.getElementById('TravelCity').value;
    try{
        document.getElementById('latitude').innerHTML=`Lat: ${data.geonames[0].lat}`;
        document.getElementById('longitude').innerHTML=`Lon: ${data.geonames[0].lng}`;
        document.getElementById('country').innerHTML=`Country: ${data.geonames[0].countryName}`;
    }catch(error) {
        console.log("There Is An Error" , error)
        const RemoveChilds = document.getElementById('SecondPart');
        RemoveChilds.textContent= '';
        const AnError = document.createElement("p");
        const ErrorTitle = document.createTextNode("There Is An Error Please Check Your City Again");
        AnError.appendChild(ErrorTitle);
        AnError.style.color= "red";
        AnError.style.gridArea= "cv";
        AnError.style.marginBottom= "100px";
        document.getElementById('SecondPart').appendChild(AnError);
    }
} 
export { GenerateData }