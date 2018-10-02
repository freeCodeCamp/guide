---
title: Chef
---
## Chef
Chef is a powerful automation platform that transforms infrastructure into code. Whether you’re operating in the cloud, on-premises, or in a hybrid environment, Chef automates how infrastructure is configured, deployed, and managed across your network, no matter its size.
The Chef DK workstation is the location where users interact with Chef. On the workstation users author and test cookbooks using tools such as Test Kitchen and interact with the Chef server using the knife and chef command line tools.
Chef client nodes are the machines that are managed by Chef. The Chef client is installed on each node and is used to configure the node to its desired state.
The Chef server acts as a hub for configuration data. The Chef server stores cookbooks, the policies that are applied to nodes, and metadata that describes each registered node that is being managed by Chef. Nodes use the Chef client to ask the Chef server for configuration details, such as recipes, templates, and file distributions.
Chef continuously configures systems against
your desired state
As our environments grow in size and complexity, manual processes can become a barrier to deploying changes with confidence and consistency. Systems are missed during software updates or scheduled maintenance leading to unpredictable configuration drift across your estate. Unexpected and difficult to diagnose failures are uncovered late in the development cycle due to inconsistently configured environments between development and production. All this results in delayed releases, costly rollbacks, and too much time spent on unplanned work.

Chef automates the process of managing configurations, ensuring that every system you’re responsible for is configured correctly and consistently. Because Chef applies updates dynamically, you can make conditional changes based on their running environment or hardware, ensuring that the same code that configures development can be used all the way through to production. Chef’s built-in “test & repair” behavior means that systems can update their configurations continuously, and Chef will only take action when machines diverge from their desired state. Chef makes your infrastructure configurations testable, portable, and auditable, giving your teams the freedom to focus on building new innovations, rather than re-solving old problems.
