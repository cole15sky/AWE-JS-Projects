const stickySection = [...document.querySelectorAll('.sticky')]
let images = [
    'https://c0.wallpaperflare.com/preview/908/958/489/primate-ape-monkey-mammal.jpg',
    'https://miro.medium.com/v2/resize:fit:676/1*Za9EF6sfUhPG_arUhjw1aQ.jpeg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/16ae0f8336895.560bb6f50405f.jpg',
    'https://www.fubiz.net/wp-content/uploads/2015/01/Animal-Personal-Portraits-2.jpg',
    'https://www.yatzer.com/sites/default/files/article_images/3651/s1_Animal_Portraits__vincent_Lagrange_yatzer.jpg',
    'https://a.1stdibscdn.com/joachim-schmeisser-photography-the-bull-and-the-bird-iii-elephant-animal-africa-black-and-white-photography-for-sale/a_7663/a_119924621679673941364/The_Bull_and_the_Bird_III_master.jpg?width=240',
   'https://st.depositphotos.com/12729150/51378/i/450/depositphotos_513785870-stock-photo-big-panda-eating-bamboo-species.jpg'
      
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
    percentage = percentage < 0 ? 0: percentage >300 ? 300:percentage;
    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}


