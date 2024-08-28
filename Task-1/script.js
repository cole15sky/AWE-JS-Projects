const stickySection = [...document.querySelectorAll('.sticky')]
let images = [
        'https://i0.wp.com/www.culturetype.com/wp-content/uploads/2020/02/Brown_Quinn_Russell-DeRay-Mckesson-2018-.jpg?resize=400%2C560&ssl=1',
        'https://i0.wp.com/www.culturetype.com/wp-content/uploads/2020/02/Brown_Quinn_Russell-DeRay-Mckesson-2018-.jpg?resize=400%2C560&ssl=1',
        // './img/fulchowki02.jpg',
        // 'JavaScript/Awe-JS/TaskNew/img/fulchowki02.jpg'


]



images.forEach(img=>{
    stickySection.forEach(section=>{
        let image =document.createElement('img')
        image.src = img;
        section.querySelector('.scroll-section').appendChild(image)

    })
})

window.addEventListener('scroll',(e)=>{
    for (let i=0; i< stickySection.length; i++){
        transform(stickySection[i])
        
    }
})

function transform(section){
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection =section.querySelector('.scroll-section')
    console.log(scrollSection);
    let percentage =((window.scrollY - offsetTop) / window.innerHeight)*100;
    percentage = percentage < 0 ? 0: percentage >400 ? 400:percentage;
    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}


