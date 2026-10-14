---
layout: page
title: A rule change that crashed a market
description: How one Counter-Strike 2 update halved the price of knives and gloves, and set a no-arbitrage floor under the skins that can be traded for them.
img: assets/img/projects/cs2_crash.png
importance: 3
permalink: /projects/cs2-tradeup-parity/
---

On 22 October 2025, Valve changed one rule in Counter-Strike 2: five Covert (red) weapon skins can now be exchanged for one knife or pair of gloves from the same case. Knives and gloves are the game's most expensive items, and until then they could only be found by opening cases. Within three days their prices on the Steam marketplace had fallen by almost half, and they have not recovered. This project studies that crash and one of its consequences, using public price data.

**Code:** [github.com/LnBn/cs2-tradeup-parity](https://github.com/LnBn/cs2-tradeup-parity)

{% include figure.liquid loading="eager" path="assets/img/projects/cs2_crash.png" title="The knife and glove crash" class="img-fluid rounded z-depth-1" %}

<div class="caption">
Median price change of each group of items relative to September–October 2025, from Steam price histories collected by hand. Knives and gloves lost almost half their value within days of the update (dashed line). Coverts that can be traded in rose; the few that cannot fell at first.
</div>

### What I found

- **The crash was large and lasting.** The median knife lost 46% of its value and the median pair of gloves 47% within three days. Almost a year later, both are still more than 40% below their earlier level. The most likely reason is that the rule opened a new supply route into knives and gloves, although the data contain prices, not item counts, so this is not tested directly.
- **The skins that could be traded in rose, very unevenly.** The median eligible Covert was up 29% three months later, and the cheapest rose most: one rose to more than 17 times its old price on the first day.
- **A no-arbitrage floor explains which skins rose.** The rule turned each eligible Covert into a claim on one fifth of a lottery over its case's knives and gloves. If five Coverts cost less than what they can become is worth on average, buying five and trading them in pays, so prices should not stay below that floor. Skins priced below their new floor were lifted onto it within about a day, by almost exactly the size of the gap.
- **The floor has held since.** Today no eligible Covert trades clearly below its floor, while skins that cannot use the rule show no such floor.

{% include figure.liquid loading="lazy" path="assets/img/projects/cs2_event_gap.png" title="Lift to the floor" class="img-fluid rounded z-depth-1" %}

<div class="caption">
Each blue dot is one eligible skin: its price change after the update against the gap between its new floor and its old price. The line is the no-arbitrage prediction: no change for skins already above the floor, and a rise equal to the gap for skins below it. Orange dots are the same skins in a window before the update.
</div>

### Data and limitations

Prices come from Skinport's public API and from Steam Community Market price histories collected by hand (Steam's terms forbid scripts). The repository publishes summaries and figures, not per-item prices. The crash is measured on one marketplace with a few dozen knives and gloves, and knife prices were already drifting down before the update. The event samples are small, the floor is computed from current prices and carried back in time, and some trade-up rules come from community guides rather than Valve.
