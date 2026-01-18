---
layout: ../../layouts/post.astro
title: TraceGuard
description: TraceGuard is an agentic vulnerability triage and ownership automation tool for GitHub repositories.
dateFormatted: Jan 18th, 2026
---

TraceGuard is an **agentic vulnerability triage and ownership automation** tool for GitHub repositories. It closes the gap between security findings and developer action by ingesting **Dependabot alerts**, translating them into **developer-friendly guidance using AI**, resolving **who owns the fix**, and creating **actionable Jira tickets** - all with full transparency and auditability.

A core capability of TraceGuard is **ownership resolution and assignment**. For each alert, it determines the correct owner using GitHub metadata and automatically assigns the Jira ticket to that owner. Every ticket contains **relevant, actionable context**—CVE summary, severity-to-priority mapping, and concrete remediation steps—so developers can move from alert to fix without extra triage.

## What it does

- **GitHub Security Intake** — Fetches open Dependabot alerts with CVE metadata  
- **CVE Summarization** — Converts raw CVE data into clear, actionable summaries using AI  
- **Ownership Resolution** — Automatically identifies the correct fix owner via GitHub lookup  
- **Jira Ticket Creation** — Creates well-formatted, auto-assigned Jira tickets  
- **Auditability** — Every agent decision is logged and inspectable  
- **Dry-Run Mode** — Preview tickets before creating them 

More features coming soon! Stay tuned for updates and check out the code, and a demo video 👉  
https://github.com/anikeshk/traceguard
