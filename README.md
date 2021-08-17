# Uber Clone Application
<div>
<img width="300" alt="Screen Shot 2021-08-17 at 9 53 16 PM" src="https://user-images.githubusercontent.com/67869620/129750375-e747cf39-2719-4a69-bfde-bdab90d906d9.png">
  <img width="300" alt="Screen Shot 2021-08-17 at 9 53 36 PM" src="https://user-images.githubusercontent.com/67869620/129750664-ec49dff1-71e7-4f47-83d2-e25bdba3f4d4.png">
<img width="300" alt="Screen Shot 2021-08-17 at 9 53 49 PM" src="https://user-images.githubusercontent.com/67869620/129750720-16a34375-5382-4987-9f62-4fae05751930.png">
</div>

## Introduction

- You can look your location on map and request a destination. App will calculate distance, time travel and price from origin to destination
- Some technology in this application: 
  - React-native / Redux / tailwinCSS / 
  - Google Cloud APIs : Map, Direction, Matrix

## Setup Guide

### Setup Google APIs
- Go to your [Google cloud platform](https://console.cloud.google.com/) and select your project or create a new project.
- Search and active this API keys:
    - Places SDK
    - Maps SDK
    - Directions API
- Go to your Credentials, create an API Key (Your google account must enable billing pay)
- You will put that API key in .env file on GOOGLE_API_KEY constant

### Setup project
- Clone this repository to your local ```git clone https://github.com/dylan1607/uber-clone.git```
- Open terminal and run ```yarn i``` for installing dependencies
- run ```expo start --ios``` if use IOS or ```expo start --android``` using Android


