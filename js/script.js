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

for (const member of teamMembers) {
  const cardHtml = generateCard(member);

  memberCell.innerHTML += cardHtml;
}

function generateCard(member) {
  const { name, role, email, img } = member;

  const cardHtml = `<div class="col-md-6 col-lg-4 text-white gx-5">
            <div class="d-flex justify-content-around bg-dark align-items-center rounded">
              <img src="./${img}" alt="" class="img-member object-fit-fill" />
              <div class="d-flex flex-column align-items-start">
                <h3 class="fw-bold">${name}</h3>
                <p>${role}</p>
                <p class="text-info">${email}</p>
              </div>
            </div>
          </div>`;
  return cardHtml;
}
