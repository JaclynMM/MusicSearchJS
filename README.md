#TotalSounds

REACT APP INSTRUCITONS
To copy Project files:
git clone https://github.com/JaclynMM/MusicSearchJS.git

You will need node and npm installed globally on your machine.

Installation:
npm install

To Run Test Suite:
npm test

To Start Server:
npm start

Overview:
This is an application build to have a place where you can search of ausician/artist information while also being able to see event information from the bandsintown.com api in the same place. 

The details are pulled from a backend python project previously created. There is a separate README file within that project but I will list those same instructions below along with the information on running the React JS app you see here.




BACKEND PYTHON CRUD APPLICATION
# MusicSearch
Cross Search Artist, Bands, Albums

To copy Project files:
git clone https://github.com/JaclynMM/MusicSearch.git

Follow to create the Virtual Environment for this project
(3 commands)
python -m venv env
source env/bin/activate
python -m pip install -r requirements.txt

from within the musicians folder, to run in the terminal
python manage.py runserver 

Superuser signin for admin page
user: jaclyn
pswd: pythonclass

Overview:
This site is a place to cross reference musicians and band projects. Bands have multiple artists, while cross referencing the many bands artists are involved in.

This project includes 3 models of Bands, Artists and Albums. It is an open source to where you can add and update with your specific knowledge to help us build our database.

This project was converted to an api and can operate as both a CRUD app and api. 
CRUD APP ../artist, ../bands, ../albums
API ../Artist, ../Bands, ../Albums