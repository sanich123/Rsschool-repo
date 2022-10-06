const reviews = [
  {
    img: "img/photos/icon-beard-man.jpg",
    alt: "Avatar of bearded man",
    b: "Oskar Samborsky",
    location: "Local Austria",
    time: "Yesterday",
    comment:
      "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. <br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for",
  },
  {
    img: "img/photos/icon-girl.jpg",
    alt: "Avatar of a beautiful girl",
    b: "Fredericka Michelin",
    location: "Local Austria",
    time: "Yesterday",
    comment:
      "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. <br>The best online zoo I’ve met. My son delighted very much ljves to",
  },
  {
    img: "img/photos/icon-another-girl.jpg",
    alt: "Avatar of another beautiful girl",
    b: "Mila Riksha",
    location: "Local Austria",
    time: "Yesterday",
    comment:
      "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. <br>The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf",
  },
  {
    img: "img/photos/icon-another-girl.jpg",
    alt: "Some man",
    b: "Michael John",
    location: "Local Austria",
    time: "Today",
    comment:
      "Some text Some textSome textSome textSome textvSome textSome textSome textSome textSome textSome textSome textvSome textSome textSome textvSome textvSome textSome textvSome textvvSome textSome textSome textSome textSome textSome textSome textSome textvSome textSome textSome textSome textSome textvSome textSome textSome textvSome textSome textSome textSome textSome textSome textSome text",
  },
  {
    img: "img/photos/icon-another-girl.jpg",
    alt: "Some man",
    b: "Joseph Biden",
    location: "Local USA",
    time: "Next day",
    comment:
      "This text is written by me. This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me.This text is written by me. ",
  },
  {
    img: "img/photos/icon-another-girl.jpg",
    alt: "Some man",
    b: "Boris Johnson",
    location: "Local GB",
    time: "Next Monday",
    comment:
      "I hate Putin I hate PutinvI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinI hate PutinvI hate PutinI hate PutinI hate PutinI hate PutinvI hate PutinI hate PutinvI hate PutinvvI hate PutinI hate PutinI hate PutinI hate PutinI hate Putin",
  },
  {
    img: "img/photos/icon-beard-man.jpg",
    alt: "Avatar of bearded man",
    b: "Ramzan Kadyrov",
    location: "Russia",
    time: "Next Tuesday",
    comment:
      "I love Putin I love PutinI love PutinI love PutinvI love PutinvI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinI love PutinvvI love PutinI love PutinI love PutinI love PutinI love PutinvvvI love PutinI love Putinv",
  },
  {
    img: "img/photos/icon-beard-man.jpg",
    alt: "Avatar of bearded man",
    b: "Alexander Lukashenko",
    location: "Belorussia",
    time: "Next Friday",
    comment:
      "WHat a beautiful day WHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayvWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayvWHat a beautiful dayWHat a beautiful dayWHat a beautiful dayWHat a beautiful day",
  },
  {
    img: "img/photos/icon-beard-man.jpg",
    alt: "Avatar of bearded man",
    b: "Elon Mask",
    location: "USA",
    time: "Next Saturday",
    comment:
      "I support Ukraine I support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support UkraineI support Ukrainef",
  },
  {
    img: "img/photos/icon-beard-man.jpg",
    alt: "Avatar of bearded man",
    b: "Elon Mask",
    location: "USA",
    time: "Next Thursday",
    comment:
      "I made Tesla I made Tesla I made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslavI made TeslaI made TeslaI made TeslavI made TeslaI made TeslavI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made TeslaI made Tesla",
  },
  {
    img: "img/photos/icon-beard-man.jpg",
    alt: "Avatar of bearded man",
    b: "Elon Mask",
    location: "USA",
    time: "Next Sunday",
    comment: "I don't want to write comments",
  },
];

const commentsList = document.querySelector(".testimonials-list");
const rangeStick = document.querySelector(".testimonials__range");



rangeStick.addEventListener('change', (evt) => {
  createComments(reviews, evt.target.value);
})

function createComments(arr, slicedNumber = 1) {
  commentsList.innerHTML = "";

  return arr
  .slice(Number(slicedNumber), Number(slicedNumber + 3)
  .forEach(({ img, alt, b, location, time, comment }) => {
    commentsList.insertAdjacentHTML(
      "afterbegin",
      `<li class="testimonials-list__item">
        <div class="person__wrapper">
          <img src=${img} alt=${alt} width="37px" height="37px">
          <b>${b}</b>
          <div class="person__location">
            <span>${location}</span>
            <span>${time}</span>
          </div>
        </div>
        <div class="person__comment">
          <span>${comment}</span>
        </div>
      </li>`
    );
  });
}

createComments(reviews);
