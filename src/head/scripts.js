import React from 'react';

const scripts = [
     // JQuery v3.2.1 (Bootstrap requires JQuery)
     <script 
  crossOrigin='anonymous'
  src={
      'https://code.jquery.com/jquery-3.2.1.min.js'
      }
  integrity='sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4='
    />,
    // bootstrap v 3.3.7 JavaScript
    <script 
    crossOrigin='anonymous'
    src={
        'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'
        }
    integrity={
        'sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa'
        }
         />
];

export default scripts;