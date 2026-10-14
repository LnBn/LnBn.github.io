---
layout: post
title: How heavy are the tails of financial returns?
date: 2026-10-14 09:30:00
description: Testing power-law, lognormal and exponential tails for 22 assets, without estimating a single parameter.
tags: statistics risk heavy-tails
categories: projects
---

How likely is a daily loss bigger than any seen so far? The answer depends on the shape of the tail of the return distribution, and the usual tests of that shape are unreliable for the small samples that tails provide.

Constrained surrogates, a recent method from Moore and Altmann, test a whole family of tail shapes without estimating any parameter. The idea is like shuffling: rearrange the tail values while keeping fixed the one summary the fit depends on, and compare the data with the results. I implemented the method, checked it on simulated data, and applied it to 22 assets across six asset classes. In short:

- thin, exponential-like tails are rejected for most assets' losses, but rarely for their gains;
- a single power law describes only the most extreme few percent of days;
- losses tend to be heavier-tailed than gains;
- the method sharpens how tail models are checked, but it does not improve one-day value-at-risk forecasts.

{% include figure.liquid loading="eager" path="assets/img/projects/tails_example.png" class="img-fluid rounded z-depth-1" %}

More on the [project page](/projects/tail-risk-surrogates/); code on [GitHub](https://github.com/LnBn/tail-risk-surrogates).
