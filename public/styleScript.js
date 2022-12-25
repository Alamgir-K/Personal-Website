

const delay = ms => new Promise(res => setTimeout(res, ms));

const elementsToRemove = ['landing-bg-2', 'landing-bg-3']

async function removeElements() {
    await delay(50)
    if (window.outerWidth < 1024) {
        for (const id of elementsToRemove) {
            const element = document.getElementById(id);
            console.log(element)
            element && element.remove()
        }
    }
    
}

if (window.outerWidth < 1024) {
    removeElements()
}

window.onresize = removeElements
