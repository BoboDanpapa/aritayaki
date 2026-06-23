# Heritage Home Museum Chronicle Design

## Goal

Make the culture page the first page of the demo so the initial impression is Kazan heritage and Arita culture, not a shopping platform.

## Design Read

This is a cultural brand exhibition page for overseas chefs and buyers. The visual language is Museum Chronicle: archival, quiet, text-led, and supported by real Arita town imagery. The page should feel like a small online museum room before it becomes a product inquiry experience.

## Scope

- The root route `/` renders the same cultural experience as `/heritage`.
- The nav puts `華山と有田` before `コレクション`.
- The hero image changes from the mismatched product reference to an Arita Uchiyama townscape image.
- The page tells two parallel stories:
  - Arita ware culture and place.
  - Kazan history from 1796 onward.
- Product selection remains available but secondary.
- Backend, payment, and real inquiry workflow remain out of scope.

## Content Direction

Japanese remains the default language. English and Traditional Chinese receive matching content, written as translation-quality demo copy rather than machine-like literal text.

The Kazan history uses the official Kazan chronology as its source. The Arita culture section uses broad historical context and is written conservatively, without unsupported claims. All demo images and facts include source notes.

## Visual Direction

- Use cold porcelain white, Arita indigo, ink, and hairline borders.
- Avoid marketplace cards as the main rhythm.
- Use a hero image with a clear place signal: Arita Uchiyama streetscape or traditional townscape.
- Use a museum-like chronology with years as archival labels.
- Keep animation restrained and functional.

## Acceptance Criteria

- `/` opens with `華山と有田`, not the collection-oriented home hero.
- `/heritage` and `/` both show the expanded Museum Chronicle page.
- Header navigation order begins with heritage, then collection.
- The old balloon plate product image is not used as the heritage hero image.
- The page contains richer Japanese, English, and Traditional Chinese culture/history copy.
- The image source file documents the Arita townscape image attribution.
- Tests and production build pass.

