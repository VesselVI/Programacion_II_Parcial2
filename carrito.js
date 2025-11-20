const toggleBtn = document.querySelector('.toggle-menu-btn');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

    
        toggleBtn.addEventListener('click', function() {
            dropdownMenu.classList.toggle('active');
        });

        
        dropdownLinks.forEach(link => {
            link.addEventListener('click', function() {
                dropdownMenu.classList.remove('active');
            });
        });

        
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.navHeader')) {
                dropdownMenu.classList.remove('active');
            }
        });


        let icontCart = document.querySelector('.logo-cart');
        let closeCart = document.querySelector('.close');
        let body = document.querySelector('body'); 
        let listProductHTML = document.querySelector('.listProduct')
        let listCartHTML = document.querySelector('.listCart');
        let icontCartSpan = document.querySelector('.logo-cart span')

        let listProducts = [];
        let carts = [];
        icontCart.addEventListener('click', () =>{
            body.classList.toggle('showCart') 
        })
        closeCart.addEventListener('click', () =>{
             body.classList.toggle('showCart') 
        })

        const initApp = () => { //Con esta funcion consigo la data del JSon
            fetch('/products.json')
            .then(response => response.json())
            .then(data => {
                listProducts = data;
                
                addDataToHTML();
            })
        }
        
        const addDataToHTML = () => {
            listProductHTML.innerHTML = '';
            listProducts.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.classList.add('item');
                newProduct.dataset.id = product.id;
                newProduct.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <div class="price">$${product.price}</div>
                    <button class="addCart">Comprar</button>
                `;
                listProductHTML.appendChild(newProduct);
            });
        }
        listProductHTML.addEventListener('click', (event) =>{
            let positionClick = event.target;
            if(positionClick.classList.contains('addCart')){
                let product_id = positionClick.parentElement.dataset.id;
                addToCart(product_id);
                
            }
        })
        const addToCart = (product_id) => {
            let positionThisProductIncart = carts.findIndex((value) => value.product_id == product_id);
            if(carts.length <= 0){
                carts = [ {
                    product_id: product_id,
                    quantity: 1
                }]
            }else if (positionThisProductIncart < 0){
                carts.push({
                    product_id: product_id,
                    quantity:1
                });
            }else{
                carts[positionThisProductIncart].quantity = carts[positionThisProductIncart].quantity +1;
            }
            addCartToHTML();
            
        }
        const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    if (carts.length > 0) {

        carts.forEach(cart => {
            let product = listProducts.find(p => p.id == cart.product_id);

            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.innerHTML = `
                <div class="image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="name">${product.name}</div>
                <div class="totalPrice">$${product.price * cart.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${cart.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
            listCartHTML.appendChild(newCart);
        });
    }
};
       
        
        initApp();