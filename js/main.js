const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select Tab
function seleckItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border')
    // Grab Content from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add Show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove("show"));
}

// Click listener
tabItems.forEach(item => item.addEventListener('click', seleckItem));