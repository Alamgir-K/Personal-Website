const delay = ms => new Promise(res => setTimeout(res, ms));

let leftRevealElements = []
let rightRevealElements = []

// const elementsToRemove = ['landing-bg-2', 'landing-bg-3']

// async function removeElements() {
//     await delay(50)
//     if (window.outerWidth < 1024) {
//         for (const id of elementsToRemove) {
//             const element = document.getElementById(id);
//             console.log(element)
//             element && element.remove()
//         }
//     }
    
// }

// if (window.outerWidth < 1024) {
//     removeElements()
// }

// window.onresize = removeElements

function watchForReveal() {
    window.addEventListener('scroll', () => {
        let scrollFactor = 1.0
        let scrolled = window.pageYOffset * 0.1
        let leftIndex = 0
        let leftStagger = 25
        let translate = scrollFactor * scrolled
        const translateCopy = translate

        for (const leftRevealElement of leftRevealElements) {
            leftIndex++
            const currentLeft = window.scrollX + leftRevealElement.getBoundingClientRect().left
            console.log(translate)

            if (leftIndex > 1) {
                translate = scrollFactor * scrolled - leftStagger
                leftStagger = leftStagger * 2
            }

            if (currentLeft > 10.0) {
                leftRevealElement.style.transform = `translateX(-${translate}%)`
            }
        }
        
        let rightIndex = 0
        let rightStagger = 25
        translate = translateCopy

        for (const rightRevealElement of rightRevealElements) {
            rightIndex++
            const currentRight = window.scrollX + rightRevealElement.getBoundingClientRect().right

            if (rightIndex > 1) {
                translate = scrollFactor * scrolled - rightStagger
                rightStagger = rightStagger * 2
            }

            if (currentRight < window.innerWidth - 10.0) {
                rightRevealElement.style.transform = `translateX(${translate}%)`
            }
        }
    })
}  

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            watchForReveal()

        }
    })
})


async function scrollReveal() {
    await delay(50)
    leftRevealElements = document.querySelectorAll('.reveal-left')
    rightRevealElements = document.querySelectorAll('.reveal-right')
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal')
    scrollRevealElements.forEach((el) => observer.observe(el))
}


// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }

scrollReveal()

