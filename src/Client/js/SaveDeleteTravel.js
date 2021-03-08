function SaveDelete() {
    const SaveBTN = document.getElementById('SaveTrip');
    const RemoveBTN = document.getElementById('RemoveTrip');
    SaveBTN.style.visibility= "visible";
    RemoveBTN.style.visibility= "visible";
    SaveBTN.innerHTML = "Save Trip";
    RemoveBTN.innerHTML = "Remove Trip";
}

export { SaveDelete }