$(function () {
  /*
  $("button").on("click", function () {
    console.log("button click");
  });
*/
  /*
  $("div").on({
    click: () => {
      $("div").css("background-color", "red");
      $("div").text("click");
    },
    dblclick: () => {
      $("div").css("background-color", "green");
      $("div").text("dbclick");
    },
    mouseenter: () => {
      $("div").css("background-color", "blue");
      $("div").text("mouseenter");
    },
    mouseout: () => {
      $("div").css("background-color", "gray");
      $("div").text("mouseout");
    },
  });
*/

  $(document).on("click keydown", (e) => {
    if (e.type === "click") {
      $("div").text("クリックされました！");
    }

    if (e.type === "keydown") {
      $("div").text("キーが押されました!");
    }
  });
});
