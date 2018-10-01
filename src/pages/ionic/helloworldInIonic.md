# Hello World in Ionic !!
#### This is the editorial which will go through you for making a simlple Hello World program in Ionic.
#### Steps
1. Install `ionic` , `npm` ,`angular` and `cordova` if not installed.[See first introduction for more information]
   >sudo apt-get install nodejs <br/>
   >sudo apt-get install npm  <br/>
   >sudo npm install -g ionic cordova <br/>
   
2. Create a folder named `helloworld`
  
   >ionic start helloworld blank
   
   Note:
   Since this is small project enter No or N when prompted during program execution.
   
    ![alt text](https://raw.githubusercontent.com/yog24esh/guide/master/src/pages/ionic/img/2018-10-01%20(2).png "Logo Title Text 1")
   
  
3. Change directory to `helloworld` [ this is your ionic directory]
   >cd helloworld
4. Open the folder in your text editor . you will see various files and subfolder . 
Dont panic these files are generated automatically by npm for you.Just go to `src`->`page`->`home`->`home.html` .
   ![alt text](https://raw.githubusercontent.com/yog24esh/guide/master/src/pages/ionic/img/2018-10-01%20(4).png "Logo Title Text 1")

5. `home.html` is the html page where you can write html syntax.<br/>
   `home.scss` is the css page to write css syntax.<br/>
   `home.ts` is the typescript page to write typescript code.
//img here
6. Delete the template and add the html syntax as shown in image.
   ![alt text](https://raw.githubusercontent.com/yog24esh/guide/master/src/pages/ionic/img/2018-10-01%20(8).png "Logo Title Text 1")
7. Save the code and run 
   > ionic serve
8. To see your code running go to browser and and open localhost:8100.<br/> 
   ![alt text](https://raw.githubusercontent.com/yog24esh/guide/master/src/pages/ionic/img/2018-10-01%20(5).png "Logo Title Text 1")

<br/>
End Note : Since this is a first project we havent included android or ios, cordova files and features to run on native devices.Subsequent tutorial will do so.
<br/>
I hope you will love to do more . Any querry tweak in github.
<br/>
Made By  - Yogesh adhikari
