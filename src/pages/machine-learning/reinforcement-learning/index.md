---
title: Reinforcement Learning
---
#### Suggested Reading:
<!-- Please add any articles you think might be helpful to read before writing the article -->

- http://incompleteideas.net/sutton/book/the-book-2nd.html
- https://en.m.wikipedia.org/wiki/Reinforcement_learning

#### Reinforcement Learning
<!-- Please add your working draft below in GitHub-flavored Markdown -->

Reinforcement Learning refers to a field of Machine Learning that applies to agents that you reinforce by giving them reward and punishment. It gives a nice gradual learning and can simplify the learning of agent in tasks where you cannot determine a proper error value.

Example:
A bot is given task to play Space Invaders, it tries to learn to play it by interacting with game and in return getting a reward for the points that it scored at end of game. Greater the reward, greater are its chances of doing the similar gameplay.

In industries robot uses deep reinforcement learning to pick a device from one box and putting it in a container. Whether it succeeds or fails, it memorizes the object and gains knowledge and train’s itself to do this job with great speed and precision. Learning on its own is a kind of reinforcement learning provided the learning is in positive dimension.
Reinforcement learning (RL) is an area of machine learning inspired by behaviourist psychology, concerned with how software agents ought to takeactions in an environment so as to maximize some notion of cumulative reward. The problem, due to its generality, is studied in many other disciplines, such as game theory, control theory, operations research,information theory, simulation-based optimization,multi-agent systems, swarm intelligence, statisticsand genetic algorithms. In the operations research and control literature, the field where reinforcement learning methods are studied is called approximate dynamic programming. The problem has been studied in the theory of optimal control, though most studies are concerned with the existence of optimal solutions and their characterization, and not with the learning or approximation aspects. In economics and game theory, reinforcement learning may be used to explain how equilibrium may arise under bounded rationality.

In machine learning, the environment is typically formulated as a Markov decision process (MDP), as many reinforcement learning algorithms for this context utilize dynamic programming techniques.The main difference between the classical techniques and reinforcement learning algorithms is that the latter do not need knowledge about the MDP and they target large MDPs where exact methods become infeasible.

Reinforcement learning differs from standardsupervised learning in that correct input/output pairs are never presented, nor sub-optimal actions explicitly corrected. Instead the focus is on on-line performance, which involves finding a balance between exploration (of uncharted territory) and exploitation (of current knowledge). The exploration vs. exploitation trade-off in reinforcement learning has been most thoroughly studied through the multi-armed bandit problem and in finite MDPs.

