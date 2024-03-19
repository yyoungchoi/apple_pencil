gsap.registerPlugin(ScrollTrigger);
// header
var scrollHeight = $(".lnb-nav").height();
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".lnb-nav").addClass("scrolled");
    } else {
      $(".lnb-nav").removeClass("scrolled");
    }
  });
});

// gnb slide
$(".header nav").mouseenter(function () {
  $(".header").addClass("hover");
});

$(".gnb-list .gnb-item").hover(
  function () {
    if ($(this).children().find(".sub-item").length) {
      childHeight = $(this).find(".submenu-area").outerHeight();
      $(".header").css({
        "--height": `${childHeight}px`,
        "--opacity": 1,
      });
      $(this).addClass("on").siblings().removeClass("on");
      $(this).find(".gnb-container").addClass("on");
      $("header").addClass("on");
    } else {
      $(".gnb-item").removeClass("on");
      $("header").removeClass("on");
      $(".header").css({
        "--height": `0px`,
        "--opacity": 0,
      });
    }
  },
  function () {
    if (!$(".gnb-item").hasClass("on")) {
      $("header").removeClass("on");
    }
    $(".header").removeClass("hover");
  }
);
$(".curtain").hover(function () {
  $(".gnb-item").removeClass("on");
  $(".gnb-container").removeClass("on");
  $("header").removeClass("on");
  $(".header").css({
    "--height": `0px`,
    "--opacity": 0,
  });
});
$(".gnb-wrap h3").click(function () {
  if ($(this).siblings().hasClass("none")) {
    $(this).addClass("on");
    $(this).siblings().removeClass("none");
  } else if (!$(this).siblings().hasClass("none")) {
    $(this).removeClass("on");
    $(this).siblings().addClass("none");
  }
  // if ($(this).hasClass("on")) {
  // $(".nav").removeClass("on").siblings(".sub").stop().slideUp();
  // } else {
  // $(".nav").removeClass("on").siblings(".sub").stop().slideUp();
  // $(this).addClass("on").siblings(".sub").stop().slideDown();
});

//video

circleMotion = gsap.to(".progress-circle", {
  paused: true,
  ease: "none",
  duration: 10,
  "stroke-dashoffset": 0,
  onComplete: function () {
    btnVideo.addClass("ended");
  },
});

// video play,pause,resume button
const btnVideo = $(".btn-box button");
const vid1 = $("#vid1")[0];
const vid2 = $("#vid2")[0];
$("#vid1").on("play", function () {
  circleMotion.play();
});

btnVideo.on("click", function () {
  if ($(this).hasClass("ended")) {
    vid1.play();
    vid2.play();
    circleMotion.play();
    $(this).removeClass("ended").addClass("pause");
  } else if ($(this).hasClass("play")) {
    vid1.play();
    vid2.play();
    circleMotion.play();
    $(this).removeClass("play").addClass("pause");
  } else if ($(this).hasClass("pause")) {
    vid1.pause();
    vid2.pause();
    circleMotion.pause();
    $(this).removeClass("pause").addClass("play");
  }
});

// $("#vid1").on("ended", function () {
//   btnVideo.addClass("ended");
//   btnVideo.on("click", function () {
//     $(this).removeClass("ended");
//     vid1.play();
//   });
// });
$("#vid1").on("canplay", function () {
  btnVideo.removeClass("ended");
  circleMotion.restart();
});

// motion
var heroMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-hero",
    start: "0% 20%",
    end: "0% 90%",
  },
});
heroMotion.fromTo(
  ".sc-hero .thumb",
  {
    yPercent: 10,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
  },
  {
    duration: 2,
    yPercent: 0,
    opacity: 1,
    ease: "expo.out",
  }
);
var pencilMotion2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-generation2",
    start: "0% 70%",
    end: "100% 100%",
    // markers: true,
  },
});
pencilMotion2.fromTo(
  ".sc-generation2 .pencil",
  {
    yPercent: 10,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
  },
  {
    duration: 2,
    yPercent: 0,
    opacity: 1,
    ease: "expo.out",
  }
);
var pencilUsbMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-generation-usbc",
    start: "0% 70%",
    end: "100% 100%",
    // markers: true,
  },
});
pencilUsbMotion.fromTo(
  ".sc-generation-usbc .pencil",
  {
    yPercent: 10,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
  },
  {
    duration: 2,
    yPercent: 0,
    opacity: 1,
    ease: "expo.out",
  },
  "a"
);
pencilUsbMotion.from(
  ".sc-generation-usbc .pencil-art",
  {
    opacity: 0,
    duration: 2,
    ease: "power1.out",
  },
  "a+=1"
);
var pencilMotion1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-generation1",
    start: "0% 70%",
    end: "100% 100%",
    // markers: true,
  },
});
pencilMotion1.fromTo(
  ".sc-generation1 .pencil",
  {
    yPercent: 10,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
  },
  {
    duration: 2,
    yPercent: 0,
    opacity: 1,
    ease: "expo.out",
  },
  "a"
);
pencilMotion1.from(
  ".sc-generation1 .pencil-art",
  {
    opacity: 0,
    duration: 2,
    ease: "power1.out",
  },
  "a+=1"
);
var hoverMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-hover",
    start: "0% 100%",
    end: "100% 100%",
    onEnter: function () {
      vid1.play();
      vid2.play();
      circleMotion.restart();
    },
    onEnterBack: function () {
      vid1.load();
      vid1.play();
      vid2.load();
      vid2.play();
      circleMotion.restart();
    },
    onLeaveBack: function () {
      circleMotion.resume();
    },
  },
});
hoverMotion.fromTo(
  ".sc-hover .art",
  {
    yPercent: 10,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
  },
  {
    duration: 2,
    yPercent: 0,
    opacity: 1,
    ease: "expo.out",
  },
  "a"
);
hoverMotion.fromTo(
  ".sc-hover .vid-wrap",
  {
    yPercent: 10,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
  },
  {
    duration: 2,
    yPercent: 0,
    opacity: 1,
    ease: "expo.out",
  },
  "a=+2"
);
var featureMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-features",
    start: "0% 70%",
    end: "100% 100%",
    // markers: true,
  },
});
featureMotion.from(
  ".sc-features .prd-pen .pen-img",
  {
    opacity: 0,
    duration: 2,
    ease: "power1.out",
  },
  "a"
);
featureMotion.from(
  ".sc-features .feature-img",
  {
    opacity: 0,
    duration: 2,
    ease: "power1.out",
  },
  "a"
);
var compMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-comp",
    start: "0% 50%",
    end: "100% 100%",
  },
});
compMotion.from(".sc-comp .img-comp", {
  opacity: 0,
  duration: 2,
  ease: "power1.out",
});
var accessoriesMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-accessories",
    start: "0% 50%",
    end: "100% 100%",
    // markers: true,
  },
});
accessoriesMotion.from(".sc-accessories .accessories-img", {
  opacity: 0,
  duration: 2,
  ease: "power1.out",
});
var compareMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-compare",
    start: "0% 70%",
    end: "100% 100%",
    // markers: true,
  },
});
compareMotion.from(".sc-compare .ipad-img", {
  opacity: 0,
  duration: 2,
  ease: "power1.out",
});
