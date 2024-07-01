const img = document.querySelector('img');
function updateImage(searchterm='cats') {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=RUKwO9cRlQpREvYaTkakpZ3aquANlSxV&s=${searchterm}`, {mode: 'cors'})
    .then(function(response) {
        if (!response.ok) { // status not in 200's
            throw new Error(response.status);
        }
        return response.json()
    })
    .then(function(response) {
        if (response.data.length !== 0) {
            img.src = response.data.images.original.url;
        } else {
            alert('No images were found with your search term');
        }
    })
    .catch((error) => {
        alert(`Error ${error}: unauthorized`);
    })
}
updateImage();

const newImage = document.getElementById('fetch-new-image');
newImage.addEventListener('click', updateImage);

const searchBar = document.querySelector('input[type=search]');
const submitSearch = document.querySelector('input[type=submit]');
submitSearch.addEventListener('click', () => {
    updateImage(searchBar.value);
});