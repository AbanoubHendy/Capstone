const GetImageUrl = async(cityInput) => {
    //make an async function to get the url and the pixabay data from the post method and save the data
    const PostData = async (url = 'http://localhost:7000/pixabayAdd' , pixabaydata = {})=> {
        console.log('data => ', {url, pixabaydata })
        //make a fetch call for waiting the pixabay post method url from the server
        const response = await fetch (url , {
            method: 'POST',
            credentials: 'same-origin' ,
            headers: {
                'Content-Type' : 'application/json' ,
            },
            body: JSON.stringify(pixabaydata),
        });
        try{
            //add new data to make the user enter data more than once 
            const NewData = await response.json();
            console.log(NewData);
            //return the data that entered by the user
            return NewData;
        }catch(error) {
            console.log("There Is An Error" , error)
        }
    }
    //make an async function to get the pixabay data by using Get method and update the data in the UI
    const UpdataUI = async (pixabaydata) => {
        try{
            document.getElementById('CountryImg').innerHTML=`<img src="${pixabaydata.hits[0].webformatURL}">`;
        }catch(error) {
            console.log("There Is An Error" , error)
        }
        if(pixabaydata.total == 0){
            alert('Please Enter The City Correct');
            document.getElementById('CountryImg').innerHTML=`<img src="https://pixabay.com/get/g6764ed1962c8acb311f03027855cef094b3de352472ee1c0d8dcb468656ac6f188017d33a03c354f732ef95371446e1dcd0e2f70f2c8fdffa1593c55e656a1d2_640.jpg">`;
        };
    }
    //make an await call for postData function and pass cityInput 
    const response = await PostData('http://localhost:7000/pixabayAdd'  , {cityInput})
    //make a call for UpdateUI function
    .then(pixabaydata=>{ UpdataUI(pixabaydata);});
};
export { GetImageUrl }