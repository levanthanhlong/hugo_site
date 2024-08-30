---
title: Hugo + TinaCMS Setup Guide
date: 2024-08-28T17:00:00.000Z
draft: false
---

## Introduction

The Tina schema defines the shape of your content. Tina uses a "content-modeling as code" approach. This has a few benefits compared to modelling through a UI:

* The schema is version-controlled
* Mutating the schema is easy, as you can test out changes locally, or in a branch.
* The developer can extend the schema in interesting ways (custom validation, custom UI fields, etc).

The content model, and all configuration code is defined in a file called tina/config.{ts,js,tsx}.123
