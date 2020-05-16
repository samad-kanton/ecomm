const toggleSearch_Devices = selector => {
    if(window.matchMedia('(min-width: 768px)').matches){
        selector.prop('placeholder', 'What are you looking for?');
    }
    else if(window.matchMedia('(min-width: 0px)').matches){
        selector.prop('placeholder', 'Search here...');
    }
};

export default { toggleSearch_Devices };