# Listing Demo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the frontend-only `出品準備室` listing demo page with prefilled vessel data, image inspection, condition records, overseas draft preview, and a demo navigation entry.

**Architecture:** Add one isolated React page component and route it at `/listing-demo`. Keep buyer-facing pages intact by only adding localized nav copy, one navigation item, and scoped `.listing-demo-*` styles.

**Tech Stack:** React, React Router, TypeScript, Vitest server-side render tests, existing CSS variables and lucide-react icons.

---

### Task 1: Route and Smoke Test

**Files:**
- Modify: `src/app.test.tsx`
- Modify: `src/app.tsx`
- Modify: `src/components/SiteHeader.tsx`
- Modify: `src/content/copy.ts`
- Create: `src/pages/ListingDemoPage.tsx`

- [ ] **Step 1: Write the failing test**

Add a test to `src/app.test.tsx` that renders `/listing-demo` and asserts the page title, demo notice, prefilled vessel name, and navigation label are present.

- [ ] **Step 2: Run the test to verify it fails**

Run: `pnpm test -- src/app.test.tsx`
Expected: FAIL because `/listing-demo` does not render the new page and `出品Demo` does not exist.

- [ ] **Step 3: Add minimal route, nav copy, and placeholder page**

Create `ListingDemoPage.tsx`, add it to `AppRoutes`, add `navListingDemo` to all languages, and append `/listing-demo` to the nav list.

- [ ] **Step 4: Run the test to verify it passes**

Run: `pnpm test -- src/app.test.tsx`
Expected: PASS.

### Task 2: Page Content and Demo Interactions

**Files:**
- Modify: `src/pages/ListingDemoPage.tsx`
- Modify: `src/app.test.tsx`

- [ ] **Step 1: Write failing assertions for demo behavior surface**

Assert rendered HTML includes image roles, owner memo, two condition records, the English draft, `海外向けに整える`, and `内容を確認して公開`.

- [ ] **Step 2: Run the test to verify it fails**

Run: `pnpm test -- src/app.test.tsx`
Expected: FAIL until the full page content exists.

- [ ] **Step 3: Implement the page content and front-end state**

Add sample vessel data, image role list, thumbnail selection, large-image viewer, condition add state, draft refresh state, and publish-ready state.

- [ ] **Step 4: Run the test to verify it passes**

Run: `pnpm test -- src/app.test.tsx`
Expected: PASS.

### Task 3: Scoped Styling and Build Verification

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Add scoped styles**

Append `.listing-demo-*` CSS for the three-column layout, image grid, forms, sticky preview, modal viewer, and mobile collapse.

- [ ] **Step 2: Verify tests and build**

Run: `pnpm test -- src/app.test.tsx`
Expected: PASS.

Run: `pnpm build`
Expected: PASS.

- [ ] **Step 3: Review diff against protection constraint**

Run: `git diff -- src/pages/ListingDemoPage.tsx src/app.tsx src/components/SiteHeader.tsx src/content/copy.ts src/styles.css src/app.test.tsx`
Expected: only the approved demo route, nav copy, page component, scoped CSS, and tests changed.
