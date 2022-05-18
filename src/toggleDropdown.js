const toggleDropDown = (e) => {

    //for small drop down in header for versions
    const btn = document.querySelector('.version-selector');

    if (e.currentTarget == btn) {
    document.querySelector('.drop-down-small').classList.toggle('hide-version')
    };

    //for main menu drop down
    const menuBtn = document.querySelector('.menu-selector'); 
    if (e.currentTarget == menuBtn) {
    document.querySelector('.side-menu-container').classList.toggle('side-menu-container-show')
    console.log('menu')
    };
};


window.onload = () => {
    document.querySelector('.version-selector').addEventListener('click', toggleDropDown)
    document.querySelector('.menu-selector').addEventListener('click', toggleDropDown)
};

export {
    toggleDropDown
}