---
title: Chef
---
## Chef

Chef is a [configuration management](https://en.wikipedia.org/wiki/Configuration_management) tool written in Ruby and Erlang. It also happens to be the name of the organisation which has built this tool. It uses pure Ruby, which is a domain specific language for writing system configuration "recipes". Chef streamlines the task of configuring and maintaining servers, and can integrate with cloud-based platforms to automatically provision and configure new machines. 

You can find more about the company here: [Chef](https://www.chef.io/)

### History

Chef was created by Adam Jacob. It was built as a tool for his consulting company, which built end-to-end server/deployment tools. Jacob showed Chef to [Jesse Robbins](https://en.wikipedia.org/wiki/Jesse_Robbins), who saw its potential. They founded a company with Barry Steinglass, Nathen Haneysmith, and Joshua Timberman to turn Chef into a product.

The "recipe" format that the modules were prepared in led to the project being renamed "Chef". Although the project was originally named "marionette", but the word was too long and cumbersome to type.

### Features

User writes "recipes" that describe how Chef has to manage server applications and utilities (such as [Apache HTTP Server](https://en.wikipedia.org/wiki/Apache_HTTP_Server), [MySQL](https://en.wikipedia.org/wiki/MySQL), or [Hadoop](https://en.wikipedia.org/wiki/Hadoop)) and how they are to be configured. The recipes describe a series of resources that should be in a particular state: packages to be installed, services that should be running, and files that should be written. These various resources can be configured to specific versions of software to run and ensure that the software is installed in the correct order based on dependencies. Chef makes sure each resource is properly configured and corrects any resource that is not in the required state.

Traditionally, Chef was used to manage Linux but later versions support Microsoft Windows as well.

It is one of the major configuration management systems on Linux, along with [CFEngine](https://en.wikipedia.org/wiki/CFEngine), [Ansible](https://en.wikipedia.org/wiki/Ansible_(software)) and [Puppet](https://en.wikipedia.org/wiki/Puppet_(software)). Chef, along with Puppet and Ansible, is one of the industry's most notable Infrastructure as Code (IAC) tools.

