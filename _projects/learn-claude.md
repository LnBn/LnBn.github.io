---
layout: page
title: learn-claude
description: A tutor that runs inside Claude Code. It teaches one idea at a time, quizzes you on each, and writes the lessons into Obsidian notes.
img: assets/img/projects/learn_claude.png
importance: 4
permalink: /projects/learn-claude/
---

learn-claude is a tutor for working through a topic or a textbook. It teaches one idea at a time, checks that you have understood each one before it moves on, and leaves behind notes that read like a textbook chapter. It runs inside [Claude Code](https://code.claude.com) on a normal Claude subscription, and writes every lesson into a note in Obsidian.

It began as a port of [Eero Alvar's learn system](https://github.com/amosblomqvist/learn) to Claude Code. The core of it is Eero's: the teaching method, the graded quiz popup, the lesson written into a markdown note, and the subagents that check facts and draw diagrams. This version reworks those pieces for Claude Code and adds textbook courses, typed answers, exams, mock interviews, technique notes and the practice modes.

**Code:** [github.com/LnBn/learn-claude](https://github.com/LnBn/learn-claude)

{% include figure.liquid loading="eager" path="assets/img/projects/learn_claude.png" title="How a lesson runs" class="img-fluid rounded z-depth-1" %}

<div class="caption">
A lesson starts by probing what you already know and agreeing a plan. Then each idea is read, checked with an easy quiz and applied in a harder one. A missed apply question is re-taught before anything is built on it.
</div>

### A lesson

You ask to learn something. The teacher asks a few quick questions to find where your knowledge runs out, then proposes a map from what you know to what you want. Each idea on the map becomes a short written section in the note, followed by two quizzes in a popup over the terminal. The first checks that you read carefully. The second, the apply question, changes one thing about the worked example, so that the recipe from the section no longer works on its own and only knowing *why* it works gets you the answer.

For example, one section of a course on a book of quant interview puzzles teaches a classic: four people must cross a bridge at night, two at a time, with one torch that must be carried on every crossing, and a pair walks at the slower person's pace. With crossing times of 10, 5, 2 and 1 minutes, the obvious plan, where the fastest person walks each of the others over and brings the torch back, takes 19 minutes. The section shows that sending the two fastest over first, then the two slowest together, takes 17, and ends with the key idea: pay for the two slowest once.

The apply question changes the times to 6, 5, 4 and 1. Now the key idea gives 19, and the obvious plan wins with 17. Pairing the two slowest saves one walk by the 5-minute person and one return by the 1-minute person (6 minutes), but makes the second-fastest person cross two extra times: 4 minutes with the old times, 8 with the new. If you memorised "pair the two slowest", you answer 19. If you know why it worked, you weigh the saving against the cost and answer 17. Answer 19, and the teacher re-teaches when pairing pays before it builds anything on the idea.

### What else it does

- **Courses from a textbook.** Give it a PDF and pick the chapters. Lessons follow the book's sections, equation numbers and figures, and it helps with the book's exercises one step at a time, showing a full solution only when you allow it.
- **Exams.** A written paper on a chapter, answered in Obsidian and handed back marked, with feedback under each answer.
- **Mock interviews.** A timed round of new problems, with an interviewer who stays quiet while you make progress and nudges you when you are stuck.
- **Practice.** Every missed question comes back as a new question on the same idea, at gaps that grow from days to weeks. Drills mix problems without saying which technique each needs. It also has a mental arithmetic sprint and LeetCode-style coding problems with hidden tests.

### How it is built

The teacher is the Claude Code session itself, guided by skills (prompts it loads on demand) that hold the teaching method and the procedures for courses, exams, interviews and practice. Quizzes go through a small MCP server, a tool plugin that opens a popup in the terminal and marks your answer. One subagent checks facts on the web; another draws diagrams and checks each picture before you see it. The parts that have to be exact, such as marking answers and exams and scheduling reviews, are Python scripts with unit tests.

Two parts are more interesting than they look. Typed answers like `2(2^n - 1)` are marked by evaluating your formula and the correct one at several points, so any equivalent form counts. And the note mirror, Eero's idea rebuilt here on Claude Code hooks, reads Claude Code's own session transcript as the lesson happens. That keeps the teacher free to just teach, but the transcript format is internal, so this is the part most likely to break with a new release.
