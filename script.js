var btn = document.querySelector(".btn")
btn.addEventListener("click", function () {
    var navn = document.querySelector("#søk").value;
    
    
    const url = `https://hp-api.onrender.com/api/characters`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                if (navn == element.name ) {
                    document.querySelector(".name").innerHTML = element.name;
                    document.querySelector(".round").src = element.image;
                    document.querySelector(".gender").innerHTML = element.gender;
                    document.querySelector(".Born").innerHTML = element.dateOfBirth;
                    document.querySelector(".info1").innerHTML = element.ancestry;
                    document.querySelector(".info2").innerHTML = element.eyeColour;
                    document.querySelector(".info3").innerHTML = element.hairColour;
                    document.querySelector(".info4").innerHTML = element.actor;

fetch(url)
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        
        var op = document.createElement("option")
        op.value= element.name;
        op.innerHTML = element.name;
        document.querySelector("#list").appendChild(op);
        
    });

})

                }

            });

        })

})

