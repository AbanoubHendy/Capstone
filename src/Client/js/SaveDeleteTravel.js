const SaveBTN = document.getElementById('SaveTrip');
const RemoveBTN = document.getElementById('RemoveTrip');

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
}
const RemoveTheTrip = () => {
    alert("Your Travel Is Deleted:)")
}

export { RemoveTheTrip }
export { SaveTheTrip }
export { SaveDelete }
