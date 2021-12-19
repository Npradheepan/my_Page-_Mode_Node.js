$(document).ready(function () {
    var body = $("body"),
      container = $(".img_covr_container"),
      img_1 = $(".content_img_1");
      img_2 = $(".content_img_2");
  
    TweenMax.set([img_1, img_2], { transformStyle: "preserve-3d" });
  
    body.mousemove(function (e) {
      var sxPos = (e.pageX / container.width()) * 100 - 100;
      var syPos = (e.pageY / container.height()) * 100 - 100;
      
      TweenMax.to(img_1, 2, {
        rotationY: 0.05 * sxPos,
        rotationX: -0.01 * syPos,
        transformPerspective: 400,
        transformOrigin: "center center -100",
        ease: Expo.easeOut
      });
      TweenMax.to(img_2, 1, {
        rotationY: -0.01 * sxPos,
        rotationX: 0.05 * syPos,
        transformPerspective: 200,
        transformOrigin: "center center -100",
        ease: Expo.easeOut
      });
    });
  });