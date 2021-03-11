const GetImageUrl = async(cityInput) => {
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
            document.getElementById('CountryImg').innerHTML=`<img src="${pixabaydata.hits[0].webformatURL}">`;
        }catch(error) {
            console.log("There Is An Error" , error)
        }
        if(cityInput ==""){
            alert('Please Enter The City');
            document.getElementById('CountryImg').innerHTML=`<img src="https://pixabay.com/get/g081bb226d8f7f14d33e4c2cb8286e93124ecb8fb40c9fbd058df17482490407f3b15aaddfe98829244989588ded448cdc001ac9b33d4dd605d0f47d609dea5a2_640.jpg">`;
        }; 
        if(pixabaydata.total == 0){
            alert('Please Enter The City Correct');
            document.getElementById('CountryImg').innerHTML=`<img src="https://pixabay.com/get/g081bb226d8f7f14d33e4c2cb8286e93124ecb8fb40c9fbd058df17482490407f3b15aaddfe98829244989588ded448cdc001ac9b33d4dd605d0f47d609dea5a2_640.jpg">`;
        };
    }
    const response = await PostData('http://localhost:7000/pixabayAdd'  , {cityInput})
    .then(pixabaydata=>{ UpdataUI(pixabaydata);});
};
export { GetImageUrl }