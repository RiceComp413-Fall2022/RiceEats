## RiceEats https://www.rice-eats.com/

## Team Members
John Lee / jl170
Claire Xu / ccx1
Joseph Gioia / jeg4
Michael Lee / mdl8

## Proposal
Full Proposal link: https://drive.google.com/file/d/1EtoiAvoaFfrcC35bzGLDeJRZNEeY1FiE/view?usp=sharing

## Description
Rice students don’t know where the best place on campus to eat is. H&D doesn’t know which food items students do and don’t like. This web app solves both of these problems by empowering students to review the serveries' menu options as well as see their average ratings.

## Project structure
The frontend is located at /front_end/rice-eats. It is written in React using Axios for communication with the backend and Material UI for some ui components. Many of the components are custom. The frontend is hosted by Netlify which automatically updates the site whenever new changes are pushed.

The backend is located at /back_end/django_server. It is written in Python with the Django framework. Each endpoint is a view and the script to repopulate the database with the new week of meals is a command. The two endpoints are '/serveryMenus' which retrieves all of the meals for a given date and meal time and '/submitReview' which updates the database with a new review. The database is a sqlite database. We use Django's intregrations for sqlite databases in order to populate the database. The backend is hosted by Heroku at https://rice-eats-backend.herokuapp.com/admin. 

## Features
1. Ability to view an entire week's worth of menu options easily
2. Ability to rate menu options (1-5 stars)
3. Ability to comment for every menu option
4. Ability to filter menu options based on dietary restriction(s)
