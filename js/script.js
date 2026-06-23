const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            event.preventDefault();

            alert("Please fill in all fields.");

        } else {

            alert("Message submitted successfully!");

        }

    });

}
const searchInput = document.getElementById("productSearch");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let filter = searchInput.value.toLowerCase();

        let products = document.querySelectorAll(".card");

        products.forEach(function(product) {

            let text = product.innerText.toLowerCase();

            if (text.includes(filter)) {
                product.parentElement.style.display = "";
            } else {
                product.parentElement.style.display = "none";
            }

        });

    });

}