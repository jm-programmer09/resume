const move_user = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({
    behavior: "smooth",
    scrollOptions: { duration: 2000 }
  });
};