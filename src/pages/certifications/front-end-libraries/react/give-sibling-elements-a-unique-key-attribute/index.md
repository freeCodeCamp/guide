---
title: Give Sibling Elements a Unique Key Attribute
---
## Give Sibling Elements a Unique Key Attribute

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/react/give-sibling-elements-a-unique-key-attribute/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(function(i){
     <!-- use jsx to create element  -->
     const jsx = <li key={i}>{i}</li>  
     return jsx;  
  }); // change code here
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
