---
title: Amazon Web Services
---
## Amazon Web Services

Amazon Web Services (AWS) is a subsidiary of Amazon.com that provides on-demand cloud computing platforms to individuals, companies and governments, on a paid subscription basis with a free-tier option available for 12 months. The technology allows subscribers to have at their disposal a full-fledged virtual cluster of computers, available all the time, through the internet. AWS's version of virtual computers have most of the attributes of a real computer including hardware (CPU(s) & GPU(s) for processing, local/RAM memory, hard-disk/SSD storage); a choice of operating systems; networking; and pre-loaded application software such as web servers, databases, CRM, etc. Each AWS system also virtualizes its console I/O (keyboard, display, and mouse), allowing AWS subscribers to connect to their AWS system using a modern browser. The browser acts as a window into the virtual computer, letting subscribers log-in, configure and use their virtual systems just as they would a real physical computer. They can choose to deploy their AWS systems to provide internet-based services for their own and their customers' benefit.  

Some famous web services include
* EC2 (Elastic Compute Cloud)
* S3 (Simple Storage Service)
* SQS (Simple Queue Service)
* DynamoDB (Amazon Dynamo Data Base)
* Cloudwatch (Metrics and Alarms)
* Codedeploy (Deployments)  
etc..

<!-- Sarthak's changes-->
## How AWS stack is used to build services
Say for example, you want to build a blog in a python framework like django, then you will use an AWS EC2 instance
to deploy your code. You will configure your DNS to point to your EC2 instance.
Now every time someone types in exampleBlog.com then the request will come to your EC2 instance.
You will have a webserver like Apache or Nginx installed on your server. Webservers help in service files
to the client. They interact with your python webapp and server the requested content.
Now your django project will recieve the request. It will query the DB for a particular blog and return
it as an HTML. For the database part, AWS provides us with an RDS (relational database system) instance.
We can use MySQL and query it for data.
Now you can also have loads of images and imagine if multiple users visit your blog from around the world.
If your server instance lies in Frankfurt (Germany) then users who live far off like in South-East Asia 
would experience latency in the images loading. So what you would want to use is a storage service like AWS S3.
S3 (Simple storage service) would make an exact copy of your image available in a nearer server to the visitors locality
if its not present. i.e. The first request will be served from Germany for a visitor from Thailand but the subsequent request
would be served from Singapore for example. So the user wont experience latency.
Now if your blog gets huge number of visitors then you might want 2 or more EC2 instances to handle the load.
So what you can do is use a loadbalancer to distribute the load equally to the servers.
AWS is really easy to setup and you can learn a lot more from their amazing guides and documentation.


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* <a href='https://aws.amazon.com/' target='_blank' rel='nofollow'>AWS</a>
