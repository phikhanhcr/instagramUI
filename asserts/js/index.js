const menuPostModal = document.querySelectorAll(".post-section__header-menu")
const overlayModal = document.getElementById("overlayModal")
const menuModal = document.getElementById("menuModal")

const rightMain = document.getElementById('right-main');
const initWidthScreen = window.innerWidth;
const initWidthLeftSection = document.getElementById("left-main").offsetWidth;
const initPaddingWrapperMain = document.getElementById("wrapper-main")
const style = initPaddingWrapperMain.currentStyle || window.getComputedStyle(initPaddingWrapperMain);

const uploadImageBtn = document.getElementById("post-section__header-upload");
const uploadModal = document.getElementById("uploadModal");
// set right and max-width in random size of screen
rightMain.style.right = `${parseInt(style.marginLeft) - 12}px`;
rightMain.style.maxWidth = `${(initWidthScreen - initWidthLeftSection) - parseInt(style.marginLeft) * 2}px`;

menuPostModal.forEach(e => {
  e.addEventListener("click", () => {
    overlayModal.style.display = "block";
    overlayModal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    menuModal.style.display = "block";
  })

})
overlayModal.addEventListener("click", () => {
  overlayModal.style.display = 'none';
  menuModal.style.display = "none";
  uploadModal.style.display = "none"
})

window.addEventListener('resize', function (event) {
  const newWidth = window.innerWidth;
  rightMain.style.right = `${(newWidth - 975) / 2 - 20}px`;
  if (newWidth >= 1036 && newWidth <= 1239) {
    rightMain.style.maxWidth = `${332 - 10}px`
  };

}, true);


// like post
const btnLikes = document.querySelectorAll(
  ".icon-action__status--heart"
);
btnLikes.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    const obj = e.target;
    if (obj.classList.contains("far")) {
      obj.classList.add("fas");
      obj.classList.add("red-color");
      obj.classList.remove("far");
    } else {
      obj.classList.add("far");
      obj.classList.remove("red-color");
      obj.classList.remove("fas");
    }
  });
});

// like post by db click on image
const imagesDbClick = document.querySelectorAll(
  ".post-section__image"
);
imagesDbClick.forEach((ele) => {
  ele.addEventListener("dblclick", (e) => {
    const obj = e.target.parentNode.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
    if (obj.classList.contains("far")) {
      obj.classList.add("fas");
      obj.classList.add("red-color");
      obj.classList.remove("far");
    }

    const heartOverlay = e.target.parentNode.parentNode.nextElementSibling.nextElementSibling;
    heartOverlay.style.display = "block";
    setTimeout(() => {
      heartOverlay.style.display = "none";
    }, 700)
  });

  var tapped = false;
  ele.addEventListener("touchstart", function (e) {
    if (!tapped) { //if tap is not set, set up single tap
      tapped = setTimeout(function () {
        tapped = null
      }, 300);
    } else {
      clearTimeout(tapped); 
      tapped = null
      const obj = e.target.parentNode.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
      if (obj.classList.contains("far")) {
        obj.classList.add("fas");
        obj.classList.add("red-color");
        obj.classList.remove("far");
      }

      const heartOverlay = e.target.parentNode.parentNode.nextElementSibling.nextElementSibling;
      heartOverlay.style.display = "block";
      setTimeout(() => {
        heartOverlay.style.display = "none";
      }, 700)
    }
    e.preventDefault()
  });
});



uploadImageBtn.addEventListener("click", () => {
  overlayModal.style.display = "block";
  overlayModal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  uploadModal.style.display = "flex"
})


