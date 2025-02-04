@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  padding: 0;
  margin: 0;
  font-family: "Poppins", serif;
  font-style: normal;
  box-sizing: border-box;
}

header {
  position: relative;
  z-index: 10px;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  margin: 0px 40px;
}

.list ul {
  display: flex;
  list-style: none;
  gap: 60px;
  color: white;
  font-size: larger;
  font-weight: lighter;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
}

.logo img {
  height: 90px;
  width: 150px;
}

#home {
  background-image: url(assets/background.jpg);
  height: 90vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.56);
  background-blend-mode: overlay;
}
.intro {
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: center;
  align-items: center;
  color: white;
}
.intro p {
  font-size: 40px;
  font-weight: 500;
  transform: scale(1.2, 1.4);
  opacity: 0;
  animation: slidein 1s ease-in forwards;
  animation-delay: 0.5s;
  transition: all 1s ease-in-out;
  line-height: 3;
}
.intro h5 {
  font-size: 35px;
  line-height: 1;
  opacity: 0;
  animation: h5 1s ease-out forwards;
  animation-delay: 1.6s;
  font-weight: 400;
  transform: scale(1.3, 1.4);
}
@keyframes h5 {
  from {
    transform: translateX(-100%) scale(1.1);
  }
  to {
    transform: translateX(0%) scale(1);
    opacity: 1;
  }
}

@keyframes slidein {
  from {
    transform: translate(0);
  }
  to {
    transform: translate(100);
    opacity: 1;
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 8px; */
  position: relative;
  bottom: 40px;
  gap: 15px
  ;
}
.button {
  display: inline-block;
  background-color: yellow;
  text-decoration: none;
  padding: 7px 12px;
  border-radius: 16px;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: black;
  animation: slidein 1s ease-in forwards;
  opacity: 0;
  animation-delay: 3s;
}
.btn2{
    background-color: darkturquoise;
    animation-delay: 3.3s;
    
}
.button:visited {
  color: black;
}
.btn2:visited{
    color: white;
}
.seperation{
    width: 100vw;
    height: 3px;
    background-color: rgba(96, 96, 235, 0.658);
}
#About {
  background-color: #f9f9f9;
  padding: 50px 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
}

.about-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.about-heading {
  text-align: center;
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 20px;
  position: relative;
}

.about-heading::after {
  content: '';
  display: block;
  width: 50px;
  height: 4px;
  background-color: #3498db;
  margin: 10px auto 0;
  border-radius: 2px;
}

.info {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  line-height: 1.8;
  transition: transform 0.3s, box-shadow 0.3s;
}

.info:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.foundation strong {
  color: #e74c3c;
}

.spm {
  border-left: 4px solid #9b59b6;
}

.principal {
  border-left: 4px solid #2980b9;
}

.faculty {
  border-left: 4px solid #27ae60;
}

p {
  margin: 10px 0;
}

strong {
  font-weight: bold;
}
