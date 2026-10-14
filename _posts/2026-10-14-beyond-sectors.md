---
layout: post
title: "Beyond sectors: what groups do US stocks really form?"
date: 2026-10-14 10:00:00
description: A Bayesian stochastic block model finds groups of stocks that refine industry sectors, and shows how COVID briefly broke them apart.
tags: networks bayesian equities
categories: projects
---

Stocks are usually grouped by industry. But which stocks actually move together, once the market as a whole is taken out? I fitted a Bayesian stochastic block model, a statistical model of group structure that I also use for ecological food webs, to the co-movement network of 250 large US stocks from 2010 to 2026.

The model finds a few dozen groups that refine sectors to roughly the sub-industry level. The interesting part is how they change:

- in the 2020 COVID crash, stocks regrouped across sectors by their exposure to lockdowns and reopening, and the share of a stock's group-mates from other sectors jumped from 39% to 63%;
- the 2022 rise in interest rates left sectors intact;
- used to build low-risk portfolios, the groups give a small improvement over standard methods.

{% include figure.liquid loading="eager" path="assets/img/projects/sbm_heatmaps.jpg" class="img-fluid rounded z-depth-1" %}

More on the [project page](/projects/sbm-equity-networks/); code on [GitHub](https://github.com/LnBn/sbm-equity-networks).
