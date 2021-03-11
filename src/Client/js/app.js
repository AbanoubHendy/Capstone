//import javascript files that used in the Generate button function to be readen
import {CountDown} from "./CountDown";
import {SaveDelete} from "./SaveDeleteTravel";  
import {GetTheWeather} from "./GetTheWeather";
import {GetImageUrl} from "./PixabayImg";

//make a DOMContentLoaded event 
document.addEventListener('DOMContentLoaded', function () {
    const GenerateBtn = document.getElementById('generate');
    GenerateBtn.addEventListener('click' , GenerateData);
})

//make an async function for the generate button
const GenerateData = async(event) => {
    event.preventDefault()
    const DateOfTravel = document.getElementById('TravelDate').value;
    const cityInput = document.getElementById('TravelCity').value;
    if (cityInput != "") {
        CountDown(DateOfTravel);
        SaveDelete();
        console.log(cityInput);    
        //make an await call for postData function and pass cityInput for geonames Post method
        const res = await PostData('http://localhost:7000/Geoadd' , {cityInput})
        //make a call for UpdateUI function for goenmaes Get method
        .then(data=>{ UpdateUI(data);})
        GetTheWeather(cityInput);  
        GetImageUrl(cityInput);
    }
    else {
        document.getElementById('CountryImg').innerHTML=`<img src="https://pixabay.com/get/g6764ed1962c8acb311f03027855cef094b3de352472ee1c0d8dcb468656ac6f188017d33a03c354f732ef95371446e1dcd0e2f70f2c8fdffa1593c55e656a1d2_640.jpg">`;
        console.log("Invalid URL")
        alert("Please Enter The City");
    }
}

//make an async function to get the url and the geonames data from the post method and save the data
const PostData = async (url = 'http://localhost:7000/Geoadd' , data = {})=> {
    console.log('data => ', {url, data });
    //make a fetch call for waiting the geonames post method url from the server
    const res = await fetch (url , {
        method: 'POST',
        credentials: 'same-origin' ,
        headers: {
            'Content-Type' : 'application/json' ,
        },
        body: JSON.stringify(data),
    });
    try{
        //add new data to make the user enter data more than once 
        const NewData = await res.json();
        console.log(NewData);
        //return the data that entered by the user
        return NewData;
    }catch(error) {
        console.log("There Is An Error" , error)
    }
}

//make an async function to get the geonames data by using Get method and update the data in the UI
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