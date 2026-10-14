---
layout: page
title: Beyond sectors
description: What groups do US stocks form once the market is removed? Bayesian stochastic block models of 250 S&P 500 stocks, 2010–2026.
img: assets/img/projects/sbm_heatmaps.jpg
importance: 1
permalink: /projects/sbm-equity-networks/
---

Investors usually group stocks by industry labels such as GICS sectors. This project asks what groups the data themselves suggest, how those groups changed in the 2020 COVID crash and the 2022 rise in interest rates, and whether they help build lower-risk portfolios.

**Code:** [github.com/LnBn/sbm-equity-networks](https://github.com/LnBn/sbm-equity-networks)

### The idea

I take daily returns of 250 large US stocks from 2010 to 2026, remove the movement of the market as a whole, and measure how closely each pair of stocks moves together. That gives a network: every pair of stocks is linked, and the strength of the link is their correlation.

I then fit a **stochastic block model** (SBM) to this network. An SBM is a statistical model of how the network could have arisen: each stock belongs to a group, and how closely two stocks move together depends only on their groups. Unlike most clustering methods, it does not assume that groups are tight communities, so it can also find a group that is defined by how it relates to the rest of the market. Because it is fitted in a Bayesian way, it weighs how well a grouping fits against how complex it is. It therefore does not report groups that the data cannot support, and it chooses the number of groups itself. The tools come from my research on ecological food webs.

{% include figure.liquid loading="eager" path="assets/img/projects/sbm_heatmaps.jpg" title="Correlations in 2019, 2020 and 2022" class="img-fluid rounded z-depth-1" %}

<div class="caption">
Correlations between all 250 stocks after removing the market, in 2019, 2020 and 2022. Each row and column is one stock, ordered by the model's groups, so each group is a square on the diagonal. Red means two stocks moved together, blue that they moved oppositely. The strips give each stock's sector: long single-colour stretches are groups drawn from one sector. In 2019 the groups follow industries; in 2020 sectors mix; in 2022 the single-sector stretches return.
</div>

### What I found

- **The groups refine sectors.** The model finds a few dozen groups, much closer to industry sub-groups than to the eleven sectors: regional banks, utilities, oil producers, defence contractors and so on. Some groups join industries that share an exposure, such as interest-rate-sensitive utilities and real-estate trusts.
- **Almost all groups are communities.** For almost every pair of groups, each group is tighter internally than with the other. The exceptions are among utilities, banks and real estate.
- **COVID mixed sectors; the 2022 rate rise did not.** In 2020 stocks regrouped by their exposure to the pandemic: travel and reopening stocks from five sectors formed one group, and stay-at-home stocks another. The share of a stock's group-mates from other sectors rose from 39% in 2019 to 63% in 2020. In 2022 it was 47%, close to normal: that shock acted within sectors, and energy became one tight group. The old structure has only partly returned.
- **The groups help portfolios a little.** Minimum-variance portfolios built with a covariance estimate shrunk towards the groups had about 4% lower volatility out of sample than with standard constant-correlation shrinkage, and about 2% lower than shrinking towards sectors. A modest gain, not a reliable edge.

{% include figure.liquid loading="lazy" path="assets/img/projects/sbm_mixing.png" title="How sectors mix, year by year" class="img-fluid rounded z-depth-1" %}

<div class="caption">
How sectors mix in each calendar year. Each dot is one fit of the model. The right panel shows the share of a stock's group-mates that come from other sectors: it jumps in 2020 and is back near its 2019 level in 2022.
</div>

### Checking the results

The model has many good solutions of almost equal quality, so I fitted each year 30 times from independent starts. The fits give very similar groupings, and every result above holds for all of them. Refitting every quarter from 2011 shows the same break as soon as the 2020 crash enters the data.

### Limitations

The stock list is today's S&P 500, so firms that left the index are missing (survivorship bias). The portfolio test's quarterly design was chosen after a monthly version showed no gain, and there are many comparisons. Weakly correlated stocks tend to be grouped together because their correlations look alike, not because they move together.
