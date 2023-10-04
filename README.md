# Work Day Planner

## Technology Used

| Technology Used |                                                            Resource URL                                                            |
| --------------- | :--------------------------------------------------------------------------------------------------------------------------------: |
| HTML            |               [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)               |
| CSS             |                [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)                |
| JavaScript      |         [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)         |
| Bootstrap       | [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/) |
| Day.js          |                                          [https://day.js.org/en/](https://day.js.org/en/)                                          |
| Git             |                                            [https://git-scm.com/](https://git-scm.com/)                                            |

## Description

[Visit the Deployed Site](https://jacastro619.github.io/work-day-planner/)

This is a workday planner that provides a very simple interaction to plan out the user's workday. A workday typically runs from 9 AM to 5 PM. This planner offers text areas for each hour of the given workday. The hour blocks are color-coded to indicate whether the specific block is in the past, present, or future. If the hour has not arrived yet, the block color will be green. If the current hour corresponds to a specific time block, the color will be red. If the hour has already passed, the color will be grey. This makes it visually easy to see where the user's work plan is in a given day.

The user can type anything in the text box that may come up during a workday. There is a save button provided next to each text box that will save the content written in the respective hour block. Once the text is saved, it will persist until the user clears the box. If the user needs to clear all the boxes for convenience, there is a 'clear all' button that will automatically clear all the boxes.

## Usage

- **Intended Use**: To use the workday planner, the user may click on any text box during a specific hour they wish to type in. To save the content in the text box, they must click the save button located to the right of the text box (as shown in the images below). The hour blocks will be color-coded based on the current hour of the day. If the hour of a time block has passed, the color will be gray (as seen in image 1a). If the hour block corresponds to the current hour in the day, the color will be red (as seen in image 1b). If the hour of the day has not occurred, the color of the time block will be green (as seen in image 1c).

image 1a.

![Screenshot of past block](./assets/images/time%20block%20past.JPG)

image 1b.

![Screenshot of present block](./assets/images/time%20block%20present.JPG)

image 1c.

![Screenshot of future block](./assets/images/time%20block%20future.JPG)

- **Clear All Button**: The "Clear All" button is provided for a convienient way to clear all the text boxes at the same time. If the user wishes to clear all the boxes, the "Clear All" button is at the top middle of the page.

![Screenshot of clear all button](./assets/images/clear%20all%20button.JPG)

## Learning Points

- Using for loops in conjunction with DOM nodes
- Properly using jQuery selectors to manipulate the DOM
- How to implement and link Day.js to be able to utilize and format it
- How to tie in Bootstrap with JavaScript

## Author Info

Created by Jorge Castro, a student at UC Berkeley Full Stack Coding Academy. For more information go to https://bootcamp.berkeley.edu/coding/

- [Portfolio](https://jacastro619.github.io/my-portfolio/)

- [LinkedIn](https://www.linkedin.com/in/jorge-castro-2a9545177/)

- [GitHub](https://github.com/Jacastro619)
