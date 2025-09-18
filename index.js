newFunction();




const trans = []











function newFunction() {

    const cardElements = Array.from(document.querySelectorAll('[id^="card"]'));
    cardElements.forEach(cardEl => {
        cardEl.addEventListener("click", function (e) {
            e.preventDefault();
            const blance = 1;
           
           
            const targetId = cardEl.id === "card2" ? "card2" : "card2";
            const cardValue = parseInt(document.getElementById(targetId).innerText, 10);
            const newcard = cardValue + blance;
            document.getElementById(targetId).innerText = newcard;
        });
    });
}





document.getElementById("copy1").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("copy").innerText, 10);
const total = object2 + object;

document.getElementById("copy").innerText = total

// console.log(total);

})



document.getElementById("copy2").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("copy").innerText, 10);
const total = object2 + object;

document.getElementById("copy").innerText = total

// console.log(total);

})
document.getElementById("copy3").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("copy").innerText, 10);
const total = object2 + object;

document.getElementById("copy").innerText = total

// console.log(total);

})

document.getElementById("copy4").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("copy").innerText, 10);
const total = object2 + object;

document.getElementById("copy").innerText = total

// console.log(total);

})

document.getElementById("copy5").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("copy").innerText, 10);
const total = object2 + object;

document.getElementById("copy").innerText = total

// console.log(total);

})

document.getElementById("copy6").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("copy").innerText, 10);
const total = object2 + object;

document.getElementById("copy").innerText = total

// console.log(total);

})

document.getElementById("copy7").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("copy").innerText, 10);
const total = object2 + object;

document.getElementById("copy").innerText = total

// console.log(total);

})

document.getElementById("copy8").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("copy").innerText, 10);
const total = object2 + object;

document.getElementById("copy").innerText = total

// console.log(total);

})

document.getElementById("copy9").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("copy").innerText, 10);
const total = object2 + object;

document.getElementById("copy").innerText = total

// console.log(total);

})

// document.getElementById("call1","call2","call3","call4","call5","call6","call7","call8","call9").addEventListener("click", function (e) {
//     e.preventDefault();
//     if(
//         this.clicked = true
//     )
// })


















document.getElementById("call1").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("call").innerText, 10);
const total = object2 - object;

document.getElementById("call").innerText = total
alert("National Emergency Number")







const data = {
    name: "National Emergency Number",
   date: new Date().toDateString()
}
trans.push(data)




// console.log(total);

})

document.getElementById("call2").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("call").innerText, 10);
const total = object2 - object;

document.getElementById("call").innerText = total
alert("Police Helpline Number ")
// console.log(total);


const data = {
    name: "Police Helpline Number",
   date: new Date().toDateString()
}
trans.push(data)








})

document.getElementById("call3").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("call").innerText, 10);
const total = object2 - object;

document.getElementById("call").innerText = total
alert("Fire Service Helpline Number ")
// console.log(total);


const data = {
    name: "Fire Service Helpline Number",
   date: new Date().toDateString()
}
trans.push(data)







})

document.getElementById("call4").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("call").innerText, 10);
const total = object2 - object;

document.getElementById("call").innerText = total

// console.log(total);
alert("Ambulance Service Helpline Number ")

const data = {
    name: "Ambulance Service Helpline Number",
   date: new Date().toDateString()
}
trans.push(data)


})

document.getElementById("call5").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("call").innerText, 10);
const total = object2 - object;

document.getElementById("call").innerText = total

// console.log(total);
alert("NWomen & Child Helpline ")

const data = {
    name: "NWomen & Child Helpline",
   date: new Date().toDateString()
}















})

document.getElementById("call6").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("call").innerText, 10);
const total = object2 - object;

document.getElementById("call").innerText = total

// console.log(total);
alert("Anti-Corruption Helpline ")

const data = {
    name: "Anti-Corruption Helpline",
   date: new Date().toDateString()
}
trans.push(data)




})

document.getElementById("call7").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("call").innerText, 10);
const total = object2 - object;

document.getElementById("call").innerText = total

// console.log(total);
alert("Electricity Helpline ")



const data = {
    name: "Electricity Helpline",
   date: new Date().toDateString()
}
trans.push(data)




})

document.getElementById("call8").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("call").innerText, 10);
const total = object2 - object;

document.getElementById("call").innerText = total

// console.log(total);
alert("Brac Helpline")


const data = {
    name: "Brac Helpline",
   date: new Date().toDateString()
}
trans.push(data)


})

document.getElementById("call9").addEventListener("click", function (e) {
    e.preventDefault();

const object = 1
const object2 = parseInt(document.getElementById("call").innerText, 10);
const total = object2 - object;

document.getElementById("call").innerText = total

// console.log(total);
alert("Bangladesh Railway Helpline ")

// Declare array to store transactions


// আগে একটা খালি array বানাই
const trans = [];

function addTransaction(name) {
    const data = {
        name: name,
        date: new Date().toLocaleDateString()
    };
    trans.push(data); // এখন trans আছে, তাই push কাজ করবে
}

addTransaction("Bangladesh Railway Helpline");
})

















// transaction
document.getElementById("call9").addEventListener("click", function (e) {
    e.preventDefault();

    const transform22 = document.getElementById("transform2");

    // Clear transform22 to prevent duplicate cards
    transform22.innerHTML = "";

    for (const data of trans) {
        // Create wrapper div
        const div = document.createElement("div");
        div.classList.add("card", "card-dash", "bg-base-100", "mt-2.5", "w-96");

        // Set card-body content
        div.innerHTML = `
            <div class="card-body">
                <h2 class="card-title font-bold text-lg">${data.name}</h2>
                <p class="font-bold">Free services</p>
                <p class="text-gray-600">${data.date}</p>
            </div>
        `;

        // Append the div to transform22
        transform22.appendChild(div);
    }
});

// transaction
document.getElementById("call1").addEventListener("click", function (e) {
    e.preventDefault();

    const transform22 = document.getElementById("transform2");

    // Clear transform22 to prevent duplicate cards
    transform22.innerHTML = "";

    for (const data of trans) {
        // Create wrapper div
        const div = document.createElement("div");
        div.classList.add("card", "card-dash", "bg-base-100", "mt-2.5", "w-96");

        // Set card-body content
        div.innerHTML = `
            <div class="card-body">
                <h2 class="card-title font-bold text-lg">${data.name}</h2>
                <p class="font-bold">Free services</p>
                <p class="text-gray-600">${data.date}</p>
            </div>
        `;

        // Append the div to transform22
        transform22.appendChild(div);
    }
});

// transaction
document.getElementById("call2").addEventListener("click", function (e) {
    e.preventDefault();

    const transform22 = document.getElementById("transform2");

    // Clear transform22 to prevent duplicate cards
    transform22.innerHTML = "";

    for (const data of trans) {
        // Create wrapper div
        const div = document.createElement("div");
        div.classList.add("card", "card-dash", "bg-base-100", "mt-2.5", "w-96");

        // Set card-body content
        div.innerHTML = `
            <div class="card-body">
                <h2 class="card-title font-bold text-lg">${data.name}</h2>
                <p class="font-bold">Free services</p>
                <p class="text-gray-600">${data.date}</p>
            </div>
        `;

        // Append the div to transform22
        transform22.appendChild(div);
    }
});

// transaction
document.getElementById("call3").addEventListener("click", function (e) {
    e.preventDefault();

    const transform22 = document.getElementById("transform2");

    // Clear transform22 to prevent duplicate cards
    transform22.innerHTML = "";

    for (const data of trans) {
        // Create wrapper div
        const div = document.createElement("div");
        div.classList.add("card", "card-dash", "bg-base-100", "mt-2.5", "w-96");

        // Set card-body content
        div.innerHTML = `
            <div class="card-body">
                <h2 class="card-title font-bold text-lg">${data.name}</h2>
                <p class="font-bold">Free services</p>
                <p class="text-gray-600">${data.date}</p>
            </div>
        `;

        // Append the div to transform22
        transform22.appendChild(div);
    }
});

// transaction
document.getElementById("call4").addEventListener("click", function (e) {
    e.preventDefault();

    const transform22 = document.getElementById("transform2");

    // Clear transform22 to prevent duplicate cards
    transform22.innerHTML = "";

    for (const data of trans) {
        // Create wrapper div
        const div = document.createElement("div");
        div.classList.add("card", "card-dash", "bg-base-100", "mt-2.5", "w-96");

        // Set card-body content
        div.innerHTML = `
            <div class="card-body">
                <h2 class="card-title font-bold text-lg">${data.name}</h2>
                <p class="font-bold">Free services</p>
                <p class="text-gray-600">${data.date}</p>
            </div>
        `;

        // Append the div to transform22
        transform22.appendChild(div);
    }
});

// transaction
document.getElementById("call5").addEventListener("click", function (e) {
    e.preventDefault();

    const transform22 = document.getElementById("transform2");

    // Clear transform22 to prevent duplicate cards
    transform22.innerHTML = "";

    for (const data of trans) {
        // Create wrapper div
        const div = document.createElement("div");
        div.classList.add("card", "card-dash", "bg-base-100", "mt-2.5", "w-96");

        // Set card-body content
        div.innerHTML = `
            <div class="card-body">
                <h2 class="card-title font-bold text-lg">${data.name}</h2>
                <p class="font-bold">Free services</p>
                <p class="text-gray-600">${data.date}</p>
            </div>
        `;

        // Append the div to transform22
        transform22.appendChild(div);
    }
});

// transaction
document.getElementById("call6").addEventListener("click", function (e) {
    e.preventDefault();

    const transform22 = document.getElementById("transform2");

    // Clear transform22 to prevent duplicate cards
    transform22.innerHTML = "";

    for (const data of trans) {
        // Create wrapper div
        const div = document.createElement("div");
        div.classList.add("card", "card-dash", "bg-base-100", "mt-2.5", "w-96");

        // Set card-body content
        div.innerHTML = `
            <div class="card-body">
                <h2 class="card-title font-bold text-lg">${data.name}</h2>
                <p class="font-bold">Free services</p>
                <p class="text-gray-600">${data.date}</p>
            </div>
        `;

        // Append the div to transform22
        transform22.appendChild(div);
    }
});

// transaction
document.getElementById("call7").addEventListener("click", function (e) {
    e.preventDefault();

    const transform22 = document.getElementById("transform2");

    // Clear transform22 to prevent duplicate cards
    transform22.innerHTML = "";

    for (const data of trans) {
        // Create wrapper div
        const div = document.createElement("div");
        div.classList.add("card", "card-dash", "bg-base-100", "mt-2.5", "w-96");

        // Set card-body content
        div.innerHTML = `
            <div class="card-body">
                <h2 class="card-title font-bold text-lg">${data.name}</h2>
                <p class="font-bold">Free services</p>
                <p class="text-gray-600">${data.date}</p>
            </div>
        `;

        // Append the div to transform22
        transform22.appendChild(div);
    }
});

// transaction
document.getElementById("call8").addEventListener("click", function (e) {
    e.preventDefault();

    const transform22 = document.getElementById("transform2");

    // Clear transform22 to prevent duplicate cards
    transform22.innerHTML = "";

    for (const data of trans) {
        // Create wrapper div
        const div = document.createElement("div");
        div.classList.add("card", "card-dash", "bg-base-100", "mt-2.5", "w-96");

        // Set card-body content
        div.innerHTML = `
            <div class="card-body">
                <h2 class="card-title font-bold text-lg">${data.name}</h2>
                <p class="font-bold">Free services</p>
                <p class="text-gray-600">${data.date}</p>
            </div>
        `;

        // Append the div to transform22
        transform22.appendChild(div);
    }
});

// // transaction
// document.getElementById("call9").addEventListener("click", function (e) {
//     e.preventDefault();

//     const transform22 = document.getElementById("transform2");

//     // Clear transform22 to prevent duplicate cards
//     transform22.innerHTML = "";

//     for (const data of trans) {
//         // Create wrapper div
//         const div = document.createElement("div");
//         div.classList.add("card", "card-dash", "bg-base-100", "mt-2.5", "w-96");

//         // Set card-body content
//         div.innerHTML = `
//             <div class="card-body">
//                 <h2 class="card-title font-bold text-lg">${data.name}</h2>
//                 <p class="font-bold">Free services</p>
//                 <p class="text-gray-600">${data.date}</p>
//             </div>
//         `;

//         // Append the div to transform22
//         transform22.appendChild(div);
//     }
// });





















document.getElementById("call9").addEventListener("click", function (e) {
    e.preventDefault();

const transform22 = document. getElementById("transform2")
    e.preventDefault();

for (const data of trans) {
    const div = document.createElement("div")
    div.innerHTML = `
        <div class="card card-dash bg-base-100 mt-2.5 w-96">
            <div class="card-body">
                <h2 class="card-title font-bold text-lg ">${data.name}</h2>
                <p class="font-bold">Free services</p>
                <p class="text-gray-600">${data.date}</p>
            </div>
        </div>
    `


    transform22.appendChild(div)
  
}




})






    







