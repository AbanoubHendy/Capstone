async function GetImageUrl(cityInput) {
    const PostData = async (url = 'http://localhost:7000/pixabayAdd' , pixabaydata = {})=> {
        console.log('data => ', {url, pixabaydata })
        const response = await fetch (url , {
            method: 'POST',
            credentials: 'same-origin' ,
            headers: {
                'Content-Type' : 'application/json' ,
            },
            body: JSON.stringify(pixabaydata),
        });
        try{
            const NewData = await response.json();
            console.log(NewData);
            return NewData;
        }catch(error) {
            console.log("There Is An Error" , error)
        }
    }

    const UpdataUI = async (pixabaydata) => {
        try{
            document.getElementById('CountryImg').innerHTML=`Lat: ${pixabaydata.hits[0].webformatURL}`;
        }catch(error) {
            console.log("There Is An Error" , error)
        }
    } 
}

export { GetImageUrl }