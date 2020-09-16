import gsap from 'gsap'

export const slideIn = element => {
    gsap.to(element, 1, {
        x: 50,
        ease: 'power4.out',
    })
}

export const slideOut = element => {
    gsap.to(element, 1, {
        x: 0,
        ease: 'power4.out',
    })
}
