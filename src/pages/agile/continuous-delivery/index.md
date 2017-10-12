---
title: Continuous Delivery
---
## Continuous Delivery

### What is Continuous Delivery?

Continuous Delivery is a software development discipline where you build software in such a way that the software can be released to production at any time.

### Principles of Continuous Delivery

There are five principles at the heart of continuous delivery:

#### Build Quality Into the Development Process

Creating and evolving feedback loops to detect problems as early as possible is essential and never-ending work in continuous delivery. It’s much cheaper to fix the issues and defects if we find them immediately—ideally before they pushing into version control, by running automated tests locally.

#### Work in Small Batches

In continuous delivery, the approach is to try and get every change in version control as far towards release as we can, getting comprehensive feedback as rapidly as possible.

Working in small batches has many benefits. It reduces the time it takes to get feedback on our work, makes it easier to triage and remediate problems, increases efficiency and motivation, and prevents us from succumbing to the sunk cost fallacy.

#### Computers Perform Repetitive Tasks; People Solve Problems

Continuous Delivery pushes for using computers to perform simple, repetitive tasks, such as regression testing, so that humans can focus on problem-solving. Not only does this free up people from mindless drudge-work to focus on higher value activities, but also has the benefit of improving quality, since humans are at their most error-prone when performing mindless tasks.

#### Relentlessly Pursue Continuous Improvement

Continuous Delivery views perfection to be a fleeting goal, and places **work done** as a higher goal than ideals and completeness. It depends on repeated and steady improvement to ensure the system's continued growth.

#### Everyone is Responsible

In a Continuous Deployment-compliant organization, nothing is “somebody else’s problem.” Developers are responsible for the quality and stability of the software they build. Operations teams are responsible for helping developers produce quality output. Everyone works together to achieve the organizational level goals, rather than optimizing for what’s best for their team or department.

### Benefits of Continuous Delivery

* **Reduced Deployment Risk**: since you are deploying smaller changes, there's less to go wrong, and it's easier to fix should a problem appear.
* **Believable Progress**: many folks track progress by tracking work done. If "done" means "developers declare it to be done" that's much less believable than if it is deployed into a production (or production-like) environment.
* **User Feedback**: the most significant risk to any software effort is that you end up building something that isn't useful. The earlier and more frequently you get working software in front of real users, the quicker you get feedback to find out how valuable it is.

### Implementing Continuous Delivery

Becoming Continous Delivery compliant requires a series of steps and improvements to be taken by a company, some of which are outlined below.

#### Configuration Management

Automation plays a vital role in ensuring we can release software repeatably and reliably. One key goal is to take repetitive manual processes like build, deployment, regression testing, and infrastructure provisioning, and automate them. To achieve this, we need to version control everything required to perform these processes, including source code, test and deployment scripts, infrastructure and application configuration information, and the many dependent libraries and packages.

We have two overriding goals for Automation:

* **Reproducibility**: We should be able to provision any environment in a fully automated fashion, and know that any new environment reproduced from the same configuration is identical.
* **Traceability**: We should be able to pick any environment and be able to determine quickly, and precisely the versions of every dependency used to create that environment. We also want to to be able to compare previous versions of an environment and see what has changed between them.

These capabilities give us several significant benefits like Disaster recovery, Auditability, Higher quality, Capacity management and Response time to defects.

#### Continuous Integration

Read more about [Continuous Integration](https://guide.freecodecamp.org/agile/continuous-integration)

#### Continuous Testing

To build quality into software, we need to adopt a different approach. Our goal is to run many kinds of tests—both manual and automated—continually throughout the delivery process.

Once we have continuous integration and test automation in place, we create a deployment pipeline (the critical pattern in continuous delivery). In the deployment pipeline pattern, every change runs a build that a) creates packages that can be deployed to any environment and b) runs unit tests (and possibly other tasks such as static analysis), giving feedback to developers in the space of a few minutes. Packages that pass this set of tests have more comprehensive automated acceptance tests run against them. Once we have packages that pass all the automated tests, they are available for self-service deployment to other environments for activities such as exploratory testing, usability testing, and ultimately release. 

#### Architecture

In the context of enterprise architecture, there are typically multiple attributes we are concerned about, for example, availability, security, performance, usability and so forth. In continuous delivery, we introduce two new architectural characteristics: testability and deployability.

In a testable architecture, we design our software such that most defects can (in principle, at least) be discovered by developers by running automated tests on their workstations. We shouldn’t need to depend on complex, integrated environments to do the majority of our acceptance and regression testing.

In a deployable architecture, deployments of a particular product or service can be performed independently and in a fully automated fashion, without the need for significant levels of orchestration. Deployable systems can typically be upgraded or reconfigured with zero or minimal downtime.

Designing for testability and deployability starts with ensuring our products and services are composed of loosely-coupled, well-encapsulated components or modules.

#### Deployment Pipeline

A deployment pipeline is a way of breaking up your build process into stages. Each stage provides increasing confidence, usually at the cost of extra time. Early stages can find most problems yielding faster feedback, while later stages provide slower and more through probing. 

Usually, the first stage of a deployment pipeline will do any compilation and provide binaries for later stages. Later stages may include manual checks, such as any tests that can't be automated. Stages can be automatic or require human authorization to proceed; they may be parallelized over many machines to speed up the build. Deploying into production is usually the final stage in a pipeline.

More broadly the deployment pipeline's job is to detect any changes that will lead to problems in production. These can include performance, security, or usability issues. A deployment pipeline should enable collaboration between the various groups involved in delivering software and provide everyone visibility about the flow of changes in the system, together with a thorough audit trail.

#### Culture

A successful implementation of Continuous Delivery requires effective collaboration between development teams and IT operations teams. Processes that involve both groups in tandem will help improve quality on a regular basis.

#### More Information:
* https://continuousdelivery.com/
* https://martinfowler.com/bliki/ContinuousDelivery.html
* https://en.wikipedia.org/wiki/Continuous_delivery


