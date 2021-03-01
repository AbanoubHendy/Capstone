const GenerateBtn = document.getElementById('generate');
GenerateBtn.addEventListener('click' , GenerateData);

async function GenerateData(event) {
    event.preventDefault()
    const DateOfTravel = document.getElementById('TravelDate').value;
    Client.CountDown(DateOfTravel)
    const countryInput = document.getElementById('TravelCountry').value;
    console.log(countryInput);
    const res = await PostData('http://localhost:7000/Geoadd' , {countryInput})
    .then(data=>{ UpdataUI(data);})
}



const PostData = async (url = 'http://localhost:7000/Geoadd' , data = {})=> {
    console.log('data => ', {url, data })
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
        document.getElementById('longitude').innerHTML=`Lon: ${res.lng}`;
        document.getElementById('country').innerHTML=`Country: ${res.countryName}`;
    }catch(error) {
        console.log("There Is An Error" , error)
    }
}
export { GenerateData }