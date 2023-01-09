document.addEventListener('DOMContentLoaded', transformSocialLinks)
function transformSocialLinks() {
    const socialLinks = document.querySelectorAll('twitter, github, linkedin, twitter, facebook, instagram, gmail, youtube, twitch, whatsapp, reddit')

    socialLinks.forEach(tag => {
        let link = tag.textContent.trim()
        switch (tag.tagName.toLocaleLowerCase()) {
            case 'twitter':
                link = `https://twitter.com/${removeAt(tag.textContent)}`
                break;

            case 'github':
                link = `https://github.com/${removeAt(tag.textContent)}`
                break;

            case 'gmail':
                const email = tag.textContent.match(/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/)
                if(email.length) link = `mailto:${email[0]}`
                break;

            case 'whatsapp':
                const phoneNr = tag.textContent.match(/[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*/)
                if(phoneNr.length) link = `tel:${phoneNr[0].trim()}`
                break;
        }
        const anchor = document.createElement('a')
        anchor.classList.add(`${tag.tagName.toLocaleLowerCase()}-link`)
        anchor.setAttribute('href', link)
        anchor.setAttribute('target', '_blank')
        tag.parentElement.replaceChild(anchor, tag)
    })
}

function removeAt(str) {
    str = str.trim()
    const atIndex = str.indexOf('@')
    if(atIndex > -1) {
        const arr = [...str]
        arr.splice(atIndex, 1)
        str = arr.join('')
    }
    return str
}