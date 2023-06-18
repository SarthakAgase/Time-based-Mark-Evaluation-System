window.onload = function () {
  eel.Get_Info()(function (Info) {
    document.getElementById("name").innerHTML = `${Info[0]}`;
    document.getElementById("roll_no").innerHTML = `${Info[1]}`;
    document.getElementById("marks").innerHTML = `${Info[2].toFixed(2)}`;
    document.getElementById("time").innerHTML = `${Info[3]}`;
    document.getElementById("rank").innerHTML = `${Info[4]}`;
    // console.log(Info);
  });
};
