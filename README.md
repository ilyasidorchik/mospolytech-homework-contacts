# Contacts Cross-platform App

You can add, edit and remove people in your contact book. There are available the following contact fields: last, middle and first names, phone number and email.

In the first screen, contact list, you’ll see full name only. Other properties are placed in contact page.


### Technologies

I could create mobile app by using native programming language like Swift or Kotlin but I wanted to try Cordova framework. It allows to use standard web technologies: HTML5, CSS3, and JavaScript — for cross-platform development.

The bonus homework task was to make sync with system contacts. For such opportunities there are plugins for Cordova. Unfortunately, I ran into a problem with `cordova-plugin-contacts`: it was breaking my React somehow.


### How to see app

You should clone my repository and run these commands:
```
yarn
yarn build
yarn global add cordova
cordova emulate ios
```

---

The app was made as a homework at Moscow Polytech on subject ’Mobile integration’
