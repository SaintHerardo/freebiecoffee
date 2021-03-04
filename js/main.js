(function () {
  const tabBtns = document.querySelectorAll(".tab__button");
  const tabContents = document.querySelectorAll(".tab__content");

  tabBtns.forEach((tabBtn, index) => {
    tabBtn.onclick = () => {
      changeTabContent(index);
    };
  });

  function changeTabContent(index) {
    setActiveClass(tabBtns, index);

    setActiveClass(tabContents, index);
  }

  function setActiveClass(arr, index) {
    for (let el of arr) {
      el.classList.remove("active");
    }
    arr[index].classList.add("active");
  }
})();
