document.addEventListener("DOMContentLoaded", () => {
    const displayBar = document.getElementById("character-bar");
   const selectedAnimal=null
    const animals = [
      {
        id: 1,
        name: "Mr. Cute",
        image: "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
        votes: 0
      },
      {
        id: 2,
        name: "Mx. Monkey",
        image: "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
        votes: 0
      },
      {
        id: 3,
        name: "Ms. Zebra",
        image: "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
        votes: 0
      },
      {
        id: 4,
        name: "Dr. Lion",
        image: "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
        votes: 0
      },
      {
        id: 5,
        name: "Mme. Panda",
        image: "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
        votes: 0
      }
    ];
  
    function displayAnimalList() {
      animals.forEach((animal) => {
        const animalName = document.createElement("p");
        animalName.textContent = animal.name; 
        animalName.addEventListener("click", () => {
          displayAnimalDetails(animal);
        });
  
        displayBar.appendChild(animalName); // Use appendChild
      });
    }

    // Call the function to display the animal list
  displayAnimalList();
});
function displayAnimalDetails(animal){
    if(!animal){
        return
    }
    console.log(animal)
   selectedAnimal=animal
    const animalNameElement = document.getElementById("name");
    const animalImageElement = document.getElementById("image");
    const animalVotesElement = document.getElementById("vote-count");
    animalNameElement.textContent = animal.name ;
   animalImageElement.src = animal.image;
   animalVotesElement.textContent = animal.votes ;
   


    const voteForm = document.getElementById("votes-form");
    voteForm.addEventListener("submit",(e) => {
       e.preventDefault();
      const voteForminput = document.getElementById("votes");
      console.log(voteForminput)
      if(voteForminput.value==0)return
        const votes = parseInt(voteForminput.value) || 0;
        console.log(voteForminput.value)
        console.log(animal,votes)
       animalVotesElement.innerText = selectedAnimal.votes+votes;
       selectedAnimal.votes += votes;
       displayAnimalDetails();
        voteForminput.value = "";

    } );


  }
  let resetbtn= document.getElementById("reset-btn");
  resetbtn.addEventListener("click",function(){
  resetVotes();
  } );
  function resetVotes() {
    if (!selectedAnimal) {
      return; // No animal selected, nothing to reset
    }
  
    // Reset the votes for the selected animal to zero
    selectedAnimal.votes = 0;
  
    // Update the vote count displayed in the UI to '0'
    const animalVotesElement = document.getElementById("vote-count");
    animalVotesElement.textContent = "0";
  }

  
  