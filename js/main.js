const mq320 = window.matchMedia("(max-width: 320px)");
const mq426 = window.matchMedia("(max-width: 426px)");
const mq576 = window.matchMedia("(max-width: 576px)");
const mq768 = window.matchMedia("(max-width: 768px)");
const mq992 = window.matchMedia("(max-width: 992px)");
const mq1200 = window.matchMedia("(max-width: 1200px)");
const mq1400 = window.matchMedia("(max-width: 1400px)");

mq320.addEventListener("change", changingSmCarOffset);
mq426.addEventListener("change", changingSmCarOffset);
mq576.addEventListener("change", changingSmCarOffset);
mq768.addEventListener("change", changingSmCarOffset);
mq992.addEventListener("change", changingSmCarOffset);
mq1200.addEventListener("change", changingSmCarOffset);
mq1400.addEventListener("change", changingSmCarOffset);
changingSmCarOffset();

mq320.addEventListener("change", changingBigCarOffset);
mq426.addEventListener("change", changingBigCarOffset);
mq576.addEventListener("change", changingBigCarOffset);
mq768.addEventListener("change", changingBigCarOffset);
mq992.addEventListener("change", changingBigCarOffset);
mq1200.addEventListener("change", changingBigCarOffset);
mq1400.addEventListener("change", changingBigCarOffset);
changingBigCarOffset();

/* Header Nav container ----------------------- */
const navBtn = document.querySelector(".nav-container__button");
const navContainer = document.querySelector(".nav-container");

let navOffset = -31.9;
let navBtnOffset = -30;

navBtn.addEventListener("click", toggle);

function toggle() {
  if (navOffset < 0) {
    navOffset += 31.9;
    navBtnOffset += 40;
  } else if (navOffset >= 0) {
    navOffset += -31.9;
    navBtnOffset -= 40;
  }

  navContainer.style.right = navOffset + "%";
  navBtn.style.marginLeft = navBtnOffset + "px";
}
/*Small Carousel ---------------------------------------------------------------------------*/
const btnPrev = document.querySelector(".coffee-section__prev_button");
const btnNext = document.querySelector(".coffee-section__next_button");
const carousel = document.querySelector(".coffee-carousel");

let offset = 0;

function hideNext() {
  btnNext.style.display = "none";
}

function showNext() {
  btnNext.style.display = "block";
}

function hidePrev() {
  btnPrev.style.display = "none";
}

function showPrev() {
  btnPrev.style.display = "block";
}

btnPrev.addEventListener("click", slideLeft);

btnNext.addEventListener("click", slideRight);

function slideRight() {
  offset += 590;
  if (offset >= 1180) {
    offset = 1180;
    btnNext.style.opacity = "0";
    setTimeout(hideNext, 500);
  }
  if (offset >= 590) {
    btnPrev.style.display = "block";
    setTimeout(() => {
      btnPrev.style.opacity = "1";
    }, this.animationDelay + 20);
  }
  carousel.style.right = offset + "px";
}

function slideLeft() {
  offset -= 590;
  if (offset < 590) {
    offset = 0;
    btnPrev.style.opacity = "0";
    setTimeout(hidePrev, 500);
  }
  if (offset < 1180) {
    btnNext.style.display = "block";
    setTimeout(() => {
      btnNext.style.opacity = "1";
    }, this.animationDelay + 20);
  }
  carousel.style.right = offset + "px";
}
function changingSmCarOffset() {
  if (mq320.matches) {
    const btnPrev = document.querySelector(".coffee-section__prev_button");
    const btnNext = document.querySelector(".coffee-section__next_button");
    const carousel = document.querySelector(".coffee-carousel");

    let offset = 0;

    function hideNext() {
      btnNext.style.display = "none";
    }

    function showNext() {
      btnNext.style.display = "block";
    }

    function hidePrev() {
      btnPrev.style.display = "none";
    }

    function showPrev() {
      btnPrev.style.display = "block";
    }

    btnPrev.addEventListener("click", slideLeft);

    btnNext.addEventListener("click", slideRight);

    function slideRight() {
      offset += 206;
      if (offset >= 1442) {
        offset = 1442;
        btnNext.style.opacity = "0";
        setTimeout(hideNext, 500);
      }
      if (offset >= 206) {
        btnPrev.style.display = "block";
        setTimeout(() => {
          btnPrev.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carousel.style.right = offset + "px";
    }

    function slideLeft() {
      offset -= 206;
      if (offset < 206) {
        offset = 0;
        btnPrev.style.opacity = "0";
        setTimeout(hidePrev, 500);
      }
      if (offset < 1442) {
        btnNext.style.display = "block";
        setTimeout(() => {
          btnNext.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carousel.style.right = offset + "px";
    }
  } else if (mq426.matches) {
    const btnPrev = document.querySelector(".coffee-section__prev_button");
    const btnNext = document.querySelector(".coffee-section__next_button");
    const carousel = document.querySelector(".coffee-carousel");

    let offset = 0;

    function hideNext() {
      btnNext.style.display = "none";
    }

    function showNext() {
      btnNext.style.display = "block";
    }

    function hidePrev() {
      btnPrev.style.display = "none";
    }

    function showPrev() {
      btnPrev.style.display = "block";
    }

    btnPrev.addEventListener("click", slideLeft);

    btnNext.addEventListener("click", slideRight);

    function slideRight() {
      offset += 206;
      if (offset >= 1442) {
        offset = 1442;
        btnNext.style.opacity = "0";
        setTimeout(hideNext, 500);
      }
      if (offset >= 206) {
        btnPrev.style.display = "block";
        setTimeout(() => {
          btnPrev.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carousel.style.right = offset + "px";
    }

    function slideLeft() {
      offset -= 206;
      if (offset < 206) {
        offset = 0;
        btnPrev.style.opacity = "0";
        setTimeout(hidePrev, 500);
      }
      if (offset < 1442) {
        btnNext.style.display = "block";
        setTimeout(() => {
          btnNext.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carousel.style.right = offset + "px";
    }
  } else if (mq576.matches) {
    const btnPrev = document.querySelector(".coffee-section__prev_button");
    const btnNext = document.querySelector(".coffee-section__next_button");
    const carousel = document.querySelector(".coffee-carousel");

    let offset = 0;

    function hideNext() {
      btnNext.style.display = "none";
    }

    function showNext() {
      btnNext.style.display = "block";
    }

    function hidePrev() {
      btnPrev.style.display = "none";
    }

    function showPrev() {
      btnPrev.style.display = "block";
    }

    btnPrev.addEventListener("click", slideLeft);

    btnNext.addEventListener("click", slideRight);

    function slideRight() {
      offset += 412;
      if (offset >= 1236) {
        offset = 1236;
        btnNext.style.opacity = "0";
        setTimeout(hideNext, 500);
      }
      if (offset >= 412) {
        btnPrev.style.display = "block";
        setTimeout(() => {
          btnPrev.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carousel.style.right = offset + "px";
    }

    function slideLeft() {
      offset -= 412;
      if (offset < 206) {
        offset = 0;
        btnPrev.style.opacity = "0";
        setTimeout(hidePrev, 500);
      }
      if (offset < 1236) {
        btnNext.style.display = "block";
        setTimeout(() => {
          btnNext.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carousel.style.right = offset + "px";
    }
  } else if (mq768.matches) {
    const btnPrev = document.querySelector(".coffee-section__prev_button");
    const btnNext = document.querySelector(".coffee-section__next_button");
    const carousel = document.querySelector(".coffee-carousel");

    let offset = 0;

    function hideNext() {
      btnNext.style.display = "none";
    }

    function showNext() {
      btnNext.style.display = "block";
    }

    function hidePrev() {
      btnPrev.style.display = "none";
    }

    function showPrev() {
      btnPrev.style.display = "block";
    }

    btnPrev.addEventListener("click", slideLeft);

    btnNext.addEventListener("click", slideRight);

    function slideRight() {
      offset += 452;
      if (offset >= 1250) {
        offset = 1250;
        btnNext.style.opacity = "0";
        setTimeout(hideNext, 500);
      }
      if (offset >= 452) {
        btnPrev.style.display = "block";
        setTimeout(() => {
          btnPrev.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carousel.style.right = offset + "px";
    }

    function slideLeft() {
      offset -= 452;
      if (offset < 191) {
        offset = 0;
        btnPrev.style.opacity = "0";
        setTimeout(hidePrev, 500);
      }
      if (offset < 1250) {
        btnNext.style.display = "block";
        setTimeout(() => {
          btnNext.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carousel.style.right = offset + "px";
    }
  } else if (mq992.matches) {
    const btnPrev = document.querySelector(".coffee-section__prev_button");
    const btnNext = document.querySelector(".coffee-section__next_button");
    const carousel = document.querySelector(".coffee-carousel");

    let offset = 0;

    function hideNext() {
      btnNext.style.display = "none";
    }

    function showNext() {
      btnNext.style.display = "block";
    }

    function hidePrev() {
      btnPrev.style.display = "none";
    }

    function showPrev() {
      btnPrev.style.display = "block";
    }

    btnPrev.addEventListener("click", slideLeft);

    btnNext.addEventListener("click", slideRight);

    function slideRight() {
      offset += 442;
      if (offset >= 884) {
        offset = 884;
        btnNext.style.opacity = "0";
        setTimeout(hideNext, 500);
      }
      if (offset >= 442) {
        btnPrev.style.display = "block";
        setTimeout(() => {
          btnPrev.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carousel.style.right = offset + "px";
    }

    function slideLeft() {
      offset -= 442;
      if (offset < 442) {
        offset = 0;
        btnPrev.style.opacity = "0";
        setTimeout(hidePrev, 500);
      }
      if (offset < 884) {
        btnNext.style.display = "block";
        setTimeout(() => {
          btnNext.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carousel.style.right = offset + "px";
    }
  } else if (mq1200.matches) {
    const btnPrev = document.querySelector(".coffee-section__prev_button");
    const btnNext = document.querySelector(".coffee-section__next_button");
    const carousel = document.querySelector(".coffee-carousel");

    let offset = 0;

    function hideNext() {
      btnNext.style.display = "none";
    }

    function showNext() {
      btnNext.style.display = "block";
    }

    function hidePrev() {
      btnPrev.style.display = "none";
    }

    function showPrev() {
      btnPrev.style.display = "block";
    }

    btnPrev.addEventListener("click", slideLeft);

    btnNext.addEventListener("click", slideRight);

    function slideRight() {
      offset += 442;
      if (offset >= 884) {
        offset = 884;
        btnNext.style.opacity = "0";
        setTimeout(hideNext, 500);
      }
      if (offset >= 442) {
        btnPrev.style.display = "block";
        setTimeout(() => {
          btnPrev.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carousel.style.right = offset + "px";
    }

    function slideLeft() {
      offset -= 442;
      if (offset < 442) {
        offset = 0;
        btnPrev.style.opacity = "0";
        setTimeout(hidePrev, 500);
      }
      if (offset < 884) {
        btnNext.style.display = "block";
        setTimeout(() => {
          btnNext.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carousel.style.right = offset + "px";
    }
  } else if (mq1400.matches) {
    const btnPrev = document.querySelector(".coffee-section__prev_button");
    const btnNext = document.querySelector(".coffee-section__next_button");
    const carousel = document.querySelector(".coffee-carousel");

    let offset = 0;

    function hideNext() {
      btnNext.style.display = "none";
    }

    function showNext() {
      btnNext.style.display = "block";
    }

    function hidePrev() {
      btnPrev.style.display = "none";
    }

    function showPrev() {
      btnPrev.style.display = "block";
    }

    btnPrev.addEventListener("click", slideLeft);

    btnNext.addEventListener("click", slideRight);

    function slideRight() {
      offset += 590;
      if (offset >= 1180) {
        offset = 1180;
        btnNext.style.opacity = "0";
        setTimeout(hideNext, 500);
      }
      if (offset >= 590) {
        btnPrev.style.display = "block";
        setTimeout(() => {
          btnPrev.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carousel.style.right = offset + "px";
    }

    function slideLeft() {
      offset -= 590;
      if (offset < 590) {
        offset = 0;
        btnPrev.style.opacity = "0";
        setTimeout(hidePrev, 500);
      }
      if (offset < 1180) {
        btnNext.style.display = "block";
        setTimeout(() => {
          btnNext.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carousel.style.right = offset + "px";
    }
  }
}

/* Tab ------------------------------------------------------------------------------------------*/

const tabBtns = document.querySelectorAll(".tab__button");
const tabContents = document.querySelectorAll(".tab__content");

tabBtns.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });
      tabContents.forEach(function (item) {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

document.querySelector(".tab__button").click();

/* Big Carousel ----------------------------------------- */

function changingBigCarOffset() {
  if (mq320.matches) {
    const btnPrevBC = document.querySelector(".big-carousel__prev-button");
    const btnNextBC = document.querySelector(".big-carousel__next-button");
    const carouselBC = document.querySelector(".big-carousel");

    let offsetBC = 0;

    function hideNextBC() {
      btnNextBC.style.display = "none";
    }

    function showNextBC() {
      btnNextBC.style.display = "block";
    }

    function hidePrevBC() {
      btnPrevBC.style.display = "none";
    }

    function showPrevBC() {
      btnPrevBC.style.display = "block";
    }

    btnPrevBC.addEventListener("click", slideLeftBC);

    btnNextBC.addEventListener("click", slideRightBC);

    function slideRightBC() {
      offsetBC += 185;
      if (offsetBC >= 900) {
        offsetBC = 900;
        btnNextBC.style.opacity = "0";
        setTimeout(hideNextBC, 500);
      }
      if (offsetBC >= 185) {
        btnPrevBC.style.display = "block";
        setTimeout(() => {
          btnPrevBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }

    function slideLeftBC() {
      offsetBC -= 185;
      if (offsetBC < 185) {
        offsetBC = 0;
        btnPrevBC.style.opacity = "0";
        setTimeout(hidePrevBC, 500);
      }
      if (offsetBC < 900) {
        btnNextBC.style.display = "block";
        setTimeout(() => {
          btnNextBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }
  } else if (mq768.matches) {
    const btnPrevBC = document.querySelector(".big-carousel__prev-button");
    const btnNextBC = document.querySelector(".big-carousel__next-button");
    const carouselBC = document.querySelector(".big-carousel");

    let offsetBC = 0;

    function hideNextBC() {
      btnNextBC.style.display = "none";
    }

    function showNextBC() {
      btnNextBC.style.display = "block";
    }

    function hidePrevBC() {
      btnPrevBC.style.display = "none";
    }

    function showPrevBC() {
      btnPrevBC.style.display = "block";
    }

    btnPrevBC.addEventListener("click", slideLeftBC);

    btnNextBC.addEventListener("click", slideRightBC);

    function slideRightBC() {
      offsetBC += 220;
      if (offsetBC >= 660) {
        offsetBC = 660;
        btnNextBC.style.opacity = "0";
        setTimeout(hideNextBC, 500);
      }
      if (offsetBC >= 220) {
        btnPrevBC.style.display = "block";
        setTimeout(() => {
          btnPrevBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }

    function slideLeftBC() {
      offsetBC -= 220;
      if (offsetBC < 220) {
        offsetBC = 0;
        btnPrevBC.style.opacity = "0";
        setTimeout(hidePrevBC, 500);
      }
      if (offsetBC < 660) {
        btnNextBC.style.display = "block";
        setTimeout(() => {
          btnNextBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }
  } else if (mq426.matches) {
    const btnPrevBC = document.querySelector(".big-carousel__prev-button");
    const btnNextBC = document.querySelector(".big-carousel__next-button");
    const carouselBC = document.querySelector(".big-carousel");

    let offsetBC = 0;

    function hideNextBC() {
      btnNextBC.style.display = "none";
    }

    function showNextBC() {
      btnNextBC.style.display = "block";
    }

    function hidePrevBC() {
      btnPrevBC.style.display = "none";
    }

    function showPrevBC() {
      btnPrevBC.style.display = "block";
    }

    btnPrevBC.addEventListener("click", slideLeftBC);

    btnNextBC.addEventListener("click", slideRightBC);

    function slideRightBC() {
      offsetBC += 185;
      if (offsetBC >= 740) {
        offsetBC = 740;
        btnNextBC.style.opacity = "0";
        setTimeout(hideNextBC, 500);
      }
      if (offsetBC >= 185) {
        btnPrevBC.style.display = "block";
        setTimeout(() => {
          btnPrevBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }

    function slideLeftBC() {
      offsetBC -= 185;
      if (offsetBC < 185) {
        offsetBC = 0;
        btnPrevBC.style.opacity = "0";
        setTimeout(hidePrevBC, 500);
      }
      if (offsetBC < 740) {
        btnNextBC.style.display = "block";
        setTimeout(() => {
          btnNextBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }
  } else if (mq768.matches) {
    const btnPrevBC = document.querySelector(".big-carousel__prev-button");
    const btnNextBC = document.querySelector(".big-carousel__next-button");
    const carouselBC = document.querySelector(".big-carousel");

    let offsetBC = 0;

    function hideNextBC() {
      btnNextBC.style.display = "none";
    }

    function showNextBC() {
      btnNextBC.style.display = "block";
    }

    function hidePrevBC() {
      btnPrevBC.style.display = "none";
    }

    function showPrevBC() {
      btnPrevBC.style.display = "block";
    }

    btnPrevBC.addEventListener("click", slideLeftBC);

    btnNextBC.addEventListener("click", slideRightBC);

    function slideRightBC() {
      offsetBC += 220;
      if (offsetBC >= 660) {
        offsetBC = 660;
        btnNextBC.style.opacity = "0";
        setTimeout(hideNextBC, 500);
      }
      if (offsetBC >= 220) {
        btnPrevBC.style.display = "block";
        setTimeout(() => {
          btnPrevBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }

    function slideLeftBC() {
      offsetBC -= 220;
      if (offsetBC < 220) {
        offsetBC = 0;
        btnPrevBC.style.opacity = "0";
        setTimeout(hidePrevBC, 500);
      }
      if (offsetBC < 660) {
        btnNextBC.style.display = "block";
        setTimeout(() => {
          btnNextBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }
  } else if (mq576.matches) {
    const btnPrevBC = document.querySelector(".big-carousel__prev-button");
    const btnNextBC = document.querySelector(".big-carousel__next-button");
    const carouselBC = document.querySelector(".big-carousel");

    let offsetBC = 0;

    function hideNextBC() {
      btnNextBC.style.display = "none";
    }

    function showNextBC() {
      btnNextBC.style.display = "block";
    }

    function hidePrevBC() {
      btnPrevBC.style.display = "none";
    }

    function showPrevBC() {
      btnPrevBC.style.display = "block";
    }

    btnPrevBC.addEventListener("click", slideLeftBC);

    btnNextBC.addEventListener("click", slideRightBC);

    function slideRightBC() {
      offsetBC += 195;
      if (offsetBC >= 585) {
        offsetBC = 585;
        btnNextBC.style.opacity = "0";
        setTimeout(hideNextBC, 500);
      }
      if (offsetBC >= 195) {
        btnPrevBC.style.display = "block";
        setTimeout(() => {
          btnPrevBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }

    function slideLeftBC() {
      offsetBC -= 195;
      if (offsetBC < 195) {
        offsetBC = 0;
        btnPrevBC.style.opacity = "0";
        setTimeout(hidePrevBC, 500);
      }
      if (offsetBC < 585) {
        btnNextBC.style.display = "block";
        setTimeout(() => {
          btnNextBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }
  } else if (mq768.matches) {
    const btnPrevBC = document.querySelector(".big-carousel__prev-button");
    const btnNextBC = document.querySelector(".big-carousel__next-button");
    const carouselBC = document.querySelector(".big-carousel");

    let offsetBC = 0;

    function hideNextBC() {
      btnNextBC.style.display = "none";
    }

    function showNextBC() {
      btnNextBC.style.display = "block";
    }

    function hidePrevBC() {
      btnPrevBC.style.display = "none";
    }

    function showPrevBC() {
      btnPrevBC.style.display = "block";
    }

    btnPrevBC.addEventListener("click", slideLeftBC);

    btnNextBC.addEventListener("click", slideRightBC);

    function slideRightBC() {
      offsetBC += 220;
      if (offsetBC >= 660) {
        offsetBC = 660;
        btnNextBC.style.opacity = "0";
        setTimeout(hideNextBC, 500);
      }
      if (offsetBC >= 220) {
        btnPrevBC.style.display = "block";
        setTimeout(() => {
          btnPrevBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }

    function slideLeftBC() {
      offsetBC -= 220;
      if (offsetBC < 220) {
        offsetBC = 0;
        btnPrevBC.style.opacity = "0";
        setTimeout(hidePrevBC, 500);
      }
      if (offsetBC < 660) {
        btnNextBC.style.display = "block";
        setTimeout(() => {
          btnNextBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }
  } else if (mq992.matches) {
    const btnPrevBC = document.querySelector(".big-carousel__prev-button");
    const btnNextBC = document.querySelector(".big-carousel__next-button");
    const carouselBC = document.querySelector(".big-carousel");

    let offsetBC = 0;

    function hideNextBC() {
      btnNextBC.style.display = "none";
    }

    function showNextBC() {
      btnNextBC.style.display = "block";
    }

    function hidePrevBC() {
      btnPrevBC.style.display = "none";
    }

    function showPrevBC() {
      btnPrevBC.style.display = "block";
    }

    btnPrevBC.addEventListener("click", slideLeftBC);

    btnNextBC.addEventListener("click", slideRightBC);

    function slideRightBC() {
      offsetBC += 280;
      if (offsetBC >= 1120) {
        offsetBC = 1120;
        btnNextBC.style.opacity = "0";
        setTimeout(hideNextBC, 500);
      }
      if (offsetBC >= 280) {
        btnPrevBC.style.display = "block";
        setTimeout(() => {
          btnPrevBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }

    function slideLeftBC() {
      offsetBC -= 280;
      if (offsetBC < 280) {
        offsetBC = 0;
        btnPrevBC.style.opacity = "0";
        setTimeout(hidePrevBC, 500);
      }
      if (offsetBC < 1120) {
        btnNextBC.style.display = "block";
        setTimeout(() => {
          btnNextBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }
  } else if (mq1200.matches) {
    const btnPrevBC = document.querySelector(".big-carousel__prev-button");
    const btnNextBC = document.querySelector(".big-carousel__next-button");
    const carouselBC = document.querySelector(".big-carousel");

    let offsetBC = 0;

    function hideNextBC() {
      btnNextBC.style.display = "none";
    }

    function showNextBC() {
      btnNextBC.style.display = "block";
    }

    function hidePrevBC() {
      btnPrevBC.style.display = "none";
    }

    function showPrevBC() {
      btnPrevBC.style.display = "block";
    }

    btnPrevBC.addEventListener("click", slideLeftBC);

    btnNextBC.addEventListener("click", slideRightBC);

    function slideRightBC() {
      offsetBC += 280;
      if (offsetBC >= 1120) {
        offsetBC = 1120;
        btnNextBC.style.opacity = "0";
        setTimeout(hideNextBC, 500);
      }
      if (offsetBC >= 280) {
        btnPrevBC.style.display = "block";
        setTimeout(() => {
          btnPrevBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }

    function slideLeftBC() {
      offsetBC -= 280;
      if (offsetBC < 280) {
        offsetBC = 0;
        btnPrevBC.style.opacity = "0";
        setTimeout(hidePrevBC, 500);
      }
      if (offsetBC < 1120) {
        btnNextBC.style.display = "block";
        setTimeout(() => {
          btnNextBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }
  } else if (mq1400.matches) {
    const btnPrevBC = document.querySelector(".big-carousel__prev-button");
    const btnNextBC = document.querySelector(".big-carousel__next-button");
    const carouselBC = document.querySelector(".big-carousel");

    let offsetBC = 0;

    function hideNextBC() {
      btnNextBC.style.display = "none";
    }

    function showNextBC() {
      btnNextBC.style.display = "block";
    }

    function hidePrevBC() {
      btnPrevBC.style.display = "none";
    }

    function showPrevBC() {
      btnPrevBC.style.display = "block";
    }

    btnPrevBC.addEventListener("click", slideLeftBC);

    btnNextBC.addEventListener("click", slideRightBC);

    function slideRightBC() {
      offsetBC += 390;
      if (offsetBC >= 1170) {
        offsetBC = 1170;
        btnNextBC.style.opacity = "0";
        setTimeout(hideNextBC, 500);
      }
      if (offsetBC >= 390) {
        btnPrevBC.style.display = "block";
        setTimeout(() => {
          btnPrevBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }

    function slideLeftBC() {
      offsetBC -= 390;
      if (offsetBC < 390) {
        offsetBC = 0;
        btnPrevBC.style.opacity = "0";
        setTimeout(hidePrevBC, 500);
      }
      if (offsetBC < 1170) {
        btnNextBC.style.display = "block";
        setTimeout(() => {
          btnNextBC.style.opacity = "1";
        }, this.animationDelay + 20);
      }
      carouselBC.style.right = offsetBC + "px";
    }
  }
}
