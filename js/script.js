// ?? Obj
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// ?? Recupero gli elementi dell'HTML

const memberCell = document.getElementById("members-row");
const profilePic = document.querySelector(".img-member");
const memberName = document.getElementById("member-name");
const memberRole = document.getElementById("member-role");
const memberEmail = document.getElementById("member-email");
console.log(memberCell);

for (const member of teamMembers) {
  const cardHtml = `<div class="col-md-6 col-lg-4 text-white gx-5">
            <div class="d-flex justify-content-around bg-dark align-items-center">
              <img src="./${member.img}" alt="" class="img-member object-fit-fill" />
              <div class="d-flex flex-column align-items-start">
                <h3 class="fw-bold">${member.name}</h3>
                <p>${member.role}</p>
                <p class="text-info">${member.email}</p>
              </div>
            </div>
          </div>`;

  memberCell.innerHTML += cardHtml;
}
