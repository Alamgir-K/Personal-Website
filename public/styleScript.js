const delay = ms => new Promise(res => setTimeout(res, ms));


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// window.onresize = function() { 
//     location.reload(); 
//     // window.scrollTo(0, 0);
// }


const scrollSpeedFactor = 0.5;

function handleScroll(event) {
    event.preventDefault();
    const deltaY = event.deltaY;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollAmount = deltaY * scrollSpeedFactor;

    const newScrollTop = scrollTop + scrollAmount;
    window.scrollTo({ top: newScrollTop, behavior: 'auto' });
}

// window.addEventListener('wheel', handleScroll, { passive: false });




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
                // Lg Breakpoint: 1024px
                if (window.innerWidth >= 1024) {
                    element.style.left = Math.min(50.0, percentage - 50) + '%';
                }
                else {
                    // Left starts at ~13%
                    // Left ends at ~25%
                    element.style.left = Math.max(13.0, percentage - 75) + '%';
                }

            }
        }
    });
}

window.addEventListener('scroll', function () {
    let leftRevealElements = [...document.querySelectorAll('.reveal-left')];
    let rightRevealElements = [...document.querySelectorAll('.reveal-right')];
    leftRevealElements.forEach((element, index) => shiftLeft(element))
    rightRevealElements.forEach((element, index) => shiftRight(element))

});