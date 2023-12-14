
export const useGoToTop = (id) => {
  if(id){
    document.querySelector(id).addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}