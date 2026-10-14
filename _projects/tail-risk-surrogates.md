---
layout: page
title: How heavy are the tails?
description: Parameter-free tests of power-law, lognormal and exponential tails for the daily returns of 22 assets, using constrained surrogates.
img: assets/img/projects/tails_example.png
importance: 2
permalink: /projects/tail-risk-surrogates/
---

Large daily losses happen far more often than a normal distribution predicts. For risk management it matters *which* heavy-tailed shape describes them, because the shape decides how likely a loss larger than any seen so far is. This project tests three candidate shapes on 22 assets across six asset classes, using a recent method that needs no parameter estimates.

**Code:** [github.com/LnBn/tail-risk-surrogates](https://github.com/LnBn/tail-risk-surrogates)

### The idea

The usual way to test a tail shape is to fit it, then compare the data with samples drawn from the fitted distribution. Tails are small samples, a few hundred days at most, and testing against one fitted distribution rather than the whole family of shapes makes these tests unreliable.

**Constrained surrogates**, introduced by Moore and Altmann, avoid this. The idea is like shuffling. A shuffled time series is just as likely as the original under any model of independent draws, so comparing data with shuffles tests independence without assuming a model. In the same way, the fit of a tail shape depends on the data only through a simple summary; for a power law, that is the sum of the logarithms of the tail values. Rearranging the values while keeping that summary fixed gives new samples that are just as likely as the data under *every* member of the family. Comparing the data with them tests the whole family at once. I implemented the method in Python and checked it on simulated data, where it rejects the true shape about 5% of the time at the 5% level, as a test should.

{% include figure.liquid loading="eager" path="assets/img/projects/tails_example.png" title="Three tail shapes fitted to real losses" class="img-fluid rounded z-depth-1" %}
<div class="caption">
The three shapes fitted to the losses of three assets, after removing volatility clustering, on logarithmic axes. Over the observed range the power law (blue) and lognormal (orange) nearly coincide; the exponential (green) falls off faster.
</div>

### What I found

Before testing, I removed volatility clustering with a GARCH model, so the tests apply to standardised daily shocks.

- **Thin tails are rejected, mostly for losses.** The exponential is rejected for 13 of 22 loss tails but only 5 of 22 gain tails.
- **A single power law fits only the far tail.** It survives at the usual data-chosen threshold, but it is rejected for every asset once the tail covers the top 10% of days. The lognormal, tested on the same tails, mostly survives.
- **Losses tend to be heavier-tailed than gains**, for 19 of 22 assets. This holds across assets, not firmly for any single one.
- **No better risk forecasts.** In a rolling test of one-day value-at-risk on the S&P 500 and Bitcoin, the surrogate forecasts match the usual forecasts from the same shape. The method's value is in checking tail models, not in forecasting.

{% include figure.liquid loading="lazy" path="assets/img/projects/tails_thresholds.png" title="Rejections by where the tail starts" class="img-fluid rounded z-depth-1" %}
<div class="caption">
Share of tails for which each shape is rejected, by where the tail starts (orange: losses; blue: gains). The power law survives at the data-chosen threshold but is rejected for every asset once the tail reaches the top 10% of days.
</div>

### Limitations

The threshold where the tail starts is chosen from the data, which makes the tests cautious: a rejection is strong evidence, a non-rejection weak. Tails of a few hundred values cannot separate a power law from a lognormal. The tests assume independent shocks after the GARCH filter, and a few tails still show some clustering.
