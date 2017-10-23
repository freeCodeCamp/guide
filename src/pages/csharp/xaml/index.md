---
title: XAML
---
## XAML
	
**Extensible Application Markup Language (XAML)** Is a XML based Language you can use with many Microsoft tecnologies. A tipical use is describing visual user interfaces on **Windows Presentation Foundation (WPF)** applications.

```XML

<Window xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
</Window>
```

In this example , you can see an empty window, with two namespaces. There can be more, but this two are needed. 
	- http://schemas.microsoft.com/winfx/2006/xaml/presentation is a mapping to all wpf controls included in System.Windows.Controls
	- http://schemas.microsoft.com/winfx/2006/xaml Defines al the XAML keywords in System.Windows.Markup




for more info on XAML : https://docs.microsoft.com/en-us/dotnet/framework/wpf/advanced/xaml-overview-wpf
