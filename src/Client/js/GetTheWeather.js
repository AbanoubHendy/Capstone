
async function GetTheWeather(cityInput) {
    const PostData = async (url = 'http://localhost:7000/weatherAdd' , weatherdata = {})=> {
        console.log('data => ', {url, weatherdata })
        const response = await fetch (url , {
            method: 'POST',
            credentials: 'same-origin' ,
            headers: {
                'Content-Type' : 'application/json' ,
            },
            body: JSON.stringify(weatherdata),
        });
        try{
            const NewData = await response.json();
            console.log(NewData);
            return NewData;
        }catch(error) {
            console.log("There Is An Error" , error)
        }
    }

    const UpdataUI = async (weatherdata) => {
        try{
            document.getElementById('CityName').innerHTML=`City-Name: ${weatherdata.data[0].city_name}`;
            document.getElementById('weatherIcon').innerHTML=weatherdata.data[0].weather.icon;
            document.getElementById('weatherDesc').innerHTML=weatherdata.data[0].weather.description;
            document.getElementById('Temp').innerHTML=`Temp: ${weatherdata.data[0].temp}°C`;
        }catch(error) {
            console.log("There Is An Error" , error)
        }
    } 
}

export { GetTheWeather }