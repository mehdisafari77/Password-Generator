# Password Generator
A Password Generator in order to allow better password creation for users using prompts, alerts and confirms.

## Site GIf
![Web](https://user-images.githubusercontent.com/75599021/134599642-5425948e-0196-4eb2-9dfd-7d886d3935f8.gif)

## Technologies Used
- HTML - for base structure
- CSS - stying of html
- Git - version control system to track changes to source code
- Javascript - for logic and finctionallity purposes
- GitHub - hosting repository that can be deployed to GitHub Pages

## Summary 
This website will start after the first click on the "Generate" button, staring the password creation process with prompt(), alert(), and confirm() methods in Javascript. The user will have to choose a dsired passsword length, choose what they want the password to contain, for example amongst special characters, lowercase or uppercase characters or even choosing if they want to inlcude numbers or not. After the questions are properly answered, a password is generated and can be copied by the user. 

## Javascript Code Snippet

### An example Alert() & Confirm() Usage With If Statement.
```javascript
if (!numberConfirm && !specialCharConfirm && !upperCaseConfirm && !lowerCaseConfirm) {
    alert("You must confirm at least one of the options.")
    numberConfirm = confirm("Click OK if you would like your password to have numbers.")
    specialCharConfirm = confirm("Click OK if you would like your password to have speacial characters.")
    upperCaseConfirm = confirm("Click OK if you would like your password to have uppercase characters.")
    lowerCaseConfirm = confirm("Click OK if you would like your password to have lowercase letters.")
  }
```

## Deployed Link

* [See Live Site](https://mehdisafari77.github.io/Password-Generator/)

## Author Links
[LinkedIn](https://www.linkedin.com/in/mehdi-safari-992799142/)
[GitHub](https://github.com/mehdisafari77)

## Acknowledgements
- W3 Schools
