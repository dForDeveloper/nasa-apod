# [NASA Astronomy Picture of the Day](https://nasa-apod-vue.firebaseapp.com)

**NASA Astronomy Picture of the Day** is a mobile-friendly Vue app that displays the current NASA Astronomy Picture of the Day and all the pictures of the current month. Building this app in two days was my first experience using Vue and Vue Router.

## How to Use the App:
  ### As a User:
  - Go to [the website](https://nasa-apod-vue.firebaseapp.com)
  - You should be automatically redirected to the current picture of the day
  - Click the left button to view the previous day's picture
  - Click on the link for all pictures to view all the month's pictures on one screen
  - Click on any picture's card to view a larger version of that image/video
  - Click on the link for today to go back to the current day's picture
  
  ### As a Contributor: 
  - Fork the repo
  - Open your terminal
  - `cd` to where you want the repo directory to be created
  - Clone your fork down to your machine either
    - with SSH: `git clone git@github.com:`*yourusername*`/nasa-apod.git`
    - or with HTTPS: `git clone https://github.com/`*yourusername*`/nasa-apod.git`
  - `cd nasa-apod`
  - `npm install`
  - Sign up for a NASA API key [here](https://api.nasa.gov/index.html#apply-for-an-api-key)
  - Create a file in the root directory named `.env.local`
  - In that file add `VUE_APP_BASE_URL=https://api.nasa.gov/planetary/apod?api_key=`*yourAPIkey*
  - `npm run serve` to start the app at [http://localhost:8080](http://localhost:8080)
  - Push changes up to your fork
  - Make pull requests from your fork to the original repo

## Preview of the App
#### Desktop View
![NASA Astronomy Picture of the Day Desktop Preview](https://user-images.githubusercontent.com/41239540/56305783-20d06a00-60fe-11e9-8448-6dbc598d3e58.png)

#### Mobile View
<img width="320" alt="NASA Astronomy Picture of the Day Mobile Preview" src="https://user-images.githubusercontent.com/41239540/56306259-3db96d00-60ff-11e9-9b0e-0bd0008b62a3.png">

## Technologies Used:
  - Vue
  - Vue Router

## Contributors:
- Jeo D [@dForDeveloper](https://github.com/dForDeveloper)
