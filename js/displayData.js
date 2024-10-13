const displayAllPet = (pets) => {

    const petContainer = document.getElementById('pet-contaienr-section')
    petContainer.innerHTML = "";
    if (pets.length === 0) {
      petContainer.classList.remove("grid","gap-6");
      petContainer.innerHTML = `
      <div class = " flex gap-4 flex-col justify-center items-center py-12 px-12">
      
      <div>
      <img src ="assets/error.webp"></div>
       <h2 class = "text-4xl">No Information Available</h2>
       <p>It is a long established fact that a reader will be distracted by the readable content <br> of a page  when looking at 
its layout. The point of using Lorem Ipsum is that it has a.</p>

      
      </div>
     
      
      
      
      `
     
     }
     else{
      petContainer.classList.add("grid","gap-6");
    for (const pet of pets) {
      
      
     
      
      
        
        const div = document.createElement('div');
       
        
        div.classList = 'p-4 shadow-xl';
        div.innerHTML = `
        <figure>
                      <img class = "w-full h-[250px]"
                        src="${pet.image}" />
                    </figure>
                    <div class=" py-4">
                      <h2 class="card-title">
                        ${pet.pet_name}
                        
                      </h2>
                      <ul class="py-2">
                        <li class="flex gap-1 items-center"><img class="w-4 h-4" src="assets/icons8-dashboard-layout-24.png" alt="">${pet.breed}</li>
                        <li class="flex gap-1 items-center"><img class="w-4 h-4" src="assets/icons8-date-24.png" alt="">${(pet.date_of_birth !== null && pet.date_of_birth !== undefined)?pet.date_of_birth:"Not Available"}</li>
                        <li class="flex gap-1 items-center"><img class="w-4 h-4" src="assets/icons8-gender-24.png" alt="">${(pet.gender !== null && pet.gender !== undefined)?pet.gender:"Not Available"}</li>
                        <li class="flex gap-1 items-center"><img class="w-4 h-4" src="assets/icons8-dollar-24.png" alt="">${(pet.price !== null && pet.price !== undefined)?pet.price:"Not Available"}</li>
                       
                      </ul>
                      <div class=" flex flex-col md:flex-row gap-2 justify-between pt-4 items-start md:items-center">
                       <div><button onclick="loadPetById(${pet.petId})" class="btn  btn-sm mybutton"><img class="w-5 h-5" src="assets/icons8-facebook-like-48.png" alt=""></button></div>
                       <div class ="flex  flex-col md:flex-row gap-2 justify-between items-start md:items-center ">
                       <div><button id="adopbtn-${pet.petId}" onclick="adoptModal(${pet.petId})" class="btn  btn-sm mybutton">Adopt</button></div>
                        <div><button class = "btn  btn-sm mybutton" onclick = "loadDetailsModal(${pet.petId})" id= "details-btn" class="btn btn-outline btn-sm">Details</button></div>
                       </div>
                        
                      </div>
                    </div>
        
        
        
        
        `
        petContainer.appendChild(div);
        
       
        
    }
  }
  }
    


const displayPetCategory = (categories)=>{
    const categoryButtonContainer = document.getElementById('category-section');

    for (const category of categories) {
       const div = document.createElement("div");
                div.innerHTML = `
                 <button class= "btn mybutton btn-lg w-[250px] font-bold text-xl category-btn  mx-6"id= "btn-${category.category}" onclick="loadPetByCategory('${category.category}')"><img class = "w-8 h-8" src =${category.category_icon}> ${category.category}</button>


                 `
                 categoryButtonContainer.appendChild(div)



        
    }

}
const displayPetInSidebar = (petPhoto) =>{
  const sidebarPhotocontaineer = document.getElementById('sidebar-photo-container');
  const div = document.createElement('div');
  div.classList.add("p-4")
  div.innerHTML = `
  <figure>
    <img
      src= ${petPhoto.image}
      alt="Shoes" />
  </figure>
  
  
  
  `
  sidebarPhotocontaineer.appendChild(div)

}
const  petSortByPrice = (arr,property) =>{
  const petSort = arr.sort((a, b) => b[property] - a[property]);
  displayAllPet(petSort);
  
 


}
function DetailsModal (pet){
  const modal = document.getElementById('modal-container');
   modal.innerHTML = `
  <figure>
    <img class = "w-full"
      src=${pet.image}
      alt="Shoes" />
  </figure>
  <div>
    <h2 class="card-title text-2xl font-bold">
    ${pet.pet_name}
    </h2>
    
    
    <div class=" flex gap-2 justify-start items-center">
    <ul class="py-2">
                        <li class="flex gap-1 items-center"><img class="w-4 h-4" src="assets/icons8-dashboard-layout-24.png" alt="">${pet.breed}</li>
                        <li class="flex gap-1 items-center"><img class="w-4 h-4" src="assets/icons8-date-24.png" alt="">${pet.date_of_birth}</li>
                       
                      </ul>
                      <ul>
                       <li class="flex gap-1 items-center"><img class="w-4 h-4" src="assets/icons8-gender-24.png" alt="">${pet.gender}</li>
                        <li class="flex gap-1 items-center"><img class="w-4 h-4" src="assets/icons8-dollar-24.png" alt="">${pet.price}</li></ul>
                       

     
    </div>
    <hr class = "w-full py-2">
     <h3 class = "text-xl py-2">Details Information</h3>
                    <p class = "py-2">${pet.pet_details}</p>
  </div>
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn w-full btn-outline ">Close</button>
      </form>
    </div>
   
   
   
   
   
   `
   document.getElementById('customModal').showModal()


  
}
const adoptModal = (pet) =>{
  // const adoptBtn = document.getElementById(`adoptbtn-${pet}`);
  const sssssssss = pet;
  
 const adoptModalContainer =  document.getElementById('adopt-modal-container');

 adoptModalContainer.innerHTML = `

 

     <h3 class="text-lg font-bold text-center">Congratulation</h3>
    
     
     <div class = "text-5xl font-bold text-center py-4" id ="count-down"></div>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button id= "clickClose" class="btn">Close</button>
      </form>
    </div>
 
 
 `




  document.getElementById('adoptModal').showModal();
  countDown(sssssssss)



}
function countDown(adoptBtn){

  let countdownNumber = 4;
  const clickClose = document.getElementById('clickClose')

const countdownElement = document.getElementById('count-down');

const countdownInterval = setInterval(() => {
countdownNumber--;
countdownElement.textContent = countdownNumber;


if (countdownNumber <= 0) {
  
clearInterval(countdownInterval);
clickClose.click()
document.getElementById(`adopbtn-${adoptBtn}`).innerText = "Adopted"
document.getElementById(`adopbtn-${adoptBtn}`).classList.add("cursor-not-allowed")


}
}, 2000);
}

const spinner = document.getElementById('spinner');
const content = document.getElementById('content');

// Function to show the spinner
function showSpinner() {
    spinner.style.display = 'block';
    content.style.display = 'none'; // Hide content while loading
}

// Function to hide the spinner
function hideSpinner() {
    spinner.style.display = 'none';
    content.style.display = 'block'; // Show content when loading is done
}

// Example function to simulate loading
function loadData() {
    showSpinner();

    setTimeout(() => {

        hideSpinner(); 
        loadAllPet()
    }, 1000); 
}


loadData();


loadPetCategory()




        
        
        