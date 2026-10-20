---
layout: page
title: learn-claude
description: A personal AI tutor that runs inside Claude Code, with lessons, graded quizzes, textbook courses and exams written into Obsidian notes.
img: assets/img/projects/learn_claude.png
importance: 4
permalink: /projects/learn-claude/
---

A personal tutor that runs inside [Claude Code](https://code.claude.com) on a Claude subscription. It is a port of [Amos Blomqvist's learn system](https://github.com/amosblomqvist/learn) from the pi harness to Claude Code: the teaching method is his, and the plumbing is new.

**Code:** [github.com/LnBn/learn-claude](https://github.com/LnBn/learn-claude)

### What it does

- **Teaches with a fixed method.** It finds out what you already know, agrees a plan with you, then teaches one idea at a time: a text to read, an easy quiz, then a harder one. A missed question is re-taught before anything is built on it.
- **Graded quizzes in a popup.** Each answer is marked as soon as it is given, with an explanation.
- **Lesson notes in Obsidian.** Every lesson is written into a markdown note with rendered maths, diagrams and quiz results, so it reads like a textbook chapter rather than a chat log.
- **Courses that follow a textbook.** Give it a PDF and choose the chapters. Lessons follow the book's own sections, notation and figures, and it gives step-by-step hints on the book's exercises.
- **Exams.** A written paper on a chapter, sat in Obsidian and handed back graded, with feedback beside every answer.
- **Lessons that span days.** Pause with a checkpoint and pick up again in a later session, with a short recall check.

### How it is built

The repository is a `.claude` folder. The teacher is the Claude Code session itself, steered by skills for teaching, courses, exercises and exams. Subagents check facts on the web and draw and inspect diagrams before they reach the learner. Quizzes run through a small MCP server with a terminal popup, and hooks mirror each session into the lesson note and keep checkpoints, course progress and exam marks. Python scripts handle textbook mapping, figure extraction and exam grading, with unit tests.
