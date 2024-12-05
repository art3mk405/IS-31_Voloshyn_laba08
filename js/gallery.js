import * as basicLightbox from "../node_modules/basiclightbox/src/scripts/main.js";

const images = [
    {
      preview: "https://wondersholidays.com/wp-content/uploads/2018/07/lavra-1.jpg",
      original:"https://wondersholidays.com/wp-content/uploads/2018/07/lavra-1.jpg",
      description: "Києво-Печерська Лавра",
    },
    {
      preview:"https://wondersholidays.com/wp-content/uploads/2018/07/sofiyskiy_sobor-1.jpg",
      original:"https://wondersholidays.com/wp-content/uploads/2018/07/sofiyskiy_sobor-1.jpg",
      description: "Національний заповідник “Софія Київська”",
    },
    {
        preview:"https://wondersholidays.com/wp-content/uploads/2018/07/adndr-spusk-1.jpg",
        original:"https://wondersholidays.com/wp-content/uploads/2018/07/adndr-spusk-1.jpg",
        description: "Андріївський узвіз",
    },
    {
        preview:"https://wondersholidays.com/wp-content/uploads/2018/07/bulgakog-1.jpg",
        original:"https://wondersholidays.com/wp-content/uploads/2018/07/bulgakog-1.jpg",
        description: "Музей Булгакова",
    },
    {
        preview:"https://wondersholidays.com/wp-content/uploads/2018/07/zoloti-1.jpg",
        original:"https://wondersholidays.com/wp-content/uploads/2018/07/zoloti-1.jpg",
        description: "Золоті ворота",
    },
    {
        preview:"https://wondersholidays.com/wp-content/uploads/2018/07/rodina-mat-1.jpg",
        original:"https://wondersholidays.com/wp-content/uploads/2018/07/rodina-mat-1.jpg",
        description: "Монумент “Батьківщина-мати”",
    },
    {
        preview:"https://wondersholidays.com/wp-content/uploads/2018/07/Mariyinskij-park-1.jpg",
        original:"https://wondersholidays.com/wp-content/uploads/2018/07/Mariyinskij-park-1.jpg",
        description: "Маріїнський парк",
    },
    {
        preview:"https://wondersholidays.com/wp-content/uploads/2018/07/naber-1.jpg",
        original:"https://wondersholidays.com/wp-content/uploads/2018/07/naber-1.jpg",
        description: "Набережна Дніпра",
    },
    {
        preview:"https://wondersholidays.com/wp-content/uploads/2018/07/mamaeva-1.jpg",
        original:"https://wondersholidays.com/wp-content/uploads/2018/07/mamaeva-1.jpg",
        description: "“Мамаєва Слобода”",
    }
];

let gallery = document.querySelector("ul.gallery");
images.forEach((image) => {addImage(image)});

function addImage(imageObject){
    let imageElement = document.createElement("img");
    imageElement.src = imageObject.preview;
    imageElement.alt = imageObject.description;

    let imageLi = document.createElement("li");
    imageLi.append(imageElement);
    gallery.append(imageLi);
}

gallery.addEventListener("click", (event) => {
    if (event.target.tagName !== "IMG") {
        return;
    }
    let previewLink = event.target.src;
    let imageObject = images.find((image) => image.preview === previewLink);

    if (imageObject) {
        const instance = basicLightbox.create(`
            <div class="modal">
                <img src="${imageObject.original}" alt="${imageObject.description}">
                <p>${imageObject.description}</p>
            </div>        
        `, { closable: true });
        instance.show();
    }
});
