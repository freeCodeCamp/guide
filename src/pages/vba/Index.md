---
title: vba
---
##What is VBA?

<a>Visual Basic for Applications<a> is the programming language created by Microsoft for use within in their applications; Office, Word, Excel, and Access. It is an event-driven language and can be used to build user-defined-functions(UDFs), access windows API, automation(OLE), and dynamic-link-library's(DLLs). However VBA is not a standalone language and cannot be used outside of a Microsoft application. VBA has many uses, in the office space it is often used to automate tasks and generate reports. Since it is a easy language to grasp it is user-friendly and easy to implement into almost any office.

To learn more about vba and its uses, <a href ='https://msdn.microsoft.com/en-us/library/office/ee814735(v=office.14).aspx' target='_blank' rel='nofollow'>check this out.</a>

##Hello Git!

public sub msg()

Dim msg as String 

msg = "Hello Git!"

MsgBox msg

end sub()
 
In vba there several ways to print a message,but before that we must give out function a name. In this case it's called "Public Sub msg()". Public Sub just means that this function is a public subroutine that can be called from others subs.Going back to the original funciton above we set a varaible called "msg" to the string dim.(Side Note; originally in BASIC dim stood for Dimension. It was used to help define the demensions of an array. However it no longer has that same meaning.) Dim is used to set a variable type; string, integer, variant, ect. The variable "msg" was set to equal the string; "Hello Git!". On line 18 you see that 'MsgBox' is used this is a built in application that will display the string in a pop up display.

