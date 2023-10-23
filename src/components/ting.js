@import url("https://use.typekit.net/vul5gtv.css");

* {
  font-family: neue-haas-grotesk-display, sans-serif;
  box-sizing: border-box;
  font-size: 1em;
  color: #462521;
  margin: 0;
  user-select: none;

}

img {
  max-width: 100%;
  height: auto;
  margin: 0;
  display: block;
}

#root {
  height: 100vw;
  overflow: hidden;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}

h3 {
  font-size: 1em;
}

li a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}

a:active {
  color: #8C1231;
}

button {
  flex-shrink: 0;
  padding: 1em;
  border-radius: 20px;
  border: none;
  color: #462521;
  font-size: 18px;
  background-color: #FFE0B5;
  transition: 200ms;
  margin: 0 10px;
  font-weight: bolder;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
}

button:hover {
  transform: scale(1.05);
}


@media (min-width: 767px) {



  h1 {
    font-size: 2em;

    font-weight: bold;
  }

  h2 {
    font-size: 1.5em;

    font-weight: bold;
  }

  h3 {
    font-size: 1.17em;

    font-weight: bold;
  }

}



/****************************VIEW PROFILE**************************/

.view-profile {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(202, 46, 85, 0.1);
}

.profile-photo {
  max-width: 200px;
}

.view-profile-personal-details {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  background-color: white;
  padding-bottom: 2em;
  padding-left: 1em;
  font-weight: bold;
}

.view-profile-contact-info {
  display: grid;
  align-content: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0.5em;


}

.view-profile-user-info p {
  display: flex;
  flex-direction: row;
}

.view-profile-contact-info p {
  align-items: center;
}

.view-profile-interests {
  list-style: none;
}


.view-profile .buttons button {
  padding: 0.3em;
  max-width: 300px;
  font-size: 1em;
  white-space: nowrap;
  border: 1px solid !important;
  border-radius: 0;
  background-color: #efefef;
}

.view-profile .buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2em;
  padding: 1em;
}

.view-profile .view-profile-contact-info p {
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding-left: 5%;
  padding-right: 5%;

}

.view-profile-user-info {
  background-color: white;
  margin-top: 2em;
  padding-bottom: 2em;
}

.view-profile-user-info span:first-child {
  font-size: 1em;
  font-weight: bold;
}


.selected-view-profile-user-info {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.view-profile-user-info p {
  border-bottom: solid 0.01em rgb(255, 255, 255, 0.6);
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding-left: 2%;
  padding-right: 2%;
}

.view-profile-user-info span:first-child {
  font-size: 1.08em;
}

.view-profile-personal-details h2 {
  grid-column: 1/span 2;
}

.view-profile-interests {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.4em;
  margin: 0;
  padding: 0.5em;
}

.view-profile-interests li {
  border: solid 1px;
  padding: 0.3em;
  white-space: nowrap;
  font-weight: bold;
}

.view-profile .view-profile-user-info p>span:nth-child(2),
.view-profile .view-profile-contact-info p>span:nth-child(2) {
  grid-column: 2;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-height: 200px;
  word-break: break-all;
}


@media (min-width: 767px) {
  .view-profile {
    padding-left: 5%;
    padding-right: 5%;
  }


}


/********************CREATE PROFILE FORM*********************/

.profile-form {
  padding-left: 0.7em;
  margin:0 auto;
  display: flex;
  flex-direction: column;
}

.profile-form-form-fields label {
  min-width: 150px;
}

.create-profile-photo {
  max-width: 200px;
}

.profile-form-photo-container {
  display: grid;
  grid-template-rows: auto auto auto;
}

#profilePhoto {
  grid-row: 3;
  grid-column: 1;
}

.create-profile-photo {
  grid-row: 2;
  grid-column: 1;
}

.profile-form-photo-container label {
  grid-row: 1;
  grid-column: 1;
}

input[type='file'] {
  color: rgba(0, 0, 0, 0)
}

.profile-form-interest-buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.profile-form-interest-buttons .selected {
  border: solid 1.5px;
  font-weight: bold;
}

.profile-form-interest-button {
  background-color: transparent;
  box-shadow: none;
  border: solid 1px;
  padding: 0.4em;
  border-radius: 20px;
  font-weight: normal;
  margin-bottom: 1em;
  font-size: 0.8em;
}


.profile-form-form-fields {
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  max-width:100vw;
  margin:0 auto;
}

.profile-form-form-fields div:not(:first-child) {
  display: flex;
  align-items: center;
}

.profile-form-form-fields div input {
  padding: 0.5em;
}



/********************************SIGN UP FORM*************************/

.signup-page-logo {
  max-width: 200px !important;
  place-self: center;
}

@media (min-width: 767px) {

  .signup-page-logo {
    max-width: 400px;
    place-self: center;

  }

}



.signup-page::before {
  content: "";
  background-image: url(/images/couple-wedding.png);
  background-size: cover;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  position: absolute;

}

.signup-page {
  display: flex;
  align-items: center;
  height: 100%;

  position: relative;
  flex-direction: column;
}



.signup-form-header-container {
  padding: 1.3em;
  font-size: 1.5em;

}

.signup-form-submit-button {
  min-width: 200px !important;
}

.overlay {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(202, 46, 85, 0.3);
  /* Your transparent color */
  z-index: 1;
  /* Adjust the z-index to be above the ::before pseudo-element */
}

.signup-page-image {

  margin: 0 auto;
}

.signup-page-image img {
  z-index: 1;
  position: relative;
  z-index: 1;
}

.signup-page-logo img {
  z-index: 9999;
  display: flex;
  position: relative;
}

.signup-page-content {
  z-index: 9996;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 80%;
  position: relative;
}

.signup-form-header-container {
  background-color: rgb(255, 224, 181, 0.99);
  border-radius: 25px 25px 0 0;
  display: flex;
  flex-direction: column;
}


.signup-page-form {
  z-index: 9997;
  min-width: 300px;
  flex-direction: column-reverse;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: rgb(255, 255, 255, 0.9);
  z-index: 9990;
  width: 100%;
  padding: 3em;
  color: #fff;
}

.signup-form label {
  min-width: 30%;
  display: flex;
}

.signup-form button {
  place-self: center;
  margin-top: 3em;
  background-color: rgb(255, 224, 181);
  color: #8C1231
}




.signup-page-form {
  display: flex;
  justify-content: center;
}

.signup-form div {
  display: flex;
  flex-direction: column !important;
}

.signup-form input {
  min-width: 50%;
  min-height: 40px !important;
  font-size: 1.2em;
  font-weight: bold;
  opacity: 0.9;
}

@media (min-width: 767px) {

  .signup-form-header-container {
    margin-top: 15em;
  }

  .signup-form {


    border-radius: 0 0 25px 25px;

  }

  .signup-form div {
    flex-direction: row;
  }

  .signup-form input {
    min-height: 70px;
    font-weight: bold;
    font-size: 1.5em;
    padding: 0.5em;

  }

}


/*********************HOME*********************/

.home-background-images {
  z-index: 1;
  position: absolute;
  grid-row: 1/span 3;
  z-index: 5;
  overflow: hidden;
  width: 100%;
}

.home-text h1 {
  padding-left: 10%;
  padding-right: 10%;
  max-width: 80%;
}

.home-background-images div {
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 1;
}

.home {
  height: 100vh;
  display: flex;
  justify-content: center;
}

.home-content {
  position: absolute;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr;
}


.home-logo {
  max-width: 300px;
  grid-row: 1;
  z-index: 9998;
  justify-self: center;
}


.home-text {
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
  z-index: 9997;
  color: black;
  grid-row: 2;
  height: 100%;
  margin: 0 auto;
  border-radius: 10px;
  justify-content: center;
  text-align: center;

}

.home-text h2 {
  padding: 3em 2em 7em 2em;
  background: linear-gradient(white 50%, transparent 90%);
  border-radius: 20px;
}

.home-button {
  align-self: center;
}

.home-logo {
  place-self: center;
}

.home-profile-photos {
  grid-row: 3;
  display: flex;
  flex-direction: row;
  z-index: 7;
  width: 100%;
  overflow: hidden;

}

.home-profile-photos img {
  min-width: 300px;
}

.home-background-images img {
  min-width: 800px;
}

.home-button {
  z-index: 9999;
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: -3em;
}

.home-button button {
  font-size: 30px;
  white-space: nowrap;
}





/***************************************FIND MATCHES /TINDER CARDS ************************/
.infoText {
  width: 100%;
  height: 28px;
  justify-content: center;
  display: flex;
  color: #462521;
  animation-name: popup;
  animation-duration: 800ms;
  font-size: 1em;
  grid-row: 3;
}



.find-matches-container h2 {
  grid-column: 1/span 3;
  grid-row: 1;
  text-align: center;
  margin-bottom: 2em;
}

.find-matches-content {
  display: flex;
}

.find-matches-container {
  margin: 0 auto;

  justify-content: center;
}


@media (min-width: 768px) {
  .cardContainer {
    display: flex;
    grid-row: 2;
    position: relative;
    grid-column: 2;
    justify-content: center;
    margin-top: 3em;
    max-width: 400px;

  }
}

.swipe {
  position: absolute;
}

.cardContainer {
  display: flex;
  grid-row: 2;
  position: relative;
  grid-column: 2;
  justify-content: center;
  margin-top: 3em;
  height: 70vh;
  margin:0 auto;
  max-width: 400px;


}

@media (min-width: 768px) {
  .cardContainer {
    height: 100vh;


  }
}

.card-buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 2em;
}

.card-buttons a {
  font-size: 3em;
}

.card {
  position: relative;
  background-color: #fff;
  width: 80vw;
  min-width: 280px;
  max-width: 400px;
  min-height: 350px;
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.30);
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  padding: 1em;
  justify-self: center;
}

.cardContent {
  width: 100%;
  height: 100%;
}

.swipe:last-of-type {}

.card .card-info {
  position: absolute;
  margin: 10px;
  color: #fff;
}

.card img {
  border-radius: 15px;
}





@keyframes popup {
  0% {
    transform: scale(1, 1)
  }

  10% {
    transform: scale(1.1, 1.1)
  }

  30% {
    transform: scale(.9, .9)
  }

  50% {
    transform: scale(1, 1)
  }

  57% {
    transform: scale(1, 1)
  }

  64% {
    transform: scale(1, 1)
  }

  100% {
    transform: scale(1, 1)
  }
}





.infoText {
  width: 100%;
  height: 28px;
  justify-content: center;
  display: flex;
  color: #fff;
  animation-name: popup;
  animation-duration: 800ms;
}

.find-matches-container {
  overflow: hidden;
  height:100vh;
}

.swipe {
  position: absolute;
}

.cardContainer {
  display: flex;
  width: 90vw;
  margin: 0 auto;
  align-items: center;
  position: relative;
  top:50%;
}

.card-buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 2em;
}

.card-buttons a {
  font-size: 3em;
}

.card {
  position: relative;
  background-color: #fff;
  width: 80vw;
  min-width: 280px;
  max-width: 500px;
  min-height: 350px;
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.30);
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  padding: 1em;
}

.cardContent {
  width: 100%;
  height: 100%;
}

.swipe:last-of-type {}

.card .card-info {
  position: absolute;
  bottom: 0;
  margin: 10px;
  color: #fff;
}

.card img {
  border-radius: 15px;
}

.infoText {
  width: 100%;
  justify-content: center;
  display: flex;
  color: #fff;
  animation-name: popup;
  animation-duration: 800ms;
}





@keyframes popup {
  0% {
    transform: scale(1, 1)
  }

  10% {
    transform: scale(1.1, 1.1)
  }

  30% {
    transform: scale(.9, .9)
  }

  50% {
    transform: scale(1, 1)
  }

  57% {
    transform: scale(1, 1)
  }

  64% {
    transform: scale(1, 1)
  }

  100% {
    transform: scale(1, 1)
  }
}