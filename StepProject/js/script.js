'use strict';
function changeClass (element, titlesList, className) {
    titlesList.forEach((item) => item.classList.remove(className));
    element.classList.add(className);
}

function selectContent (activeTab, contentList, className, dataAttribute) {
    contentList.forEach((item) =>
        item.getAttribute(dataAttribute) === activeTab
            ? item.classList.add(className)
            : item.classList.remove(className)
    );
}

//section our Service TAB
const serviceListTab = document.querySelector('.list-service');
const serviceListTitle = document.querySelectorAll('.list-service__item');
const serviceListContent = document.querySelectorAll('.wrapper-service');

serviceListTab.addEventListener('click', ({target}) => {
    const item = target.closest('li');
    changeClass(item, serviceListTitle, 'active');
    selectContent(item.dataset.tab, serviceListContent, 'active', 'data-tab')
})

// section our Amazing work

// ADD images
const imagesAddFirst = [
    {
        imgLink: "./images/amazing/web design/web-design7.jpg",
        alt: "web design",
        [`data-img`]: "web",
    },
    {
        imgLink: "./images/amazing/web design/web-design1.jpg",
        alt: "web design",
        [`data-img`]: "web",
    },
    {
        imgLink: "./images/amazing/web design/web-design3.jpg",
        alt: "web design",
        [`data-img`]: "web",
    },
    {
        imgLink: "./images/amazing/wordpress/wordpress8.jpg",
        alt: "wordpress",
        [`data-img`]: "wordpress",
    },
    {
        imgLink: "./images/amazing/wordpress/wordpress10.jpg",
        alt: "wordpress",
        [`data-img`]: "wordpress",
    },
    {
        imgLink: "./images/amazing/wordpress/wordpress6.jpg",
        alt: "wordpress",
        [`data-img`]: "wordpress",
    },
    {
        imgLink: "./images/amazing/landing page/landing-page3.jpg",
        alt: "landing",
        [`data-img`]: "landing",
    },
    {
        imgLink: "./images/amazing/landing page/landing-page2.jpg",
        alt: "landing",
        [`data-img`]: "landing",
    },
    {
        imgLink: "./images/amazing/landing page/landing-page6.jpg",
        alt: "landing",
        [`data-img`]: "landing",
    },
    {
        imgLink: "./images/amazing/graphic design/graphic-design4.jpg",
        alt: "graphic",
        [`data-img`]: "graphic",
    },
    {
        imgLink: "./images/amazing/graphic design/graphic-design1.jpg",
        alt: "graphic",
        [`data-img`]: "graphic",
    },
    {
        imgLink: "./images/amazing/graphic design/graphic-design12.jpg",
        alt: "graphic",
        [`data-img`]: "graphic",
    },
]
const imagesAddSecond = [
    {
        imgLink: "./images/amazing/web design/web-design2.jpg",
        alt: "web design",
        [`data-img`]: "web",
    },
    {
        imgLink: "./images/amazing/web design/web-design4.jpg",
        alt: "web design",
        [`data-img`]: "web",
    },
    {
        imgLink: "./images/amazing/web design/web-design5.jpg",
        alt: "web design",
        [`data-img`]: "web",
    },
    {
        imgLink: "./images/amazing/wordpress/wordpress1.jpg",
        alt: "wordpress",
        [`data-img`]: "wordpress",
    },
    {
        imgLink: "./images/amazing/wordpress/wordpress9.jpg",
        alt: "wordpress",
        [`data-img`]: "wordpress",
    },
    {
        imgLink: "./images/amazing/wordpress/wordpress4.jpg",
        alt: "wordpress",
        [`data-img`]: "wordpress",
    },
    {
        imgLink: "./images/amazing/landing page/landing-page1.jpg",
        alt: "landing",
        [`data-img`]: "landing",
    },
    {
        imgLink: "./images/amazing/landing page/landing-page7.jpg",
        alt: "landing",
        [`data-img`]: "landing",
    },
    {
        imgLink: "./images/amazing/landing page/landing-page5.jpg",
        alt: "landing",
        [`data-img`]: "landing",
    },
    {
        imgLink: "./images/amazing/graphic design/graphic-design11.jpg",
        alt: "graphic",
        [`data-img`]: "graphic",
    },
    {
        imgLink: "./images/amazing/graphic design/graphic-design9.jpg",
        alt: "graphic",
        [`data-img`]: "graphic",
    },
    {
        imgLink: "./images/amazing/graphic design/graphic-design8.jpg",
        alt: "graphic",
        [`data-img`]: "graphic",
    },
]
const addImages = (arrayImages) => {
    loadingBtn();
    const ul = document.querySelector('.amazing-list__img');
    let list = arrayImages.map((element, index) => {
        const li = document.createElement('li');
        li.classList.add('amazing-item__img');
        li.setAttribute('data-img', element[`data-img`])

        const img = new Image(284, 206);
        img.src = element.imgLink;
        img.alt = element.alt;
        img.classList.add('amazing-img');

        const divHover = document.createElement('div');
        divHover.classList.add('wrapper-amazing__hover');

        const iconHover = document.createElement('img');
        iconHover.classList.add('icon-svg');
        iconHover.src = './images/icons/icon.png';

        const titleHover = document.createElement('h3');
        titleHover.classList.add('amazing-title__hover');
        titleHover.textContent = 'creative design';

        const textHover = document.createElement('p');
        textHover.classList.add('amazing-text__hover');
        textHover.textContent = 'Web Design';

        divHover.append(iconHover, titleHover, textHover);
        li.append(img, divHover);

        return li;
    })
    ul.append(...list);
}

const loadingBtn =() =>{
    const loadingImg = document.querySelector(".loader");
    const loadSvg = document.querySelector('.btn-load > svg');
    const loadSpan = document.querySelector('.btn-load > span');
    loadingImg.classList.toggle('active-load');
    loadSvg.classList.toggle('none');
    loadSpan.classList.toggle('none-load');
}

// click button to add images
const btnLoad = document.querySelector('.btn-load');
let count = 0;
btnLoad.addEventListener('click', ({target}) => {
       count++;
    loadingBtn();
    if (count === 1) {
        setTimeout('addImages(imagesAddFirst)',      2000);
         }
    if (count === 2) {
        setTimeout('addImages(imagesAddSecond)', 2000);
        setTimeout('btnLoad.remove()', 2000);
      }

})


//Amazing work filter images

const amazingListTab = document.querySelector('.amazing-list');
amazingListTab.addEventListener('click', ({target}) => {
    const amazingImages = document.querySelectorAll('.amazing-item__img');
    const amazingItems = document.querySelectorAll('.amazing-item');
    const item = target.closest('li');
    changeClass(item, amazingItems, 'active')
    if (item.dataset.img !== "all") {
        selectContent(item.dataset.img, amazingImages, 'amazing-active', 'data-img');
        amazingImages.forEach((item) => item.classList.add('none'));
    } else {
        amazingImages.forEach((item) => item.classList.add('amazing-active'));
    }
});

// section People Say TAB
let index = 0;
const profileListTab = document.querySelector(".wrapper-about__list__people");
const profileListItems = document.querySelectorAll(".wrapper-about__list__people>li");
const profileListContent = document.querySelectorAll('.wrapper-about__main__img>li');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

profileListTab.addEventListener('click', ({target}) => {
    const item = target.closest('li');
    changeClass(item, profileListItems, "top");
    console.log("first");
    selectContent(item.dataset.slider, profileListContent, "show", "data-slider");
    console.log("second");
    // profileListItems.forEach((item, i) => {
    //     if (item.classList.contains('top')) {
    //         index = i;
    //     }
    // });
});

btnPrev.addEventListener('click', () => {
    --index;
    if (index < 0) {
        index = profileListItems.length - 1;
        profileListItems[index].click();
    }

});
btnNext.addEventListener('click', () => {
    ++index;
    if (index >= profileListItems.length) {
        index = 0;
        profileListItems[index].click();
    }

});







