const SaveBTN = document.getElementById('SaveTrip');
SaveBTN.addEventListener('click' , SaveTheTrip)
const RemoveBTN = document.getElementById('RemoveTrip');
RemoveBTN.addEventListener('click' , RemoveTheTrip)
function SaveDelete() {
    SaveBTN.style.visibility= "visible";
    RemoveBTN.style.visibility= "visible";
    SaveBTN.innerHTML = "Save Trip";
    RemoveBTN.innerHTML = "Remove Trip";
}

function SaveTheTrip() {
    alert("Your Travel Is Saved:)")
    const MsgOfSave = document.querySelector('#holderEntry');
    MsgOfSave.textContent = `"THANK YOU FOR TRUSTING IN OUR APP HOPE YOU ENJOY YOUR TRAVEL"`;
    MsgOfSave.style.background= "none";
    MsgOfSave.style.color= "black";
}
function RemoveTheTrip(){
    alert("Your Travel Is Deleted:)")
    const MsgOfDelete = document.querySelector('#holderEntry');
    MsgOfDelete.textContent = `"Hope You Come Back Soon And Save Your Travel"`;
    MsgOfDelete.style.background= "none";
    MsgOfDelete.style.color= "black";
    MsgOfDelete.style.marginBottom = "100px";
}
export { RemoveTheTrip }
export { SaveTheTrip }
export { SaveDelete }