Car Tracker UI README

## Description
The application keeps track of mileage and service information for multiple cars.  I made it at the request of my girlfriend who currently keeps track of this information in a notebook.

## Website URLs
https://tacostacostacos.github.io/car-tracker-ui/
https://github.com/TacosTacosTacos/car-tracker-ui

https://car-tracker-api.herokuapp.com/
https://github.com/TacosTacosTacos/final_project_api

## Technologies Used
HTML 5; CSS3; Bootstap 3; Ember; ember-confetti; ember-konami-code;

Photos from unsplash.com

## Development process and problem-solving strategy
Before starting the project, I knew that I was going to have issues with Ember.  The framework has very specific expectations regarding how the programmer works with it, and if you go against those expectations, it will act out.  To address this, I decided to start with a relatively simple idea that I could build up.  I wanted to meet MVP, and then build additional features into the website once I was done.  I also experimented with Ember during my free time in order to get an understanding of its limitations.

Once I began to work on the project, as expected, I ran into problems.  My strategy for solving problems was to try to work through them myself as much as possible.  If I felt like I was getting no where, I moved onto another piece of functionality that needed to be completed.  If I still couldn't resolve the problem after going back to it, I entered a ticket.

## List unsolved problems which would be fixed in future iterations.
In the end there were no unsolved problems.  There were just things that I didn't have time to implement since I had to spend more time than originally planned working on solving problems.  Now that I have a better grasp of how ember handles data, I will be able to work with it more efficiently next time.

- The NHTSA has an API available for car information.  The quality of data is very mixed (doesn't have very old cars)  Due to this, the application just implements it on signup.  Model information can be overwritten on login.
- The functionality to delete cars isn't implemented.  I actually would only soft expire records if the project requirements would allow me to skip doing delete actions.
- Charting of mileage data.  I figured out what I needed to do, but I determined that there wasn't enough time to implement the changes while meeting quality standards ahead of the deadline.
- Notifications when a service is needed on a car based on last service

## Link to wireframes and user stories.
- The user signs up for the website after providing information on there car
- The user can store car mileage information
- The user can store car service information
- The user can store information on multiple cars

https://wireframe.cc/a9O6Iu
https://wireframe.cc/I5PMyw
https://wireframe.cc/eg8DTc
https://wireframe.cc/fGknfK
https://wireframe.cc/JO5u34
https://wireframe.cc/FU768t
https://wireframe.cc/NpT47s

## Application Screenshot
![Alt text](https://preview.ibb.co/dpLcL6/Screen_Shot_2017_11_28_at_8_35_30_PM.png "Optional title")
