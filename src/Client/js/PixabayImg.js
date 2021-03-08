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
            document.getElementById('CountryImg').innerHTML=pixabaydata.webformatURL;
        }catch(error) {
            console.log("There Is An Error" , error)
        }
    } 
    const response = await PostData('http://localhost:7000/pixabayAdd'  , {cityInput})
    .then(pixabaydata=>{ UpdataUI(pixabaydata);});
};

export { GetImageUrl }