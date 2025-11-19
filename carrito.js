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
         
        icontCart.addEventListener('click', () =>{
            body.classList.toggle('showCart') 
        })
        closeCart.addEventListener('click', () =>{
             body.classList.toggle('showCart') 
        })

         
