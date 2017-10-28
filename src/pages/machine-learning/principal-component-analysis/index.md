---
title: Principal Component Analysis
---
#### Suggested Reading:
<!-- Please add any articles you think might be helpful to read before writing the article -->

- https://www.reddit.com/r/datascience/comments/668pp1
- https://en.wikipedia.org/wiki/Principal_component_analysis
- http://www.cs.otago.ac.nz/cosc453/student_tutorials/principal_components.pdf
- http://setosa.io/ev/principal-component-analysis/ (Interactive)

Wikipedia Says, "Principal component analysis (PCA) is a statistical procedure that uses an orthogonal transformation to convert a set of observations of possibly correlated variables into a set of values of linearly uncorrelated variables called principal components (or sometimes, principal modes of variation)."

Principal component analysis(PCA) is a statistical technique used to examine the interrelations among a set of variables in order to identify the underlying structure of those variables.

###Intution:
PCA can be thought of as fitting an n-dimensional ellipsoid to the data, where each axis of the ellipsoid represents a principal component. If some axis of the ellipsoid is small, then the variance along that axis is also small, and by omitting that axis and its corresponding principal component from our representation of the dataset, we lose only a commensurately small amount of information.

To find the axes of the ellipsoid, we must first subtract the mean of each variable from the dataset to center the data around the origin. Then, we compute the covariance matrix of the data, and calculate the eigenvalues and corresponding eigenvectors of this covariance matrix. Then we must normalize each of the orthogonal eigenvectors to become unit vectors. Once this is done, each of the mutually orthogonal, unit eigenvectors can be interpreted as an axis of the ellipsoid fitted to the dataThe proportion of the variance that each eigenvector represents can be calculated by dividing the eigenvalue corresponding to that eigenvector by the sum of all eigenvalues.

This procedure is sensitive to the scaling of the data, and there is no consensus as to how to best scale the data to obtain optimal results
