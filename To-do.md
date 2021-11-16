__Website development plan:__

**Bulk downloader**
*Mostly developed by niceygy*
- There will be multiple bulk downloaders, for each type of download and platform e.g. one for Bedrock resource packs, then a seperate on for Bedrock resource packs
- For now, use the directory `~/downloads/bulk-downloader-beta` for creating the bulk downloader, in that folder put all the files it needs (.js scripts, css etc.)
- For the beta bulk downloader, add the Bedrock resource pack links to the beta downloader, as the are the ones we have the most of therefore it is an effective test.
- The download links will be from GitHub, therefore we don't have my server full of old downloads. (It also makes my workflow for making the packs easier lol)
- Because there will be multiple different copies of the same system for each type of download, try using as much external css as possible. That way we can eaily make bulk changes to all of the download systems.
- If possible make a search box so you can search for downloads inside the bulk downloader
- Have the name of each pack a link, so that people can press the name and easily find out more infomation about that download

**Version control**
- For me at least, version control has been a major issue, recently I changed the way I am doing version control for the project and it has made it much easier. From now on, I will only upload files from the GitHub repo to the web server everytime I make a release on GitHub. That way we can easily control versions.
- That means most of the time, what is shown on the repo files section will still be in beta. 
- Go to the releases tab to see the latest source code thats actually on the server.

**Other things**
- I want to try and make all the URLs non case sensitive. I think I found a way that envolves using the ".htaccess" file on the web server and the 404.html page.
- I am considering trying to find someone else to help as well? I think the area that (at least I) need the most help in is css
