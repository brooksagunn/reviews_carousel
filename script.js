let userImg = document.querySelector("#user-image");
let userName = document.querySelector("#user-name");
let userOccupation = document.querySelector("#user-occupation");
let userReview = document.querySelector("#user-review");
let arrows = document.querySelectorAll(".arrow");

const reviews = [
  {
    id: 1,
    pfp: "images/ninja_pfp.jpg",
    name: "John Smith",
    occupation: "Web Developer",
    review_text:
      "Pretium vulputate sapien nec sagittis. Lacinia at quis risus sed vulputate odio ut enim. Lectus magna fringilla urna porttitor rhoncus dolor. Aliquam malesuada bibendum arcu vitae. Semper feugiat nibh sed pulvinar. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. A arcu cursus vitae congue mauris rhoncus aenean. Sed viverra tellus in hac habitasse platea dictumst. Feugiat scelerisque varius morbi enim nunc. At varius vel pharetra vel. Diam quam nulla porttitor massa id neque aliquam vestibulum. Vel quam elementum pulvinar etiam. Bibendum est ultricies integer quis auctor elit. Eu feugiat pretium nibh ipsum consequat nisl. Vitae purus faucibus ornare suspendisse.",
  },
  {
    id: 2,
    pfp: "images/side_stare.png",
    name: "Lisa Turner",
    occupation: "Project Manager",
    review_text:
      "Non nisi est sit amet. Sem viverra aliquet eget sit amet tellus cras adipiscing. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Aenean euismod elementum nisi quis. Est ante in nibh mauris cursus mattis molestie. Praesent tristique magna sit amet purus gravida quis. Orci eu lobortis elementum nibh tellus molestie. Bibendum enim facilisis gravida neque convallis a cras semper. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Eget est lorem ipsum dolor sit amet consectetur adipiscing.",
  },
  {
    id: 3,
    pfp: "images/poppy_yordle.jpeg",
    name: "Poppy Yordle",
    occupation: "Backend SE",
    review_text:
      "Non odio euismod lacinia at quis risus sed vulputate odio. Lectus vestibulum mattis ullamcorper velit. Tempus urna et pharetra pharetra massa massa ultricies. Gravida quis blandit turpis cursus in hac habitasse. Amet nisl purus in mollis nunc sed id semper. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. In ante metus dictum at tempor commodo ullamcorper a lacus. Dolor sit amet consectetur adipiscing elit pellentesque. Egestas tellus rutrum tellus pellentesque. Lacus viverra vitae congue eu consequat ac felis donec. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Ultrices eros in cursus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Vulputate dignissim suspendisse in est ante in nibh. Nibh praesent tristique magna sit amet purus.",
  },
];

let currentReview = 0;

arrows.forEach((arrow) =>
  arrow.addEventListener("click", () => {
    arrow.classList.contains("prev") && currentReview > 0
      ? (currentReview -= 1)
      : arrow.classList.contains("next") && currentReview < reviews.length - 1
      ? (currentReview += 1)
      : (currentReview += 0);
    console.log(currentReview);
    userImg.src = reviews[currentReview].pfp;
    userName.textContent = reviews[currentReview].name;
    userOccupation.textContent = reviews[currentReview].occupation;
    userReview.textContent = reviews[currentReview].review_text;
  })
);
