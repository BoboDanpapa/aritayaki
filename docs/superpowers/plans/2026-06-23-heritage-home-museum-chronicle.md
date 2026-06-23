# Heritage Home Museum Chronicle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Kazan and Arita cultural page the homepage and redesign it as a Museum Chronicle page.

**Architecture:** Reuse the existing React Router and page structure. Route `/` to `HeritagePage`, keep `/heritage` as a direct culture URL, and update the header navigation order. Replace the `HeritagePage` content model with localized sections for hero, Arita culture, Kazan chronology, and source notes.

**Tech Stack:** React, TypeScript, Vite, Vitest, React Router, existing CSS.

---

### Task 1: Lock Homepage Behavior With Tests

**Files:**
- Modify: `src/app.test.tsx`

- [ ] **Step 1: Write the failing tests**

Add assertions that `/` renders the heritage-first experience and that the header nav orders heritage before collection.

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test src/app.test.tsx`

Expected: the root route still renders the old collection-oriented home copy, so the new homepage expectation fails.

### Task 2: Route Culture First

**Files:**
- Modify: `src/app.tsx`
- Modify: `src/components/SiteHeader.tsx`

- [ ] **Step 1: Route `/` to `HeritagePage`**

Change the root route element from `HomePage` to `HeritagePage`. Leave `/heritage` intact.

- [ ] **Step 2: Put heritage first in nav**

Change the nav array order to `/heritage`, `/collection`, `/condition`, `/for-chefs`.

- [ ] **Step 3: Run tests**

Run: `pnpm test src/app.test.tsx`

Expected: homepage route assertions pass after the content work is complete.

### Task 3: Build Museum Chronicle Content

**Files:**
- Modify: `src/pages/HeritagePage.tsx`
- Modify: `src/styles.css`
- Modify: `public/images/SOURCES.md`
- Add: `public/images/arita-uchiyama-townscape.jpg`

- [ ] **Step 1: Add the Arita townscape image**

Use an open-license Arita Uchiyama townscape image and record attribution in `SOURCES.md`.

- [ ] **Step 2: Replace the short heritage copy**

Add localized hero, culture, chronology, and source copy for Japanese, English, and Traditional Chinese.

- [ ] **Step 3: Replace the layout**

Use a place-led hero, dual story section, archive-style timeline, and source note. Do not use the old balloon plate image as the hero.

- [ ] **Step 4: Run tests**

Run: `pnpm test`

Expected: all tests pass.

### Task 4: Verify and Publish

**Files:**
- Modify as needed based on verification.

- [ ] **Step 1: Build**

Run: `pnpm build`

Expected: Vite build succeeds.

- [ ] **Step 2: Commit**

Stage only intentional files, excluding `.superpowers/`, then commit.

- [ ] **Step 3: Push**

Push `main` to `origin`.

- [ ] **Step 4: Verify GitHub Pages**

Check the public GitHub Pages URL after deployment and confirm the page loads.

