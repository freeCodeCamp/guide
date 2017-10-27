 ---
 ## Grid Layout
 
Flexbox allows us to solve complicated websit layouts by providing a responsive grid system. It's similar to what Bootstrap did for website developers but a native solution.

Let's take two paragraphs as an example.

<img src = "https://i.imgur.com/lFJaBUfl.png"></img>

As you can see, the two paragraphs are stacked vertically on top of one another. No matter how wide your display is, they will stay the same.

Now suppose we wanted to stack them side by side to be able to achieve some sort of effect. Flexbox allows us to do this with a simple addition of display:flex; in the parent document. In this case, it's the body.

```
body{
  display:flex;
}

p{
  background-color: lightblue;
  margin-left: 2px;
  flex-grow:1;
}
```

Viola! Here's the result.

<img src = "https://i.imgur.com/4X8ITZih.png"></img>

Now let's change it up and add in some other blocks of varying sizes in order to see how the grid layout of flexbox works.

<img src =  "https://i.imgur.com/eusgsKIh.png"></img>

When you think about flexbox, there are two main axes you need to consider

<img src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-80/llflex2-02.png"></img>

These two axes determine how your website/flex container/nested flex container is going to look like. You can manipulate their look by using either justify-content or align-items.

<b>justify-content</b>

justify-content affects your flexboxes on the <u>main axis</u>. It has five possible configurations. They are..

<ul>
  <li>flex-start</li>
  <li>center</li>
  <li>flex-end</li>
  <li>space-between</li>
  <li>space-around</li>
</ul> 

Here's a good graphic I found online that explains how the five of them work.

<img src = "http://www.w3.org/TR/css3-flexbox/images/flex-pack.svg">

<b>align-items</b>

Align items affects items on the cross axis. For flex-display containers with a flex-direction of row/row-reverse, this is the horizontal layout. It has five possible configurations too. They are..

<ul>
  <li>flex-start</li>
  <li>center</li>
  <li>flex-end</li>
  <li>baseline ( targets the baseline, which means that the text within the boxes will be aligned.)</li>
  <li>stretch ( Fills up the entire container and is the default setting )</li>
</ul> 

Here's a good graphic I found online that explains how the five of them work.

<img src = "http://www.w3.org/TR/css3-flexbox/images/flex-align.svg">

<b>How They Work together</b>

Now let's see these boxes in action. I'll give three layouts and you can guess what they are. Answers and full code will be listed at the bottom. I've enlarged some of the boxes to make it clearer what these images represent.

<i>Layout 1</i>

<img src  =  "https://i.imgur.com/Ky2vAb5h.png">




<i>Layout 2</i>

<img src  =  "https://i.imgur.com/ainSZrnh.png">





<i>Layout 3</i>

<img src  =  "https://i.imgur.com/tw8L8trh.png">




Answers

layout 1
```
body{
  display:flex;
  align-items: baseline;
  justify-content: space-between;
}
```




Layout 2

```
body{
  display:flex;
  align-items: baseline;
  justify-content: space-around;
}
```



Layout 3

```
body{
  display:flex;
  align-items: center;
  justify-content: center;
}
```


I hope this article clarified your doubts! :)

 This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/layout/grid-layout/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.
 
 <a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.
