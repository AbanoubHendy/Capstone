const BaseUrl = "http://api.geonames.org/findNearbyPostalCodes?";
const GenerateBtn = document.getElementById('generate');
GenerateBtn.addEventListener('click' , GenerateData);

 async function GenerateData(event) {
    event.preventDefault()
    const userInput = document.getElementById('TravelCountry').value;
    const res = await PostData('http://localhost:7000/add' , { userInput })
    UpdataUI(res);
}

const PostData = async (url = 'http://localhost:7000/add' , data = {})=> {
    console.log(data);
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

const UpdataUI = async res => {
    try{
        document.getElementById('latitude').innerHTML=`Lat: ${res.lat}`;
        document.getElementById('longitude').innerHTML=`Lon: ${res.lon}`;
        document.getElementById('country').innerHTML=`Country: ${res.country}`;
    }catch(error) {
        console.log("There Is An Error" , error)
    }
}
export { GenerateData }