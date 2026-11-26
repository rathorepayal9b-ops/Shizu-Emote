SHIZUKA — FF EMOTE STUDIO
========================

Website updates:
- Rebranded the frontend from Crafter Shihab / FF Emote Web to Shizuka.
- Replaced the dark/gold look with a soft Light Rainbow theme.
- Updated the responsive layout, cards, form fields, status display and buttons.
- Kept the existing Flask backend, API route, request parameters and JavaScript request flow unchanged.

RENDER SETUP
1. Keep Emote_API.py in the repository root (not inside static/).
2. In Render, open the service > Settings > Build & Deploy.
3. Set Start Command to: gunicorn Emote_API:app --workers 1 --threads 8 --timeout 120
4. In Environment, add BOT_UID and BOT_PASSWORD for your own authorized account.
5. Save changes and deploy.

IMPORTANT
- Never put BOT_UID or BOT_PASSWORD in frontend code, GitHub files, screenshots, or public messages.
- Do not share account passwords in chat.
- This package targets a Python-capable host such as Render; static-only hosting will not run the Flask backend.
- The API uses a game client protocol and fixed client/version/region values from the supplied script. Provider changes may affect functionality.
- Keep the endpoint private and use it only where you have permission. An unauthenticated public game-action endpoint can be misused.


BRANDING ASSETS
- All PNG icon assets (favicon, Android icons and Apple touch icon) use the supplied Shizuka artwork.
- Added static/shizuka-ff-light-theme.jpg as the branded portrait shown at the top of the website.
- Existing API/backend files and request flow were left unchanged.
