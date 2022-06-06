"use strict"

document.addEventListener("DOMContentLoaded", ()=> {
    AOS.init();

    // navigation
    let buttonMenu = document.querySelector('.header-row__menu');
    let menuNavigation = document.querySelector('.header-row__navigation')
    let headerNavigation = document.querySelector('header') 
    let menuSocial = document.querySelector('.header-row__social')
    let htmlFixed = document.querySelector('html');
    let links = document.querySelectorAll('.item-link');
    // console.log(links);

    buttonMenu.addEventListener('click',()=>{
        buttonMenu.classList.toggle('active');
        menuNavigation.classList.toggle('active_menu');
        headerNavigation.classList.toggle('active_header');
        htmlFixed.classList.toggle('fixed');
        menuSocial.classList.toggle('active_social');
    })
    for (let i = 0; i < links.length; i++) {
        // const element = array[index];
        if(window.screen.width<991){
            links[i].addEventListener("click",()=>{
                // console.log(links[i]);
                buttonMenu.classList.toggle('active');
                menuNavigation.classList.toggle('active_menu');
                headerNavigation.classList.toggle('active_header');
                htmlFixed.classList.toggle('fixed');
                menuSocial.classList.toggle('active_social');
            })
        }
    }
    window.addEventListener('scroll',()=>{
        // let menu = document
        // console.log(scrollY);
        if(scrollY>115){
            headerNavigation.style.backgroundColor="#17191D";
        }
        else{
            headerNavigation.style.backgroundColor="transparent";
        }
    })

    // end navigation

    // banner animation
    const banner = document.querySelector(".banner-row");
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
    const THRESHOLD = 10;
    function handleHover(e) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    banner.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }

    function resetStyles(e) {
        banner.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }

    if (!motionMatchMedia.matches) {
        banner.addEventListener("mousemove", handleHover);
        banner.addEventListener("mouseleave", resetStyles);
    }
    // end banner animation


    // tabs
    let tablink = document.getElementsByClassName("tablink");
    let tabcontent = document.getElementsByClassName("tabcontent");
    // console.log(tablink);
    for (let index = 0; index < tablink.length; index++) {    
        
        tablink[index].className = tablink[index].className.replace(" active", "");
        tablink[index].addEventListener("click",()=>{
            // alert('123');
            // console.log(tablink[index]);
            for (let i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            // console.log(tablink[index].className);
            document.getElementById(tablink[index].id).style.display="block";
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            event.currentTarget.className += " active";
        })        
    }
    // end tabs

    //radio
    const radioButtons = document.querySelectorAll('#radio')
    // console.log(radioButtons);
    for (let index = 0; index < radioButtons.length; index++) {
        // const element = array[index];
        if(radioButtons[index].checked){
            // console.log('123')
            radioButtons[index].parentElement.style.color="#fff";
            radioButtons[index].parentElement.style.backgroundColor="#FF0B53";
            radioButtons[index].nextElementSibling.style.cssText = "border: 3px solid #fff";

        }
    }
    //end radio

    // swiper
    const swiper = document.querySelector(".swiper");
    new Swiper(swiper, {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        touchStartPreventDefault: false,
        noSwiping: true,
        onlyExternal: true,
        grabCursor: false,
        mousewheelControl: true,
        spaceBetween: 20,          
        pagination: {
          el: '.swiper-pagination',
        },
      
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        
        scrollbar: {
          el: '.swiper-scrollbar',
        },      
      });
    // end swiper

   

    // popup
    let _functions = {};

    $(document).on('click', '.open-popup', function (e) {

        $('body').addClass('fixed');

        e.preventDefault();

        _functions.openPopup('.popup-content[data-rel="' + $(this).data('rel') + '"]');

    });
    _functions.openPopup = function (popup) {

        $('.popup-content').removeClass('active');

        $(popup + ', .popup-wrapper').addClass('active');

        // _functions.removeScroll();

    };
    _functions.closePopup = function () {

        $('.popup-wrapper, .popup-content').removeClass('active');
        $('body').removeClass('fixed');
    };

    $(document).on('click', '.popup-wrapper .close-popup, .popup-wrapper .layer-close', function (e) {

        e.preventDefault();

        _functions.closePopup();      

    });

    $(document).keyup(function (e) {

        if (e.keyCode === 27) {

            _functions.closePopup();

            e.preventDefault();

        }

    });



    // end popup




    
});