import { CountDown } from "./CountDown";

const GetTheWeather = async(cityInput) => {
    //make an async function to get the url and the weather data from the post method and save the data
    const PostData = async (url = 'http://localhost:7000/weatherAdd' , weatherdata = {})=> {
        console.log('data => ', {url, weatherdata })
        //make a fetch call for waiting the weatherbit post method url from the server
        const response = await fetch (url , {
            method: 'POST',
            credentials: 'same-origin' ,
            headers: {
                'Content-Type' : 'application/json' ,
            },
            body: JSON.stringify(weatherdata),
        });
        try{
            //add new data to make the user enter data more than once 
            const NewData = await response.json();
            console.log(NewData);
            //return the data that enter by the user
            return NewData;
        }catch(error) {
            console.log("There Is An Error" , error)
        }
    }
    //make an async function to get the weather data by using Get method and update the data in the UI
    const UpdateUI = async (weatherdata) => {
        try{
            document.getElementById('CityName').innerHTML=`City: ${weatherdata.city_name}`;
            document.getElementById('weatherDesc').innerHTML=`The Weather Will Be ${weatherdata.data[0].weather.description}`;
            const DateOfTravel = document.getElementById('TravelDate').value;
            const NowDate = new Date();
            const DateTravel = new Date(DateOfTravel);
            const TimeLeft = DateTravel - NowDate;
            const Days = Math.floor(TimeLeft / (1000 * 60 * 60 * 24))+1;
            if(Days < 1){
                document.getElementById('Temp').innerHTML=`Temp: `;
            }
            if(Days < 16) {
            document.getElementById('Temp').innerHTML=`Temp: ${weatherdata.data[Days].temp}°C`;
            }if(Days >= 16) {
                document.getElementById('Temp').innerHTML=`Temp:You Passed 16 Days the Temp Of Day 16 IS ${weatherdata.data[15].temp}°C`;  
            }
        }catch(error) {
            console.log("There Is An Error" , error)
        }
    }
    //make an await call for postData function and pass cityInput 
    const response = await PostData('http://localhost:7000/weatherAdd' , {cityInput})
    //make a call for UpdateUI function
    .then(weatherdata=>{ UpdateUI(weatherdata);});
};

export { GetTheWeather }