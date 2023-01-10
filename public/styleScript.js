const delay = ms => new Promise(res => setTimeout(res, ms));


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// window.onresize = function() { 
//     location.reload(); 
//     // window.scrollTo(0, 0);
// }


function getIntersectionRatio(element) {
    return new Promise((resolve) => {
        // Create an observer instance
        var observer = new IntersectionObserver((entries) => {
            // Get the first entry (should be the only entry)
            var entry = entries[0];
            // Retrieve the intersection ratio
            var intersectionRatio = entry.intersectionRatio;
            // Disconnect the observer
            observer.disconnect();
            // Resolve the promise with the intersection ratio
            resolve(intersectionRatio);
        });

        // Start observing the element
        observer.observe(element);
    });
}



function shiftLeft(element) {
    getIntersectionRatio(element).then((ratio) => {
        let percentage = ratio * 100
        if (percentage > 75) {
            if (element.getBoundingClientRect().left > 15) {
                element.style.left = Math.max(0, 100 - percentage) + '%';
            }
        }
    });
}

function shiftRight(element) {
    getIntersectionRatio(element).then((ratio) => {
        let percentage = ratio * 100
        if (percentage > 75) {
            if (window.innerWidth - element.getBoundingClientRect().right > 15) {
                element.style.left = Math.min(50.0, percentage - 50) + '%';
            }
        }
    });
}

window.addEventListener('scroll', function() {
    let leftRevealElements = [...document.querySelectorAll('.reveal-left')];
    let rightRevealElements = [...document.querySelectorAll('.reveal-right')];
    leftRevealElements.forEach((element, index) => shiftLeft(element))
    rightRevealElements.forEach((element, index) => shiftRight(element))

});