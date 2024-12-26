// const shareData = {
//     title: "MDN",
//     text: "Learn web development on MDN!",
//     url: "https://developer.mozilla.org",
//   };
  
 
//   const resultPara = document.querySelector(".result");
  
//   // Share must be triggered by "user activation"
//   btn.addEventListener("click", async () => {
//     try {
//       await navigator.share(shareData);
//       resultPara.textContent = "MDN shared successfully";
//     } catch (err) {
//       resultPara.textContent = `Error: ${err}`;
//     }
//   });
  
const btn = document.getElementById("btn");

  btn.addEventListener("click", async () => {
    try {
      await navigator.share({ title: "JCreation", url: "https://jcreation.vercel.app/" });
      console.log("Data was shared successfully");
    } catch (err) {
      console.error("Share failed:", err.message);
    }
  });
