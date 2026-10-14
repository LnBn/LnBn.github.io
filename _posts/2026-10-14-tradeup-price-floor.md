---
layout: post
title: An overnight price floor in the Counter-Strike 2 skin market
date: 2026-10-14 09:00:00
description: A game update turned some skins into lottery tickets on knives, and prices found the implied floor within a day.
tags: markets arbitrage event-study
categories: projects
---

On 22 October 2025, Valve changed Counter-Strike 2's trade-up rules so that five Covert skins can be exchanged for one knife or pair of gloves. That made every eligible Covert worth at least a fifth of the expected value of the knife or glove it could become: if it traded for less, buying five and trading up would pay on average.

It is a rare clean natural experiment in no-arbitrage pricing. Using public prices, I found that:

- today, no eligible skin trades clearly below its floor;
- skins that were below their new floor before the update were lifted onto it by almost exactly the size of the gap;
- the adjustment happened within about a day, and the floor then spread one tier down through the older trade-up rules.

{% include figure.liquid loading="eager" path="assets/img/projects/cs2_event_gap.png" class="img-fluid rounded z-depth-1" %}

The full write-up is on the [project page](/projects/cs2-tradeup-parity/), and the code is on [GitHub](https://github.com/LnBn/cs2-tradeup-parity).
