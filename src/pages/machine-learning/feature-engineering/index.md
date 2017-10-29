---
title: Feature Engineering
---
## Feature Engineering

Feature engineering, the process creating new input features for machine learning, is one of the most effective ways to improve predictive models.

>Coming up with features is difficult, time-consuming, requires expert knowledge. “Applied machine learning” is basically feature engineering. ~ Andrew Ng

In a nutshell, we define feature engineering as creating new features from your existing ones to improve model performance.

### Indicator Variables
The first type of feature engineering involves using indicator variables to isolate key information.

Now, some of you may be wondering, "shouldn't a good algorithm learn the key information on its own?"

Well, not always. It depends on the amount of data you have and the strength of competing signals. You can help your algorithm "focus" on what's important by highlighting it beforehand.

* Indicator variable from thresholds: Let's say you're studying alcohol preferences by U.S. consumers and your dataset has an age feature. You can create an indicator variable for age >= 21 to distinguish subjects who were over the legal drinking age.
* Indicator variable from multiple features: You're predicting real-estate prices and you have the features n_bedrooms and n_bathrooms. If houses with 2 beds and 2 baths command a premium as rental properties, you can create an indicator variable to flag them.
* Indicator variable for special events: You're modeling weekly sales for an e-commerce site. You can create two indicator variables for the weeks of Black Friday and Christmas.
* Indicator variable for groups of classes: You're analyzing website conversions and your dataset has the categorical feature traffic_source. You could create an indicator variable for paid_traffic by flagging observations with traffic source values of  "Facebook Ads" or "Google Adwords".

## Interaction Features
The next type of feature engineering involves highlighting interactions between two or more features.

Have you ever heard the phrase, "the sum is greater than the parts?" Well, some features can be combined to provide more information than they would as individuals.

Specifically, look for opportunities to take the sum, difference, product, or quotient of multiple features.

*Note: We don't recommend using an automated loop to create interactions for all your features. This leads to "feature explosion."

* Sum of two features: Let's say you wish to predict revenue based on preliminary sales data. You have the features sales_blue_pens and sales_black_pens. You could sum those features if you only care about overall sales_pens.
* Difference between two features: You have the features house_built_date and house_purchase_date. You can take their difference to create the feature house_age_at_purchase.
* Product of two features: You're running a pricing test, and you have the feature price and an indicator variable conversion. You can take their product to create the feature earnings.
* Quotient of two features: You have a dataset of marketing campaigns with the features n_clicks and n_impressions. You can divide clicks by impressions to create  click_through_rate, allowing you to compare across campaigns of different volume.
