// window.onload = checkWidth;
// window.onresize = checkWidth;

// function checkWidth() {
//   let w = window.innerWidth;
//   let part1 = document.getElementById("project1-desc-p1");
//   let part2 = document.getElementById("project1-desc-p2");

//   console.log(w);
//   if (w > 800) {
//     // part1.classList.add("");
//   }
// }

// M.toast({ html: "Nice!" });

// $(".scrollspy").scrollSpy();

$("#contact-form").submit(function(e) {
  let email = document.getElementById("email-input");
  let name = document.getElementById("name-input");
  let message = document.getElementById("message-input");
  let data = { email, name, message };
  console.log(data);
  if (!name.value || !email.value || !message.value) {
    alertify.error("Please check your entries");
  } else {
    $.ajax({
      url: "https://formspree.io/bsadick@gmail.com",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json"
    });

    e.preventDefault();
    $(this)
      .get(0)
      .reset();
    alertify.success("Message sent");
  }
});
