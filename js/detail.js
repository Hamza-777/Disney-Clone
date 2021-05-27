const bgImg = document.querySelector("#bgImg");
const imgTitle = document.querySelector("#imgTitle");
const subtitle = document.querySelector(".subTitle");
const description = document.querySelector(".description");

document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("../disneyPlusMoviesData.json");
    const required = await res.json();
    const data = required.movies;

    let movie = getData();

    if (movie === "Inside Out") {
        bgImg.src = data[1].backgroundImg;
        imgTitle.src = data[1].titleImg;
        subtitle.innerHTML = data[1].subTitle;
        description.innerHTML = data[1].description;
    } else if (movie === "A tail of two kitties") {
        bgImg.src = data[2].backgroundImg;
        imgTitle.src = data[2].titleImg;
        subtitle.innerHTML = data[2].subTitle;
        description.innerHTML = data[2].description;
    } else if (movie === "Bao") {
        bgImg.src = data[3].backgroundImg;
        imgTitle.src = data[3].titleImg;
        subtitle.innerHTML = data[3].subTitle;
        description.innerHTML = data[3].description;
    } else if (movie === "Tangled") {
        bgImg.src = data[4].backgroundImg;
        imgTitle.src = data[4].titleImg;
        subtitle.innerHTML = data[4].subTitle;
        description.innerHTML = data[4].description;
    } else if (movie === "Soul") {
        bgImg.src = data[5].backgroundImg;
        imgTitle.src = data[5].titleImg;
        subtitle.innerHTML = data[5].subTitle;
        description.innerHTML = data[5].description;
    } else if (movie === "Moana") {
        bgImg.src = data[6].backgroundImg;
        imgTitle.src = data[6].titleImg;
        subtitle.innerHTML = data[6].subTitle;
        description.innerHTML = data[6].description;
    } else if (movie === "Incredibles 2") {
        bgImg.src = data[7].backgroundImg;
        imgTitle.src = data[7].titleImg;
        subtitle.innerHTML = data[7].subTitle;
        description.innerHTML = data[7].description;
    } else if (movie === "Assembled") {
        bgImg.src = data[8].backgroundImg;
        imgTitle.src = data[8].titleImg;
        subtitle.innerHTML = data[8].subTitle;
        description.innerHTML = data[8].description;
    } else if (movie === "Burrow") {
        bgImg.src = data[9].backgroundImg;
        imgTitle.src = data[9].titleImg;
        subtitle.innerHTML = data[9].subTitle;
        description.innerHTML = data[9].description;
    } else if (movie === "The Simpsons") {
        bgImg.src = data[10].backgroundImg;
        imgTitle.src = data[10].titleImg;
        subtitle.innerHTML = data[10].subTitle;
        description.innerHTML = data[10].description;
    } else if (movie === "Legends") {
        bgImg.src = data[11].backgroundImg;
        imgTitle.src = data[11].titleImg;
        subtitle.innerHTML = data[11].subTitle;
        description.innerHTML = data[11].description;
    } else if (movie === "Raya") {
        bgImg.src = data[12].backgroundImg;
        imgTitle.src = data[12].titleImg;
        subtitle.innerHTML = data[12].subTitle;
        description.innerHTML = data[12].description;
    } else if (movie === "Auntie EDNA") {
        bgImg.src = data[13].backgroundImg;
        imgTitle.src = data[13].titleImg;
        subtitle.innerHTML = data[13].subTitle;
        description.innerHTML = data[13].description;
    } else if (movie === "Mickey mouse") {
        bgImg.src = data[14].backgroundImg;
        imgTitle.src = data[14].titleImg;
        subtitle.innerHTML = data[14].subTitle;
        description.innerHTML = data[14].description;
    } else if (movie === "The falcon and the winter soldier") {
        bgImg.src = data[15].backgroundImg;
        imgTitle.src = data[15].titleImg;
        subtitle.innerHTML = data[15].subTitle;
        description.innerHTML = data[15].description;
    } else if (movie === "My music story") {
        bgImg.src = data[16].backgroundImg;
        imgTitle.src = data[16].titleImg;
        subtitle.innerHTML = data[16].subTitle;
        description.innerHTML = data[16].description;
    }
});

const getData = () => {
    let movieData = JSON.parse(localStorage.getItem('movieData'));
    return movieData;
}