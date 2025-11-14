const nameInput = document.querySelector('#enter-name');
const classInput = document.querySelector('#class-number');
const flagInput = document.querySelector('#country-select');

const displayArea = document.querySelector('#display-container');
const badgeContainer = document.querySelector('#badge-container');
const form= document.querySelector('#form-container');

 
// MEMBER DATA
const formSubmissions =[];//Array Holding user data
//SORTING FUNCTION
// function sortByMostValues(arr, key) {
//   return arr.sort((a, b) => {
//     const aCount = Array.isArray(a[key]) ? a[key].length : 0;
//     const bCount = Array.isArray(b[key]) ? b[key].length : 0;
//     return bCount - aCount; // most to least
//   });
// }
// // //  Example:

// const sortedUsers = sortByMostValues(formSubmissions, 'badges');
// console.log(sortedUsers);
// Output:

// [
//   { name: 'Charlie', hobbies: ['cycling', 'hiking', 'traveling', 'cooking'] },
//   { name: 'Alice', hobbies: ['reading', 'running', 'music'] },
//   { name: 'Bob', hobbies: ['gaming'] }
// ]

//FORM
form.addEventListener('submit',function(e){
    e.preventDefault();
   //        if (!form.checkValidity()) {
   //    //   e.preventDefault(); // prevent submission
   //      showAlert();
   //    }
   //  });
  
  
   
   

    const form = e.target 
    const checkboxes = document.querySelectorAll('input[name="thing"]:checked');
    checkboxes.forEach(checkbox=> {
      formSubmissions.push(checkbox.checked)
    }); 
    const tslMemberdata = {
      name: form.name.value,
      classNumber: form.number.value,
      country:form.country.value,
      badges: checkboxes
   }
   formSubmissions.push(tslMemberdata);//push data into array
   console.log(tslMemberdata)
//    function sortByMostValues(arr, key) {
//   return arr.sort((a, b) => {
//     const aCount = Array.isArray(a[key]) ? a[key].length : 0;
//     const bCount = Array.isArray(b[key]) ? b[key].length : 0;
//     return bCount - aCount; // most to least
//   });
// }
// //  Example:

// const sortedUsers = sortByMostValues(formSubmissions, 'badges');
// console.log(sortedUsers);


 const nameInputValue = nameInput.value; 
    const nameDiv = document.createElement('p');
    nameDiv.textContent = nameInputValue;  

    const classInputValue = classInput.value; 
    let noZero = parseFloat(classInputValue); 
    const classDiv = document.createElement('p');
    classDiv.textContent = noZero; 
   
    const flagInputValue = flagInput.value;
    const flagDiv = document.createElement('p');
    flagDiv.textContent = flagInputValue; 

    const newParagraph = document.createElement('div');
    const combinedText = nameInputValue.toUpperCase() + ' ' + noZero + ' ' + flagInputValue;
        newParagraph.textContent = combinedText;
        newParagraph.classList.add('appended-items')
         displayArea.appendChild(newParagraph);
     // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "💀";
  deleteBtn.style.marginLeft = "20px";
      deleteBtn.addEventListener("click", function() {
    newParagraph.remove();
    listItem.remove();
  });
  newParagraph.appendChild(deleteBtn);

    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkedCheckboxes.forEach(checkbox => {

            const listItem = document.createElement('div');
            listItem.classList.add('appended-badges');
             listItem.textContent = checkbox.id;
             if (listItem.textContent === "coin"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/coin-100x100.png")';
             }
              if (listItem.textContent === "ancestry"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/ancestry.png")';
             }
              if (listItem.textContent === "angler"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Angler-Badge.png")';
             }
             if (listItem.textContent === "archery"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Archery-Badge.png")';
             }
            if (listItem.textContent === "art"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Artist-Badge.png")';
             }
             if (listItem.textContent === "astronomer"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Astronomer-Badge.png")';
             }
             if (listItem.textContent === "backyardchef"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Backyard-Chef-Badge.png")';
             }
             if (listItem.textContent === "backyardfarmer"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Backyard-Farmer-Badge.png")';
             }
             if (listItem.textContent === "barbell"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Barbell-Badge.png")';
             }
             if (listItem.textContent === "biography"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Biography-Badge-1.png")';
             }
              if (listItem.textContent === "citizenship"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Citizenship-Badge.png")';
             }
            if (listItem.textContent === "classics"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Classics-Badge.png")';
             }
            if (listItem.textContent === "communityservice"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Community-Service-Badge.png")';
             }
            if (listItem.textContent === "craftsman"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Craftsman-Badge.png")';
             }
            if (listItem.textContent === "easyrider"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Easyrider-Badge.png")';
             }
            if (listItem.textContent === "emergency"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Emergency-Prepping-Badge.png")';
             }
            if (listItem.textContent === "entreprenuership"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Entrepreneurship-Badge.png")';
             }
               if (listItem.textContent === "fighter"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Fighter-Badge.png")';
             }
            if (listItem.textContent === "fire"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Firebuilding-Badge.png")';
             }
            if (listItem.textContent === "firstaid"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/First-Aid-Badge.png")';
             }
               if (listItem.textContent === "frogman"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Frogman-Badge.png")';
             }
               if (listItem.textContent === "gearhead"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Automotive-Maintenance-Badge.png")';
             }
               if (listItem.textContent === "scholar"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Gentleman-Scholar-Badge.png")';
             }
               if (listItem.textContent === "hacker"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Hacker-Badge.png")';
             }
                if (listItem.textContent === "handyman"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Handyman-Badge.png")';
             }
               if (listItem.textContent === "host"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Host-Badge.png")';
             }
             if (listItem.textContent === "hunting"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Hunter-Badge.png")';
             }
            if (listItem.textContent === "infosec"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Infosecurity-Badge.png")';
             }
            if (listItem.textContent === "infosec"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Infosecurity-Badge.png")';
             }
             if (listItem.textContent === "journaling"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Journaling-Badge.png")';
             }
            if (listItem.textContent === "kissthechef"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Kiss-the-Chef-Badge.png")';
             }
              if (listItem.textContent === "knot"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Knotmanship-Badge-1.png")';
             }
              if (listItem.textContent === "letter"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Letter-Writing-Badge.png")';
             }
             if (listItem.textContent === "lumberjack"){
               listItem.style.backgroundImage = 'url("images/tsl_badges/Lumberjack-Badge.png")'; 
             }
              if (listItem.textContent === "lock"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Lock-Picking-Badge.png")';
             }
              if (listItem.textContent === "lumbrjack"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Lumberjack-Badge.png")';
             }
               if (listItem.textContent === "microadventure"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Microadventure-Badge.png")';
             }
               if (listItem.textContent === "monk"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Monk-Badge-Web.png")';
             }
               if (listItem.textContent === "ranger"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Mountain-Ranger-Badge.png")';
             } 
               if (listItem.textContent === "music"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Musician-Badge.png")';
             } 
               if (listItem.textContent === "orator"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Orator-Badge.png")';
             } 
              if (listItem.textContent === "outdoorsman"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/All-Around-Outdoorsman-Badge.png")';
             } 
               if (listItem.textContent === "family"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Paterfamilia-Badge.png")';
             } 
              if (listItem.textContent === "penmanship"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Penmanship-Badge.png")';
             } 
               if (listItem.textContent === "finance"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Personal-Finance-Badge.png")';
             } 
                if (listItem.textContent === "polyglot"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Foreign-Language-Badge-Web.png")';
             } 
                if (listItem.textContent === "roughrider"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Roughrider-Badge.png")';
             } 
                 if (listItem.textContent === "rucking"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Ruck-Badge.png")';
             } 
                  if (listItem.textContent === "sales"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Salesmanship-Badge.png")';
             } 
                 if (listItem.textContent === "sartorialist"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Sartorialist-Badge.png")';
             } 
                 if (listItem.textContent === "scout"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Scout-Badge.png")';
             } 
                if (listItem.textContent === "sharpshooter"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Sharpshooter-Badge.png")';
             } 
               if (listItem.textContent === "shaving"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Shaving-Badge.png")';
             } 
               if (listItem.textContent === "sheepdog"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Sheepdog-Badge.png")';
             } 
              if (listItem.textContent === "social"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Social-Dynamo-Badge.png")';
             } 
               if (listItem.textContent === "tracker"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Tracking-Badge.png")';
             } 
               if (listItem.textContent === "virtue"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Virtue-Badge.png")';
             } 
               if (listItem.textContent === "wilderness"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/Wilderness-Survival-Badge.png")';
             } 
               if (listItem.textContent === "agons"){
                listItem.style.backgroundImage = 'url("images/tsl_badges/agons.png")';
             }


       displayArea.appendChild(listItem); 
          deleteBtn.addEventListener("click", function() {
    listItem.remove();
  });
         // Scroll to the newly added element smoothly
      listItem.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
});
         document.querySelector('#form-container').reset()
});






// Let’s say your HTML looks like this:

// <form id="userForm">
//   <input type="text" id="name" placeholder="Name" required />
//   <input type="text" id="hobbies" placeholder="Comma-separated hobbies" required />
//   <button type="submit">Add User</button>
// </form>

// <ul id="userList"></ul>
// 💻 JavaScript

// const users = [];

// const form = document.getElementById('userForm');
// const list = document.getElementById('userList');

// function renderUsers() {
//   // Sort by number of hobbies
//   const sorted = sortByMostValues(users, 'hobbies');

//   // Clear and re-render
//   list.innerHTML = '';
//   sorted.forEach(user => {
//     const li = document.createElement('li');
//     li.textContent = `${user.name} (${user.hobbies.length} hobbies)`;
//     list.appendChild(li);
//   });
// }

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   const name = document.getElementById('name').value.trim();
//   const hobbiesInput = document.getElementById('hobbies').value.trim();

//   if (name && hobbiesInput) {
//     const hobbies = hobbiesInput.split(',').map(h => h.trim()).filter(Boolean);
//     users.push({ name, hobbies });
//     renderUsers();
//     form.reset();
//   }
// });

// // Utility sort function
// function sortByMostValues(arr, key) {
//   return arr.sort((a, b) => {
//     const aCount = Array.isArray(a[key]) ? a[key].length : 0;
//     const bCount = Array.isArray(b[key]) ? b[key].length : 0;
//     return bCount - aCount;
//   });
// }
