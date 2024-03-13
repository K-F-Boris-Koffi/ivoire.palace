// alert('Okay');



// 


function add_anim_in_time (elmt, class_anim, durtn)
{
    elmt.classList.add(class_anim)
    setTimeout
    (
        function ()
        {
            elmt.classList.remove(class_anim)
        }
        ,durtn
    )

}

// 


let mobileNav =
{
    button: document.getElementById('nav_btn'),
    navBox: document.getElementById('nav_box'),
    active: false,
    navBoxAnime: function()
    {
        add_anim_in_time(nav_box, "nav_anim", 300)   

    },
    display: function()
    {
        if(this.active==true)
        {
            this.navBox.classList.remove('nav_btn_active');
        }
        else
        {
            this.navBox.classList.add('nav_btn_active');
        }
    },
    Initial: function()
    {
        mobileNav.active = false;
        mobileNav.navBox.classList.add('nav_btn_active');
        mobileNav.button.classList.remove('nav_btn_icon2');
    }
}

mobileNav.button.addEventListener("click", clickOnNavButton)

function clickOnNavButton()
{
    mobileNav.navBoxAnime();
    if(mobileNav.active==false)
    {
        mobileNav.active = true;
        mobileNav.display();
        mobileNav.button.classList.add('nav_btn_icon2');
    }
    else
    {
        mobileNav.active = false;
        mobileNav.display();
        mobileNav.button.classList.remove('nav_btn_icon2');
    }

}


// script pour anuler la trasition avant le click sur le boutton de nav
window.addEventListener
(
        "resize", function()
        {
            if(window.innerWidth > 555)
            {
                if(mobileNav.active == true)
                {
                    mobileNav.Initial();
                }

            }
        }
    )




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
         e.preventDefault();
         mobileNav.Initial();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
     });
});
