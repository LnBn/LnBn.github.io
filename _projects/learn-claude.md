---
layout: page
title: learn-claude
description: A tutor that runs inside Claude Code. It teaches one idea at a time, quizzes you on each, and writes the lessons into Obsidian notes.
img: assets/img/projects/learn_claude.png
importance: 4
permalink: /projects/learn-claude/
---

I wanted to work through textbooks with a teacher that checks I have understood each step before it moves on, and that leaves behind notes I would actually reread. learn-claude is that teacher. It runs inside [Claude Code](https://code.claude.com) on a normal Claude subscription, and writes every lesson into a note in Obsidian.

It began as a port of [Eero Alvar's learn system](https://github.com/amosblomqvist/learn) to Claude Code. The teaching method comes from there. I built the quiz popup, the notes, the textbook courses, the exams and the practice modes on top.

**Code:** [github.com/LnBn/learn-claude](https://github.com/LnBn/learn-claude)

{% include figure.liquid loading="eager" path="assets/img/projects/learn_claude.png" title="How a lesson runs" class="img-fluid rounded z-depth-1" %}

<div class="caption">
A lesson starts by probing what you already know and agreeing a plan. Then each idea is read, checked with an easy quiz and applied in a harder one. A missed apply question is re-taught before anything is built on it.
</div>

### A lesson

You ask to learn something. The teacher asks a few quick questions to find where your knowledge runs out, then proposes a map from what you know to what you want. Each idea on the map becomes a short written section in the note, followed by two quizzes in a popup over the terminal. The first checks that you read carefully. The second asks you to use the idea on a problem you haven't seen.

For example, while I was working through a book of quant interview puzzles, a section on the bridge-and-torch puzzle (four people, one torch, a bridge that holds two) ended with an apply question that changed their crossing times to 6, 5, 4 and 1 minutes. I answered 13; the answer was 17, because I had forgotten that the last two people still have to cross. The teacher showed me what my plan had left out, gave me a new version with five people, and moved on only after I got that one right.

### What else it does

- **Courses from a textbook.** Give it a PDF and pick the chapters. Lessons follow the book's sections, equation numbers and figures, and it helps with the book's exercises one step at a time, showing a full solution only when you allow it.
- **Exams.** A written paper on a chapter, answered in Obsidian and handed back marked, with feedback under each answer.
- **Mock interviews.** A timed round of new problems, with an interviewer who stays quiet while you make progress and nudges you when you are stuck.
- **Practice.** Every missed question comes back as a new question on the same idea, at gaps that grow from days to weeks. Drills mix problems without saying which technique each needs. It also has a mental arithmetic sprint and LeetCode-style coding problems with hidden tests.

### How it is built

The teacher is the Claude Code session itself, guided by skills (prompts it loads on demand) that hold the teaching method and the procedures for courses, exams, interviews and practice. Quizzes go through a small MCP server, a tool plugin that opens a popup in the terminal and marks your answer. Subagents check facts on the web, and draw diagrams and look at them before you see them. The parts that have to be exact, such as marking answers and exams and scheduling reviews, are Python scripts with unit tests.

Two parts are more interesting than they look. Typed answers like `2(2^n - 1)` are marked by evaluating your formula and the correct one at several points, so any equivalent form counts. And the notes are written by hooks that read Claude Code's own session transcript as the lesson happens. That keeps the teacher free to just teach, but the transcript format is internal, so this is the part most likely to break with a new release.
