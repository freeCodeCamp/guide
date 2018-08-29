--- 
title: responsiveness
---

## What is responsive web design (RWD)?
        • Responsive web design (RWD) is an approach to web design which makes web pages render well on a variety of devices and  
          window or screen sizes.
          
        • Responsive web design uses only HTML and CSS, JavaScript (JS) is not required to make webpage responsive.
        
![responsiveness](https://github.com/harshittpandey/hacktrec-2k17/blob/master/responsive-web-01-en.jpg)

# Implementation
Web Page is divided into 12 columns(grids),  has a total width of 100%.
    
    First lets calculate the percentage for one column: 100% / 12 columns = 8.33%.
    
    Then make one class for each of the 12 columns, class="sw-" and a number defining how many columns the section should span:            
         i.e  sw-4 {width: 33.33%;} 
         
# CSS Properties
    
        1-	float:  specifies whether or not an element should float.
        2-	clear:  is used to control the behavior of floating elements.
        3-	media Queries:  is used to make layout responsiveness on all screens.

![implementation](https://github.com/harshittpandey/hacktrec-2k17/blob/master/hacktoberfest1.jpg)

## Usage:

1- Create a file responsive.css

2- **Inert given code in responsive.css**
        
        .sw-row:after ,.sw-row:before {
	content: "";
	display:table;
	clear: both;
        }
        .sw-col{
                float:left;
                width: 100%;
                position: relative;
        }
        .sw-col.s1{
                width: 8.33%;
        }
        .sw-col.s2{
                width: 16.66%;
        }
        .sw-col.s3{
                width: 25%;
        }
        .sw-col.s4{
                width: 33%;
        }
        .sw-col.s5{
                width: 41.63%;
        }
        .sw-col.s6{
                width: 50%;
        }
        .sw-col.s7{
                width: 58.33%;
        }
        .sw-col.s8{
                width: 66.66%;
        }
        .sw-col.s9{
                width: 75%;
        }
        .sw-col.s10{
                width: 83.33%;
        }
        .sw-col.s11{
                width: 91.66%;
        }
        .sw-col.s12{
                width: 100%;
        }

        @media (min-width: 601px)
        {
        .sw-col.m1{
                width: 8.33%;
        }
        .sw-col.m2{
                width: 16.66%;
        }
        .sw-col.m3{
                width: 25%;
        }
        .sw-col.m4{
                width: 33%;
        }
        .sw-col.m5{
                width: 41.63%;
        }
        .sw-col.m6{
                width: 50%;
        }
        .sw-col.m7{
                width: 58.33%;
        }
        .sw-col.m8{
                width: 66.66%;
        }
        .sw-col.m9{
                width: 75%;
        }
        .sw-col.m10{
                width: 83.33%;
        }
        .sw-col.m11{
                width: 91.66%;
        }
        .sw-col.m12{
                width: 100%;
        }	
        }

        @media (min-width: 993px)
        {
        .sw-col.l1{
                width: 8.33%;
        }
        .sw-col.l2{
                width: 16.66%;
        }
        .sw-col.l3{
                width: 25%;
        }
        .sw-col.l4{
                width: 33%;
        }
        .sw-col.l5{
                width: 41.63%;
        }
        .sw-col.l6{
                width: 50%;
        }
        .sw-col.l7{
                width: 58.33%;
        }
        .sw-col.l8{
                width: 66.66%;
        }
        .sw-col.l9{
                width: 75%;
        }
        .sw-col.l10{
                width: 83.33%;
        }
        .sw-col.l11{
                width: 91.66%;
        }
        .sw-col.l12{
                width: 100%;
        }  
        }

3- Add 
    ``` 
    <link rel="stylesheet" type="text/css" href="responsive.css"> 
    ```
    
4- 
    ```
           
           <div class= “sw-row “>
              <div class=”sw-col l3”>
              </div>
              <div class=”sw-col l3”>
              </div>
              <div class=”sw-col l3”>
              </div>
           </div> 
    ``` 
    this divides the large screen in three parts 
    
5- 
   More Information:[W3school](https://www.w3schools.com/css/css_rwd_grid.asp)

  
  
    

