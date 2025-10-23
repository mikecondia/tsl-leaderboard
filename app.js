const nameInput = document.querySelector('#enter-name');
const classInput = document.querySelector('#class-number');
const flagInput = document.querySelector('#country-select');

const displayArea = document.querySelector('#display-container');
const badgeContainer = document.querySelector('#badge-container')
const form = document.querySelector('#form-container');
// MEMBER DATA
const tslMembers =[];//Array Holding user data
 const formArray =[]
//FORM
form.addEventListener('submit',function(e){
    e.preventDefault();

    const form = e.target 
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox=> {
      tslMembers.push(checkbox.checked)
    }); 
    const tslMemberdata = {
      name: form.name.value,
      classNumber: form.number.value,
      country:form.country.value,
      badges: checkboxes, 
   }
    tslMembers.push(tslMemberdata);//push data into array
console.log(tslMemberdata);




   
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
});

   //  const newParagraph = document.createElement('div');
   //  const combinedText = nameInputValue.toUpperCase() + ' ' + noZero + ' ' + flagInputValue;
   //      newParagraph.textContent = combinedText;
   //      newParagraph.classList.add('appended-items')
   //       displayArea.appendChild(newParagraph);
         document.querySelector('#form-container').reset()
});





