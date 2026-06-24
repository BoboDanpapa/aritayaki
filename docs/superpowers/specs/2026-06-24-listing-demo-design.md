# 出品準備室 / Listing Demo Design

## Purpose

Build a frontend-only demo page that shows Kazan shop owners how a future seller-side listing workflow will work.

The page is not a real admin system. It is a guided demonstration of how a shop owner can prepare one condition-documented Arita-yaki vessel for overseas presentation:

1. Provide multiple photos.
2. Write a short shop-owner memo in their own words.
3. Record one or more condition notes.
4. Let the system organize the information into overseas-facing draft copy.
5. Review a buyer-side product preview and Condition Report summary.

The demo must make the workflow understandable without requiring the shop owner to actually take photos or write copy during the presentation. It should open with realistic default content already filled in.

## Confirmed Direction

- Page name: `出品準備室`
- Navigation label:
  - Japanese: `出品Demo`
  - English: `Listing Demo`
  - Traditional Chinese: `上架 Demo`
- Proposed route: `/listing-demo`
- Placement: last item in the main navigation during the demo phase.
- Page type: single-page seller-side preparation workspace.
- Visual mood: Arita Heritage working desk plus vessel archive.
- Backend: none.
- Database: none.
- Real upload or publishing: none.

## Existing Page Protection

Existing completed pages and styles must not be changed unless the user confirms the change in advance.

Protected surfaces include:

- Heritage homepage.
- Current home, collection, product detail, condition, chef, selection, and confirmation pages.
- Existing buyer-side visual rhythm and Arita Heritage direction.
- Existing product detail content and layout.

Expected minimal implementation scope, if later approved:

- Add a new page component for the listing demo.
- Add a new route for `/listing-demo`.
- Add one navigation entry for the demo page.
- Add localized copy for the new navigation label.
- Add new demo-specific styles, scoped as much as practical.

Any required edit to shared components, shared styles, global layout, or existing page behavior must be explained to the user and confirmed before implementation.

## Design Read

Reading this as: a seller-side vessel preparation demo for Kazan shop owners, with a quiet Arita Heritage visual language and a practical workbench layout, leaning toward an archival single-page tool rather than a generic admin dashboard.

Recommended dials:

- `DESIGN_VARIANCE: 5`
- `MOTION_INTENSITY: 2`
- `VISUAL_DENSITY: 6`

The page can be denser than the buyer-facing pages, but it should not feel like SaaS admin software.

## Core UX Principle

The shop owner should understand this sentence after seeing the first screen:

> I will provide photos and my own observations. The system will help organize them into overseas-facing product copy and a professional Condition Report.

The AI role is editorial and structural. It should not appear to replace the shop owner's judgment.

Preferred action language:

- Use `海外向けに整える`.
- Use `下書き`.
- Use `内容を確認して公開`.
- Avoid aggressive language like automatic publishing or direct AI generation.

## Default Demo Vessel

The page should open with one realistic sample vessel already filled in.

Suggested sample:

- Vessel name: `染付唐草 小鉢`
- Category: `小鉢`
- Brand / kiln: `華山`
- Quantity: `1`
- Dimensions: `径 12.5 cm / 高さ 5.2 cm`
- Weight: `260 g`
- Reference price: `USD 48`
- Culinary use: `先付、珍味、季節の小さな一品`

Default shop-owner memo:

```text
縁の外側に小さな釉薬の濃淡があります。料理を盛る面には影響ありません。形と絵付けは落ち着いており、少量の先付に使いやすい器です。
```

Default condition records:

1. `釉薬の濃淡`
   - Location: `外縁、時計の2時方向`
   - Visibility: `軽微`
   - Food-contact area: `非該当`
   - Linked photo: `状態特写`

2. `鉄粉点`
   - Location: `高台近く`
   - Visibility: `軽微`
   - Food-contact area: `非該当`
   - Linked photo: `高台`

English draft direction:

```text
A small sometsuke bowl with calm arabesque painting, suitable for seasonal appetizers and small composed dishes. A subtle glaze tone variation appears on the outer rim and does not affect normal use.
```

## Page Structure

Desktop layout uses three columns:

```text
Left: Image record
Middle: Vessel information, shop-owner memo, condition records
Right: Overseas-facing draft and buyer-side preview
```

Recommended proportions:

- Left column: about 30%.
- Middle column: about 38%.
- Right column: about 32%.
- Column gap: about 20-24px.
- Overall content width: about 92vw, max about 1500-1560px.

The right column should be sticky on desktop so the buyer-side preview remains visible while the owner reviews or edits the middle column.

## Header Area

The header should feel like an archival work page, not a software dashboard.

Content:

- Title: `出品準備室`
- Subtitle: `写真、店主メモ、状態記録をもとに、海外向けの商品下書きを整えます。`
- Demo notice: `Demo専用：実際の公開、在庫更新、画像保存は行われません。`

Status summary:

- `下書き`
- `写真 5枚`
- `状態記録 2件`
- `海外向け説明 下書き済み`

The status summary should use quiet line-based blocks, not a heavy stepper.

## Left Column: Image Record

Section title: `影像記録`

Purpose:

Show that one vessel needs a group of photos, not just a product thumbnail.

Default photo roles:

- `主写真`
- `側面`
- `俯瞰`
- `高台`
- `状態特写`

Behavior:

- The main image is large and acts as the visual anchor.
- Thumbnails sit below the main image.
- Labels should appear below or beside images, not overlaid on the image.
- Any image can be clicked to open a large-image viewer.
- The currently selected main image can change in demo state.

Actions:

- `写真を追加`
- `主写真に設定`
- `状態記録に紐づける`

The demo does not need to save uploaded files. If an add-photo interaction is included, it can show a placeholder slot or a temporary state message.

## Large-Image Viewer

Clicking any image should open a near-fullscreen viewer without leaving the page.

Viewer requirements:

- Dark translucent backdrop.
- Large centered image, preserving the original image as much as possible.
- Close control: `閉じる`.
- Previous / next controls: `前へ`, `次へ`.
- Image role label, for example `状態特写`.
- Linked condition record label when relevant, for example `状態記録 01`.
- Optional actions:
  - `主写真に設定`
  - `状態記録に紐づける`

The viewer should feel like inspecting archive photography, not like a discount ecommerce gallery.

## Middle Column: Owner Input

Section order:

1. `器物情報`
2. `店主メモ`
3. `状態記録`
4. `公開前確認`

Form rules:

- Labels appear above inputs.
- Placeholder text is not used as a label.
- Inputs use fine borders and restrained spacing.
- No rounded SaaS card look.
- The shop-owner memo textarea should be visually important.

`店主メモ` helper text:

```text
短い言葉で構いません。器の印象、気になる箇所、使い方を店主の言葉で残します。
```

Prompt questions:

- `どんな料理に合いますか`
- `気になる箇所はどこですか`
- `通常使用に影響はありますか`

Condition records should read like small archive records, not warnings.

Example:

```text
01 釉薬の濃淡
外縁、時計の2時方向
軽微 / 食品接触面なし
紐づけ写真：状態特写
```

`公開前確認` checklist:

- `写真を確認`
- `状態説明を確認`
- `価格と在庫を確認`
- `海外向け下書きを確認`

## Right Column: Overseas Draft

Section title: `海外向け下書き`

Purpose:

Show the value of the workflow: the owner's photos, memo, and condition notes become a buyer-facing product presentation.

Subsections:

1. `買い手側カード`
2. `多言語下書き`
3. `Condition Report`

`買い手側カード` should preview:

- Main image.
- Vessel name.
- Short overseas-facing description.
- Reference price.
- Condition Report marker.

`多言語下書き`:

- Use tabs or segmented controls.
- Tabs: `日本語`, `English`, `繁中`.
- Default tab: `English`.

`Condition Report` summary:

- `Glaze tone variation, outer rim, subtle visibility`
- `Tiny iron speck near foot ring, no functional impact`

Primary actions:

- `海外向けに整える`
- `内容を確認して公開`

Completion state:

```text
公開準備完了：正式公開前に、写真・価格・在庫を店主が確認してください。
```

Do not use `公開済み` in the demo, because no real publication occurs.

## Mobile Layout

On mobile, the page must collapse to a single-column flow:

1. Header and demo notice.
2. Status summary.
3. `影像記録`.
4. `器物情報`.
5. `店主メモ`.
6. `状態記録`.
7. `海外向け下書き`.
8. `公開前確認`.

The right-column sticky preview should be disabled on mobile.

## Visual Guardrails

Use the existing Arita Heritage direction:

- Porcelain white and quiet grey surfaces.
- Arita indigo as the primary accent.
- Fine lines and archive-like separation.
- Mincho-style headings where consistent with the current site.
- Sans-serif for form labels and operational text.
- Real or existing vessel photography.

Avoid:

- Generic admin dashboard styling.
- Dark SaaS panels.
- Heavy rounded cards.
- Red error styling for defects.
- Overlaid labels on photos.
- Discount, outlet, or bargain language.
- Claiming the item has actually been published.

Condition differences should be presented as professional disclosure through `状態記録`, not as alarm or damage.

## Demo Interactions

Required demo interactions:

- Click thumbnails to change the active main image.
- Click any image to open the large-image viewer.
- Navigate previous and next images inside the viewer.
- Close the viewer.
- Set a different main image in front-end state.
- Add a condition record as front-end-only demo state.
- Run `海外向けに整える` as a front-end-only state transition.
- Run `内容を確認して公開` to show `公開準備完了`, not `公開済み`.

No interaction should imply data persistence.

## Business and Brand Risk Notes

Reference price and stock may be shown in the demo, but real publishing must not happen before the shop owner confirms:

- Photo accuracy.
- Final availability.
- Final price.
- Market-specific shipping feasibility.
- Condition wording.

The demo should support the long-term product direction, but it must not overpromise automatic inventory or logistics behavior.

## Approval Gate

This design document is a planning artifact only. Implementation should not begin until the user explicitly approves moving from design to development.

Before implementation, confirm any changes to:

- Navigation.
- Routes.
- Shared layout components.
- Shared CSS.
- Existing page copy or visual style.
