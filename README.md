# Workshop_4

•	Create an interactive p5.js sketch with at least three different kinds of user input events.
•	Experiment with ways to record and redeploy inputs from the user.
•	Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

https://92386682.github.io/Workshop_Task_4/


Plan/development
Unhelpful user interface.
I wanted to create a customizable interface that takes user input, slaps their hand away from the laptop, and returns either back to it’s original state or a less user friendly one. Over the course of this task, I lost track of that and ended up making a simplified version of the SNES game Duck Hunt.
Over this process, I experimented with UI placement that retained it’s positioning with variable window sizing, three user inputs (button.mousepressed(), slider.value() and variable background based off of mouse x/y values) as well as deepening understanding of Timeout and setInterval loops

User input:

Beginning with basic tests on creating a button, centring that button on the canvas, updating this with screen resizing, and moving on to having the button press return text.
![30](https://github.com/user-attachments/assets/09755a0c-59ce-46f8-a539-ed1171c59a2d)

Taking a step back, and returning the next day, I chose to make the background colour shift dynamically based on the mouse position. This was fairly simple one line, but I initially thought that it had to be located alongside the windowResized function to update dynamically. Trying the preview in browser worked correctly, whilst the built in live preview in codium did not.
![32](https://github.com/user-attachments/assets/77f110a4-f7b3-43b7-b541-350e700b5968)

Updating my button to be “unpressable” was fairly simple, utilising the ‘.mouseover” and a simple randomiser of x/y coordinates. I then added a title, and dynamic text depending on whether the button had been moused over or not. Adding dynamic text took longer than expected for a simple task, as I was not familiar with storing and updating text within variables. At this point, I will still working to create a really annoying user interface.
![34](https://github.com/user-attachments/assets/103b5319-05a2-4e9a-b89b-eabd5558abee)

At some point in the process of changing from the button moving (due to the .mouseover) to the user being able to click the button (if () combined with a variable and .mouseClick()), the button disappeared and refused to reappear. Finding the root cause of this was also a good time to streamline and clean up the code. After struggling with the issue for a while, I learnt that mouseRollover() is a distinct event that continues regardless of whether the if/else statement was triggered.
![37](https://github.com/user-attachments/assets/5e0f6ebd-e22d-4c86-9823-07176281b2dc)

Running out of time for this task, I then cobbled together a duck hunt inspired point’n’click, replacing Rollover with mousePressed(), adding an interval to move the button and a slider to determine how fast this happened.
![38](https://github.com/user-attachments/assets/1f18eb68-4474-4b20-8c87-c3bab066e0d2)

 After creating the slider, there was a fair portion of time of it not working before learning that setting the slider value as a variable was causing this disconnect and making it update (discovered by using the text function), for reasons unknown to me.
  ![39](https://github.com/user-attachments/assets/4cac3095-a864-4b38-97c0-b78e48e6a4d9)
![41](https://github.com/user-attachments/assets/7b44bd11-d9c8-4da2-b846-db1832acac92)

 It then continued to not work, until I learnt that setInterval() is not a dynamically looping function, and that it maintained the time value from the first time the code ran, maintaining the initial slidertest.value() reading regardless of the value changing. Reading on StackOverflow from a user facing a similar problem(link below),  I replaced  setInterval() with a setTimeout() calling on itself, based off a review of workshop 2. At this point, I decided that this workshop task was finished

 These two inputs, combined with the changing background driven by the user mouse, constituted my 3 user inputs.  
