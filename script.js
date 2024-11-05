let autocall
function scrollToElementWithOffset(id) {
    let element = document.getElementById(id);

    // Check if the element exists
    if (!element) {
        console.error(`Element with ID "${id}" not found.`);
        return; // Exit the function if the element doesn't exist
    }

    const header = document.querySelector('header'); // Adjust this selector to match your header
    const headerHeight = header ? header.offsetHeight : 0; // Get the header height or default to 0 if not found

    let elementPosition = element.getBoundingClientRect().top + window.scrollY; // Include the current scroll position
    let offsetPosition = elementPosition - headerHeight - 25; // Subtract the header height

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

function scrollPosition(){
    let currentScrollPosition = window.pageYOffset;
    
    if(currentScrollPosition >= 75){
        clearInterval(autocall)
        const header = document.getElementsByClassName("full_nav")[0]
        header.setAttribute('class', "only_nav full_nav")
        autocall = setInterval(scrollPosition,1000)
    }
    
}

autocall = setInterval(scrollPosition, 60);




