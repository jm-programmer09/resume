var currents = "main";
const changeTo = (newID) => {
  const current = document.getElementById(currents), news = document.getElementById(newID);
  const frost = document.getElementById("frost");

  document.getElementById(currents + "-t").className = "link";
  document.getElementById(newID + '-t').className = "high link";
  currents = newID;
  
  frost.style.display = "block";
  frost.style.animation = "frost_animation linear 2s forwards";

  const interval = setInterval(function (){
    current.style.display = "none";
    news.style.display = "flex";
    window.scrollTo(0, 0);
    clearInterval(interval);
  }, 1000);

  const display_interval = setInterval(function (){
    frost.style.display = "none";
    clearInterval(display_interval);
  }, 1999);
};