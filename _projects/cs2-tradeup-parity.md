---
layout: page
title: An overnight price floor
description: How a Counter-Strike 2 update created a no-arbitrage floor in the skin market, and how fast prices found it.
img: assets/img/projects/cs2_event_gap.png
importance: 3
permalink: /projects/cs2-tradeup-parity/
---

Counter-Strike 2 has a "Trade Up Contract": players hand in several weapon skins of one rarity and receive one skin of the next rarity. On 22 October 2025 Valve extended it so that **five Covert (red) skins can be exchanged for one knife or pair of gloves** from the case collection of one of the inputs. Overnight, every eligible Covert skin became a claim on one fifth of a lottery over its case's knife and glove pool. This project tests the price floor that this implies, using public market data.

**Code:** [github.com/LnBn/cs2-tradeup-parity](https://github.com/LnBn/cs2-tradeup-parity)

### The idea

If a Covert sells for less than a fifth of the expected value of the knife or glove it can be traded into, after fees, then buying five and trading up is profitable on average. So its price should not stay below the floor

$$P^* = (1 - \text{fee}) \cdot \mathbb{E}[\text{value of the output}] / 5.$$

I computed this floor for every eligible skin from current market prices and the trade-up rules, and tested it in three ways: in today's prices, around the date of the update, and day by day since.

### What I found

- **Prices respect the floor.** No eligible Covert trades clearly below it, and the cheapest Covert in each case sits close to it. Skins of a lower tier, which cannot be traded into knives directly, sit far below their would-be floor.
- **The update caused it.** Skins priced below their new floor before the update were lifted onto it, by almost exactly the size of the gap: the fitted slope is close to 1. The same test on a window before the update shows nothing.
- **The market adjusted within about a day.** Most below-floor skins reached 90% of their floor on the first trading day after the update. Since then, deviations from the floor die out with a half-life of a few days.
- **The floor spread down a tier** through the older ten-for-one trade-ups, so the cheapest skin of the next tier down also sits at about its implied floor.

{% include figure.liquid loading="eager" path="assets/img/projects/cs2_event_gap.png" title="Lift to the trade-up floor" class="img-fluid rounded z-depth-1" %}

<div class="caption">
Each blue dot is one eligible skin: its price change after the update against the gap between its new floor and its old price. The line is the no-arbitrage prediction: no change for skins already above the floor, and a rise equal to the gap for skins below it. Orange dots are the same skins in a window before the update.
</div>

### Data and limitations

Prices come from Skinport's public API and from Steam Community Market price histories collected by hand (Steam's terms forbid scripts). The repository publishes summaries and figures, not per-item prices. The event samples are small (tens of skins), the floor is computed from current prices and carried back in time, and some trade-up rules come from community guides rather than Valve.
