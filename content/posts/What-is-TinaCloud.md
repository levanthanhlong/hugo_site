---
title: What is TinaCloud?
date: 2024-08-28T17:00:00.000Z
draft: false
---

TinaCloud is a hosted [datalayer](https://tina.io/docs/reference/content-api/datalayer) for TinaCMS. TinaCloud is the easiest way to use TinaCMS in production. It provides a hosted GraphQL endpoint for your content, Git integration, user management, editorial workflow features and more. It also grants authorization for other users (content creators, editors, marketers, etc) to login and edit their site without needing to grant direct access to the repository in GitHub. TinaCMS can be [self-hosted](https://tina.io/docs/self-hosted/overview) or used independently of TinaCloud as well.

For more information, see [TinaCloud Overview](https://tina.io/docs/tina-cloud/overview).

## Where can I get help or share an idea for TinaCMS or TinaCloud?

* Check out our communities at [https://tina.io/community/](https://tina.io/community/)

## What is Tina's tech stack?

### TinaCloud

* Content querying + indexing - Node
* Cloud provider - AWS
* Identity management - Go

### TinaCMS

* CMS - React 18

## What features are unavailable in self-hosted Tina compared to TinaCloud?

When comparing TinaCloud with self-hosting Tina, there are specific features unique to TinaCloud. These include:

### 1. Git Backed Media

In TinaCloud, there's a Git backed media feature. This integrates media into the Tina Media Manager and commits it directly to the Git repository. However, this functionality is not present in self-hosted Tina.

The reason for its absence is due to the process involving media uploads. When using the media manager in TinaCloud, images are uploaded to TinaCloud servers and distributed via a CDN. This ensures that images are accessible through the Tina Media Manager, as they require a URL for accessibility. Without this, images won't appear in the Media Manager until the site is rebuilt.

### 2. Dynamic Branch Switching at Runtime

TinaCloud allows for changing the content branch at runtime, a feature managed through URL modification. However, in self-hosted Tina, changing branches is restricted to the build phase only.

This limitation means that commands like:
