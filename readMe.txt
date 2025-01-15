To open the website v3 folder in local host, type in terminal "cd " (don't include quotes + don't forget space after cd) and then drag "code" folder into terminal and hit enter. Opening a new tab will open the same project, if this has already been done.


TO RUN (LOCAL HOST):

IN TAB #2 OF TERMINAL...

npm run start 



TO UPDATE DOXIMITY:
Drag "src" folder into Sublime
Put assets in "gallery" > "dox" folder
Open "projects.js". Add new 'pages' to "export const projects..." Section
Open "menu.js". Add the above pages to "id: 'editorial'" Section in the order I want them to show up



TO PUBLISH:

IN TERMINAL (TAB #1 - no the tab with localhost running)…

git add .; git commit -m "____"
___  = labels/describes the new addition (make sure to include quotes around it)

git push
  = pushes the new addition to GitHub

npm run deploy
  = deploys it publicly 




TO SYNC WITH OTHERS' CHANGES

git pull

(If aborts and asks to commit changes, do step one of "TO PUBLISH")

(If completes pull but shows a screen saying "Merge..." Type anywhere: :wq)





TO CREATE NEW JOB APP LANDING PAGE

Make a copy of any previous job app in /containers/jobs folder

Rename to "(RelevantCompany).js"

Open to "(RelevantCompany).js"

Hit CMD + Shift + F 
	Find: "__"
	Where: "src/"

Everywhere there is "__", except on __App.js or (RelevantCompany)App.js, add "Relevant Company" by double clicking on the highlighted __


