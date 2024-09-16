/*
WDR.JS Worker Download Recorder client for TheAlienDoctor.com
By Niceygy (Ava Whale). For help, please see github.com/ufo-studios
WARNING! This script will NOT use any cache. (Cache bypasses it). 
IF you see high/abnormal traffic, check this!
*/

const url = new URL(document.referrer);
const path = url.pathname.substring(1); // Remove the first '/'


fetch('https://download.thealiendoctor.com?page='+path, { cache: 'no-cache' })
  .then(response => response.text())
  .then(data => {
    // console.log(data);
  })
  .catch(error => {
    console.error('Error making the request:', error);
  });
