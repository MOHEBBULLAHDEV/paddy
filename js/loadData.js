const loadAllPet = async() =>{
    const url = "https://openapi.programming-hero.com/api/peddy/pets";
    const res = await fetch(url);
    const data = await res.json();
    displayAllPet(data.pets);
  
}
const loadAllPets = async() =>{
    const url = "https://openapi.programming-hero.com/api/peddy/pets";
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.pets,"price");
    petSortByPrice(data.pets,"price");



}
const loadPetCategory = async() =>{
    const url = "https://openapi.programming-hero.com/api/peddy/categories";
    const res = await fetch(url);
    const data = await res.json();
    displayPetCategory(data.categories);



}
const loadPetById = async(id) =>{
    const url = `https://openapi.programming-hero.com/api/peddy/pet/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPetInSidebar(data.petData);
    



}
const loadDetailsModal = async(id) =>{
    const url = `https://openapi.programming-hero.com/api/peddy/pet/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    DetailsModal(data.petData)



}
function removeClass(){
    buttonClass = document.getElementsByClassName('category-btn');
    for (const btn of buttonClass) {
        btn.classList.remove('activeButton');
        
    }
}

function loadPetByCategory(category) {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then (res =>  res.json())
    .then(data => {
        const activeButton = document.getElementById(`btn-${category}`);
        removeClass();
        activeButton.classList.add('activeButton');

        displayAllPet(data.data);


    })
    
}



