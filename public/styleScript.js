const delay = ms => new Promise(res => setTimeout(res, ms));

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

function watchLeftReveal() {
    window.addEventListener('scroll', () => {
        const factor = 1.0
        const scrolled = window.pageYOffset * 0.1

        for (const leftRevealElement of leftRevealElements) {
            // console.log(window.getComputedStyle(leftRevealElement).x)


            const currentLeft = window.scrollX + leftRevealElement.getBoundingClientRect().left // X)

            // let currentLeft = window.getComputedStyle(leftRevealElement).left
            // console.log(currentLeft)
            // currentLeft = parseFloat(currentLeft.slice(0, currentLeft.length -2))
            // console.log(currentLeft)
            if (currentLeft > 10.0) {
                leftRevealElement.style.transform = `translateX(-${factor * scrolled}%)`
                // leftRevealElement.style.width =  leftRevealElement.style.width * 1.5
                // console.log(leftRevealElement.style)
                // leftRevealElements[0] = leftRevealElement
            }

        //     const difference = currentLeft - scrolled
        //     if (difference < currentLeft) {
        //         if (difference >= 0.0) {
        //             leftRevealElement.style.left = `${difference}px`
        //             leftRevealElement.style.right = `${difference}px`
        //         }
        //     }
        }

        for (const rightRevealElement of rightRevealElements) {
            // let currentLeft = window.getComputedStyle(rightRevealElement).left
            // currentLeft = parseFloat(currentLeft.slice(0, currentLeft.length -2))
            const currentRight = window.scrollX + rightRevealElement.getBoundingClientRect().right // X)
            
            if (currentRight < window.innerWidth - 10.0) {
                rightRevealElement.style.transform = `translateX(${factor * scrolled}%)`
            }
        //     const difference = currentLeft + scrolled
        //     console.log(difference)
        //     if (difference > currentLeft) {
        //         if (difference <= window.innerWidth / 2) {
        //             console.log(window.innerWidth)
        //             rightRevealElement.style.left = `${difference}px`
        //             rightRevealElement.style.right = `${difference}px`
        //         }
        //     }
        }

        

    })
}    

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('reveal-right')) {
                // entry.target.classList.add('shift-right')
                // watchLeftReveal()
            }
            else if (entry.target.classList.contains('reveal-left')) {
                console.log('intersected')
                watchLeftReveal()
                // console.log(entry.target)
                // watchLeftReveal(entry.target)

                // entry.target.classList.add('shift-left')
            }
        }
    })
})


let leftRevealElements
let rightRevealElements

async function hello() {
    await delay(50)
    leftRevealElements = document.querySelectorAll('.reveal-left')
    rightRevealElements = document.querySelectorAll('.reveal-right')
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal')
    scrollRevealElements.forEach((el) => observer.observe(el))
}


// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }

hello()

