Archive manifest for redundant files moved on 2026-05-09

Moved items:
- archived_redundant/src_app_lib_utils.ts  (moved from src/app/lib/utils.ts)
  Reason: Duplicate utility file; project uses `src/lib/utils.ts` via alias `@/lib/utils`.

- archived_redundant/OneiCRM/ (moved from src/OneiCRM/)
  Files moved: loginpage.jpeg, account_infortmationpage.jpeg, meetingentry_mobileview.jpeg,
    task_calender.jpeg, taskentry_mobileview.jpeg
  Reason: Duplicate image assets — identical images are served from `public/OneiCRM/`.

Renamed file:
- src/OneiCore/report .jpeg -> src/OneiCore/report.jpeg
  Reason: remove space in filename to avoid tooling issues.

Notes:
- All moves were performed in the working tree (git mv where available, falling back to mv).
- If you want these permanently deleted instead of archived, run `git rm` on the archived files and commit.
- Files remain staged (if using git). Review with `git status` and commit when ready.
