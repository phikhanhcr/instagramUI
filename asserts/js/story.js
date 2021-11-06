
const allStoryItem = document.querySelectorAll(".wrapper-story__item");
const positionActiveItem = 446.644;
const positionActiveItemIpad = 176.64;

// responsive design for ipad's story section
const newWidth = window.innerWidth;

if (newWidth >= 740 && newWidth <= 1023) {

  initStory(allStoryItem, positionActiveItemIpad, 250, 4);
  preBtnControl(positionActiveItemIpad, 250, 4);
  nextControl(positionActiveItemIpad, 250, 4);
  clickOtherStory(allStoryItem, positionActiveItemIpad, 250, 4);

} else if (newWidth > 1023) {

  initStory(allStoryItem, positionActiveItem, 200);
  preBtnControl(positionActiveItem, 200, 2);
  nextControl(positionActiveItem, 200, 2);
  clickOtherStory(allStoryItem, positionActiveItem, 200, 2);
} else {
  // mobile < 768 
  initStory(allStoryItem, newWidth, newWidth, 1);
  preBtnControl(newWidth, newWidth, 1);
  nextControl(newWidth, newWidth, 1);
}



function clickOtherStory(listStory, sizeActive, distanceBtwStories, loopDistance) {
  for (let i = 0; i < listStory.length; i++) {
    listStory[i].addEventListener("click", (e) => {
      if (
        !e.target.classList.contains("pre-story") &&
        !e.target.classList.contains("next-story")
      ) {
        controlStory(i, sizeActive, distanceBtwStories, loopDistance);
      }
    });
  }
}

function preBtnControl(sizeActive, distanceBtwStories, loopDistance) {
  const preBtn = document.querySelectorAll(".pre-story");
  preBtn.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      const wrapperImage = e.target.parentNode.parentNode.parentNode;
      let currentIndex = 0;
      for (let i = 0; i < allStoryItem.length; i++) {
        if (allStoryItem[i].classList.contains("story-active")) {
          currentIndex = i;
          currentIndex--;
          break;
        }
      }
      if (currentIndex != -1) {
        controlStory(currentIndex, sizeActive, distanceBtwStories, loopDistance);
      }
    });
  });
}

function nextControl(sizeActive, distanceBtwStories, loopDistance) {
  const nextBtn = document.querySelectorAll(".next-story");
  nextBtn.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      const wrapperImage = e.target.parentNode.parentNode.parentNode;
      let currentIndex = 0;
      for (let i = 0; i < allStoryItem.length; i++) {
        if (allStoryItem[i].classList.contains("story-active")) {
          currentIndex = i;
          currentIndex++;
          break;
        }
      }
      if (currentIndex != allStoryItem.length) {
        controlStory(currentIndex, sizeActive, distanceBtwStories, loopDistance);
      }
    });
  });
}

function initStory(listStory, sizeActive, distanceBtwStories, loopDistance = 2) {
  listStory.forEach((ele) => {
    ele.classList.remove("story-active");
  });
  // initial
  listStory[0].classList.add("story-active");

  for (let i = 1; i < listStory.length; i++) {
    listStory[i].style.transform = `translate(${sizeActive * loopDistance + distanceBtwStories * (i - 1)
      }px) scale(0.4)`;
  }
}

function controlStory(index, sizeActive, distanceBtwStories, loopDistance = 2) {
  allStoryItem.forEach((ele) => {
    ele.classList.remove("story-active");
  });
  // pre
  for (let j = index - 1; j >= 0; j--) {
    allStoryItem[j].style.transform = `translate(${sizeActive - distanceBtwStories * (index - j)
      }px) scale(0.4)`;
  }

  // next
  for (let j = index + 1; j < allStoryItem.length; j++) {
    allStoryItem[j].style.transform = `translate(${sizeActive * loopDistance + distanceBtwStories * (j - index - 1)
      }px) scale(0.4)`;
  }
  if (loopDistance == 2) {
    allStoryItem[index].style.transform = `translate(${positionActiveItem}px) scale(1)`;
  } else if (loopDistance == 4) {
    allStoryItem[index].style.transform = `translate(${positionActiveItemIpad}px) scale(1)`;
  } else {
    allStoryItem[index].style.transform = `translate(${0}px) scale(1)`;
  }
  allStoryItem[index].classList.add("story-active");
}












const closeStorySectionBtn = document.querySelectorAll(".story-section__view--close-btn");
const storySectionView = document.getElementById("story-section__view");
const storySectionElement = document.querySelectorAll(".story-wrapper-section")

storySectionElement.forEach(ele => {
  ele.addEventListener("click", () => {
    storySectionView.style.display = "flex";
  })
})

closeStorySectionBtn.forEach(ele => {
  ele.addEventListener("click", () => {
    storySectionView.style.display = "none";
  })
})

console.log({ newWidth })
window.addEventListener('resize', function (event) {
  const newWidth = window.innerWidth;
  console.log({ newWidth })

}, true);