---
title: XAML
---
## XAML

Extensible Application Markup Language (XAML) is a declarative XML-based language developed by Microsoft that is used for initializing structured values and objects. The acronym is pronounced "zammel". XAML is used to create GUIs. A window or page will consist of a XAML document and a CodeBehind file, which together creates the Window/Page. The XAML file describes the interface with all its elements, while the CodeBehind handles all the events and has access to manipulate with the XAML controls.

```xaml
<Window x:Class="FreeCodeCampStub.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:WpfApplication1"
        mc:Ignorable="d"
        Title="MainWindow" Height="350" Width="525">
    <Grid>
        <Label Name="lblHello" Content="Hello!"  Width="40" Height="25" ></Label>
        <Button Name="btnWorld" Click="btnWorld_Click" Content="World" Height="25" Width="75" Margin="221,172,221,122"></Button>
    </Grid>
</Window>
