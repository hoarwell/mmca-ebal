(() => {
  const lang = document.querySelector(".lang-select");
  const body = document.querySelector("body");
  const nav = document.querySelector(".nav");
  const lists = document.querySelectorAll(".nav-list a");
  const section = document.querySelector(".section-container");
  const sections = document.querySelectorAll("section");
  const contents = document.querySelectorAll(".content-container");
  const background = document.querySelector(".header-background");
  const headerContainer = document.querySelector(".header-container");
  const slash = document.querySelector(".header-slash");
  const line = document.querySelector(".header-svg line");

  // section 화면에 나타날 때 마다 fade 효과
  const io = new IntersectionObserver((entries, observer) => {
    const newList = [...lists];

    entries.forEach((entry) => {
      const index = parseInt(entry.target.classList[1]);
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        console.log(index, newList[index]); // yeeeesss it's workingggg
        // have to add '.ative' class on each nav-list a tags
        newList[index].classList.add("active");
      } else {
        entry.target.classList.remove("visible");
        newList[index].classList.remove("active");
      }
    });
  });

  sections.forEach((section) => {
    io.observe(section);
  });

  function navMove() {
    // 밑에서 위로 올라오는 네비게이션 메뉴
    // 부드러움은 css로 처리
    let sectionPosition = section.getBoundingClientRect();
    let viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (viewportHeight >= sectionPosition.top) {
      nav.style.bottom = "0";
      lang.style.top = "2vh";
    } else {
      nav.style.bottom = "-10vh";
      lang.style.top = "-10vh";
    }
  }

  function scroll() {
    let bgPosition = background.getBoundingClientRect();

    let viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
    let viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (viewportWidth > 769) {
      // desktop
      if ((slash.style.display = "block" && bgPosition.top < 0)) {
        line.style.display = "none";
      } else {
        line.style.display = "block";
        background.style.width = "100vw"; // 이거로 100 안해주면 모바일 넘어갔다가 데스크톱으로 돌아오면 width가 0으로 바뀜
      }
    } else {
      //mobile
      slash.style.display = "block";
      background.style.width = 0;
      let width = (bgPosition.top / (viewportHeight / 3)) * 100;
      background.style.width = `${-width}px`;
      // %로 너비 설정하면 너비가 늘어날 때 멈추거나 스킵하는 경우가 심해짐
      // px로 하면 더 디테일하게 scroll event에 대응할 수 있다
      if (-width > viewportWidth) {
        // 만약 뒷배경 너비가 뷰포트를 넘기면 display를 none으로 없애버린다.
        line.style.display = "none";
      } else {
        line.style.display = "block";
      }
    }
  }

  function fadeOut() {
    let bgPosition = background.getBoundingClientRect();
    let viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
    let bgWidth = parseInt(background.style.width, 10); // convert string to number
    if (viewportWidth > 769 && bgPosition.top < window.innerHeight * 0.5) {
      // desktop
      headerContainer.style.opacity = bgPosition.top * 0.0019; // text fade out
      slash.style.opacity = bgPosition.top * 0.0019; // slash fade out
    } else if (viewportWidth < 769 && bgWidth > viewportWidth / 2) {
      // mobile
      //console.log((viewportWidth - bgWidth) / 3);
      let percentage = (viewportWidth - bgWidth) / 2.3;
      headerContainer.style.opacity = `${percentage}%`;
      if (bgWidth > viewportWidth) {
        headerContainer.style.opacity = "0";
      } else {
        headerContainer.style.opacity = `${percentage}%`;
      }
      slash.style.opacity = `${percentage}%`;
    } else {
      headerContainer.style.opacity = 1;
      slash.style.opacity = 1;
    }
  }

  function slashChange() {
    let viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth < 769) {
      line.style.strokeWidth = "3";
      line.setAttribute("x1", "0"); // line width
      line.setAttribute("x2", "100%");
      line.setAttribute("y1", "46%");
      line.setAttribute("y2", "46%");
    } else {
      line.style.strokeWidth = "4";
      line.setAttribute("x1", "35%"); // line width
      line.setAttribute("x2", "55%");
      line.setAttribute("y1", "0");
      line.setAttribute("y2", "100%");
    }
  }

  function slashClean() {
    // fade out 하고 마지막 조금 남는 부분을 없애줌
    let viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;
    let bgPosition = background.getBoundingClientRect();

    let bgWidth = parseInt(background.style.width, 10);

    if (viewportWidth > 769) {
      // desktop
      if (bgPosition.top < 0) {
        slash.style.display = "none";
      } else {
        slash.style.display = "block";
      }
    } else if (
      // mobile
      viewportWidth < 769
    ) {
      slash.style.display = "none";
    } else {
      slash.style.display = "block";
    }
  }

  window.addEventListener("load", navMove);
  window.addEventListener("scroll", navMove);

  window.addEventListener("load", slashChange);
  window.addEventListener("resize", slashChange);

  window.addEventListener("load", slashClean);
  window.addEventListener("resize", slashClean);
  window.addEventListener("scroll", slashClean);

  window.addEventListener("scroll", scroll, { passive: true }); // 저거 넣어주면 스크롤 최적화 된다고 썼는데 먹히는 지 잘 모르겠다.
  window.addEventListener("resize", scroll);

  window.addEventListener("scroll", fadeOut);
  window.addEventListener("resize", fadeOut);
})();
