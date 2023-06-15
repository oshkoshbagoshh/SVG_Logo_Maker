# SVG_Logo_Maker

## Description
The goal of this project was to create a program in Node JS that would take in user input at the command line,and create a simple SVG image for freelance web developers.  When developing this project, I learned about .svg file types, and how they use properties similar to XML. 

<!-- Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn? -->

## Table of Contents (Optional)



- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
<!-- 
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. -->
To install this project, use the terminal to run:
 ```sh
npm install
node index.js

```
Then answer the prompts. The generated logo will be saved in the current working directory as 'logo.svg'.

## Usage

Here is a link to the demo recording:
[video recording](https://watch.screencastify.com/v/M6bqihB3FOSGpWPnixVO)

<!-- Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ``` -->

## Credits
<!-- 
List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well. -->
AJ Javadi

## Licenses
* MIT 
<!-- The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/). -->

---

<!-- 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time. -->

## Features



<!-- If your project has a lot of features, list them here. -->

## How to Contribute
* Please contact me at amirjavadi25@gmail.com

<!-- If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer. -->

## Tests
- To Test the program, run:
```sh
npm run test
```


<!-- Go the extra mile and write tests for your application. Then provide examples on how to run them here. -->

## Issues
- Currently in version 1.0, there is a bug that is not rendering the user text correctly. It is showing up in the "logo.svg" file, but not in the image. I am currently working on this
- There is another bug that is not rendering the shapecolor correctly, the shape color is showing up in the "logo.svg" file (see below), but not in the final logo. I am working on a patch to fix this in version 2.0

```xml
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="Blue">AJ</text><rect x="90" y="40" width="120" height="120" fill="" /></svg>
```
