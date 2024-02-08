
const price = function(){
    const searchTool= document.querySelector('#maxPrice') 
}




















const search = function() {
    const searchBox = document.querySelector('#location').value.toLowerCase();
    const product = document.querySelectorAll('.col-md-4');

    for (let i = 0; i < product.length; i++) {
        let match = product[i].querySelector('h3');

        if (match) {
            let textValue = match.textContent.toLowerCase();

            if (textValue.includes(searchBox)) {
                product[i].style.display = "block";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}
