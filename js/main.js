
    //nav menu - hamburger menu
    let menuIcon = document.querySelector('#menu-icon');
    let closeMenuIcon = document.querySelector('#close-icon');
    let menuMob = document.querySelector('#headerMobile');
    let isVisible = false;

    menuIcon.addEventListener('click', toggleMenu);
    closeMenuIcon.addEventListener('click', toggleMenu);

    function toggleMenu() {

        if (!isVisible) {

            menuMob.style.display = 'block';
            closeMenuIcon.style.display = 'block';
            menuIcon.style.display = 'none';
        }else {
            menuMob.style.display = 'none';
            closeMenuIcon.style.display = 'none';
            menuIcon.style.display = 'block';
        }
        isVisible = !isVisible;
    }
   
