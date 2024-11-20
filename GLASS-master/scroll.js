let mainImg = document.querySelector(".item_desc")

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    console.log("scrollY", value);

    if (value > 356) {
        mainImg.style.animation = "desc_scroll 2s ease-out forwards"
    } else {
        mainImg.style.animation = "desc_scroll_back 2s ease-out forwards"
    }
})

let mainImg2 = document.querySelector(".Mc_img")

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    console.log("scrollY", value);

    if (value > 1500) {
        mainImg2.style.animation = "McChon_scroll 2s ease-out forwards"
    } else {
        mainImg2.style.animation = "McChon_scroll_back 2s ease-out forwards"
    }
})

let mainText = document.querySelector(".McCahon_text")

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    console.log("scrollY", value);

    if (value > 1630) {
        mainText.style.animation = "McChontext_scroll 3s ease-out forwards"
    } else {
        mainText.style.animation = "McChontext_scroll_back 3s ease-out forwards"
    }
})

let mainImg3 = document.querySelector(".Tw_img")

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    console.log("scrollY", value);

    if (value > 2600) {
        mainImg3.style.animation = "Tweed_scroll 2s ease-out forwards"
    } else {
        mainImg3.style.animation = "Tweed_scroll_back 2s ease-out forwards"
    }
})

let mainText2 = document.querySelector(".Tweed_text")

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    console.log("scrollY", value);

    if (value > 2600) {
        mainText2.style.animation = "Tweedtext_scroll 3s ease-out forwards"
    } else {
        mainText2.style.animation = "Tweedtext_scroll_back 3s ease-out forwards"
    }
})

let mainImg4 = document.querySelector(".Luz_img")

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    console.log("scrollY", value);

    if (value > 2600) {
        mainImg4.style.animation = "Luz_Bag_scroll 2s ease-out forwards"
    } else {
        mainImg4.style.animation = "Luz_Bag_scroll_back 2s ease-out forwards"
    }
})

let mainText3 = document.querySelector(".Luz_Bag_text")

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    console.log("scrollY", value);

    if (value > 2815) {
        mainText3.style.animation = "Luz_Bag_text_scroll 3s ease-out forwards"
    } else {
        mainText3.style.animation = "Luz_Bag_text_scroll_back 3s ease-out forwards"
    }
})