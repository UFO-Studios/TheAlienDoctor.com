/*
WDR.JS Worker Download Recorder client for TheAlienDoctor.com
By Niceygy. For help, please see github.com/ufo-studios
WARNING! This script will NOT use any cache. (Cache bypasses it). 
IF you see high/abnormal traffic, check this!
*/

const url = new URL(document.referrer);
const path = url.pathname.substring(1); // Remove the first '/'

fetch("https://download.thealiendoctor.com?page=" + path, { cache: "no-cache" })
  .then((response) => response.text())
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => {
    console.error("Error making the request:", error);
  });

document.addEventListener("DOMContentLoaded", function () {
  const downloadButtons = document.querySelectorAll(".btn-blue");

  downloadButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      if (this.dataset.redirectUrl == null) {
        //normal href, ignore
        return;
      } else {
        event.preventDefault(); // Prevent the default action (navigation)

        const url = new URL(this.dataset.redirectUrl);

        fetch(this.dataset.redirectUrl, { cache: "no-cache" })
          .then((response) => response.text())
          .then((data) => {
            // console.log(data);
          })
          .catch((error) => {
            console.error("Error making the request:", error);
          });

        // Navigate to the modified URL
        window.location.href = url.toString();
      }
    });
  });
});


/**
 * USAGE INSTRUCTIONS
 * 
 * Links: if they are a pack download, use the following:
 * 
 * <a
      data-redirect-url="https://download.thealiendoctor.com/reder?url=Username/Repository-name?file=Release-Version/File.Name"
      class="btn-blue">Download latest version (MCBE 1.19.60) [V1.0.0]
  </a>

 * For all other links, use the normal href.

 * Add     <script src="js/WDR.js"></script> to the js bit at the bottom 
 */