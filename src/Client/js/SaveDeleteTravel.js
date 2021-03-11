const SaveBTN = document.getElementById('SaveTrip');
const RemoveBTN = document.getElementById('RemoveTrip');
const cityInput = document.getElementById('TravelCity').value;

document.addEventListener('DOMContentLoaded', function () {
    SaveBTN.addEventListener('click' , SaveTheTrip)
    RemoveBTN.addEventListener('click' , RemoveTheTrip)
});

const SaveDelete = () => {
    SaveBTN.style.visibility= "visible";
    RemoveBTN.style.visibility= "visible";
    SaveBTN.innerHTML = "Save Trip";
    RemoveBTN.innerHTML = "Remove Trip";
}

const SaveTheTrip = () => {
    alert("Your Travel Is Saved:)")
    const MsgOfSave = document.querySelector('#holderEntry');
    MsgOfSave.textContent = `"THANK YOU FOR TRUSTING IN OUR APP HOPE YOU ENJOY YOUR TRAVEL"`;
    MsgOfSave.style.background= "none";
    MsgOfSave.style.color= "black";
    MsgOfSave.style.marginTop = "50px";
    MsgOfSave.style.marginBottom = "100px";
    MsgOfSave.style.textAlign= "center";
    MsgOfSave.style.backgroundColor= "grey";
}
const RemoveTheTrip = () => {
    alert("Your Travel Is Deleted:)")
    const MsgOfDelete = document.querySelector('#holderEntry');
    MsgOfDelete.textContent = `"Hope You Come Back Soon And Save Your Travel"`;
    MsgOfDelete.style.background= "none";
    MsgOfDelete.style.color= "black";
    MsgOfDelete.style.marginTop = "50px";
    MsgOfDelete.style.marginBottom = "100px";
    MsgOfDelete.style.textAlign= "center";
    MsgOfDelete.style.backgroundColor= "grey";
}

export { RemoveTheTrip }
export { SaveTheTrip }
export { SaveDelete }
