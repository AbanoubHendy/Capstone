function CountDown(DateOfTravel) {
    const HolderColor = document.getElementById('holderEntry');
    HolderColor.style.backgroundColor = "rgb(19, 80, 82)";
    const NameOfCity = document.getElementById('TravelCity').value;
    const NowDate = new Date();
    const DateTravel = new Date(DateOfTravel);
    const TimeLeft = DateTravel - NowDate;
    const Days = Math.floor(TimeLeft / (1000 * 60 * 60 * 24))+1;
    console.log(Days);
    document.getElementById('countDown').innerHTML= `Your Travel To ${NameOfCity} Is After ${Days} Days`;
    if(TimeLeft < 0) {
        alert("Please Enter Your Travel Date Correct")
        document.getElementById('countDown').innerHTML= ""
    }
    if(DateOfTravel == "") {
        alert("Please Enter Your Travel Date")
        document.getElementById('countDown').innerHTML= ""
    }
}
export { CountDown }
