var slideIndex = 1;
var posts = document.querySelectorAll(".wrapper-img__post");
posts.forEach(ele => {
  ele.firstElementChild.firstElementChild.style.display = "block";
  let checkMultiImages = ele.firstElementChild.children;
  let wrapperImages = Array.from(checkMultiImages).filter(ele => {
    return ele.classList.contains("mySlides-post_image")
  })

  // remove pre/next btn when post has only one picture
  if (wrapperImages.length == 1) {
    checkMultiImages[2].style.display = "none"
    checkMultiImages[1].style.display = "none"
    let dotElements = ele.firstElementChild.nextElementSibling;
    dotElements.style.display = "none"
  }
  let wrapperDot = Array.from(ele.children).filter(ele => {
    return ele.classList.contains("wrapper-dot")
  })
  if (wrapperDot.length) {
    wrapperDot[0].children[0].classList.add("active")
  }
})


function showSlides(n, wrapperImages, dotElements) {
  if (n > wrapperImages.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = wrapperImages.length }

  for (var i = 0; i < wrapperImages.length; i++) {
    wrapperImages[i].style.display = "none";
  }
  for (i = 0; i < dotElements.length; i++) {
    dotElements[i].className = dotElements[i].className.replace(" active", "");
  }
  // slides[slideIndex-1].style.display = "block";
  dotElements[slideIndex - 1].className += " active";
  wrapperImages[slideIndex - 1].style.display = "block";
}


const prevBtn = document.querySelectorAll(".prev");
const nextBtn = document.querySelectorAll(".next");

prevBtn.forEach(ele => {
  ele.addEventListener('click', e => {
    const parentNodeOfPre = e.target.parentNode.children;
    const parentNodeOfPreWrapper = e.target.parentNode.parentNode.children;
    const wrapperImages = Array.from(parentNodeOfPre).filter(ele => {
      return ele.classList.contains("mySlides-post_image")
    })
    var dotElements = Array.from(parentNodeOfPreWrapper).filter(ele => {
      return ele.classList.contains("wrapper-dot")
    })[0].children;
    dotElements = Array.from(dotElements)
    plusSlides(-1, wrapperImages, dotElements)
  })
})

nextBtn.forEach(ele => {
  ele.addEventListener('click', e => {
    const parentNodeOfNext = e.target.parentNode.children;
    const parentNodeOfNextWrapper = e.target.parentNode.parentNode.children;
    const wrapperImages = Array.from(parentNodeOfNext).filter(ele => {
      return ele.classList.contains("mySlides-post_image")
    })
    var dotElements = Array.from(parentNodeOfNextWrapper).filter(ele => {
      return ele.classList.contains("wrapper-dot")
    })[0].children;
    dotElements = Array.from(dotElements)
    plusSlides(1, wrapperImages, dotElements)
  })
})


// // Next/previous controls
function plusSlides(n, wrapperImages, dotElements) {
  showSlides(slideIndex += n, wrapperImages, dotElements);
}

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }




