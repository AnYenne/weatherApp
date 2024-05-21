function App() {
    Start();
    HandleStatusBar();
}

function Start() {
    var startFrame = document.getElementById("startFrame");
    var centerFrame = document.getElementById("centerFrame");
    var detailFrame = document.getElementById("detailFrame");
    centerFrame.style.display = "none";
    detailFrame.style.display = "none";
    startFrame.style.display = "flex";
    var startButton = document.getElementsByClassName("ButtonApp");
    startButton[0].onclick = ChangeToCenterFrame;
}
function ChangeToCenterFrame() {
    var startFrame = document.getElementById("startFrame");
    var centerFrame = document.getElementById("centerFrame");
    var detailFrame = document.getElementById("detailFrame");
    startFrame.style.display = "none";
    centerFrame.style.display = "flex";
    detailFrame.style.display = "none";
    var detailIcon = document.getElementsByClassName("iconNavi");
    detailIcon[2].onclick = ChangeToDetailFrame;
}
function ChangeToDetailFrame() {
    var startFrame = document.getElementById("startFrame");
    var centerFrame = document.getElementById("centerFrame");
    var detailFrame = document.getElementById("detailFrame");
    startFrame.style.display = "none";
    centerFrame.style.display = "none";
    detailFrame.style.display = "flex";
    var detailIcon = document.getElementsByClassName("navigationBar");
    detailIcon[1].onclick = ChangeToCenterFrame;
    console.log(centerFrame.style.display);
}

function HandleStatusBar() {
    var realTime = document.getElementById("timeStyles");
    const now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    // open start frame first
    realTime.innerText = `${hour}: ${minutes}`;
    setTimeout(() => {
        realTime.innerText = `${hour}: ${minutes}`;
    }, 60);
}

function GetApi() {
    fetch();
}
App();
