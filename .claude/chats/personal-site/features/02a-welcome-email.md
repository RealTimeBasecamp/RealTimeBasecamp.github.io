# Feature State: Feat-02a beehiiv welcome email

## Upstream Prerequisites
* **Depends On:** None
* **Downstream Blocked Items:** Feat-02 go live (footer signup), Feat-13 popup

## Feature Objective
* Replace the stale beehiiv welcome email (Settings > Emails, or the welcome automation; currently disabled) with the template below, then re-enable it.

## Implementation Checklist
* [ ] Upload new assets to the beehiiv media library: `TempleHero.jpg` (1200px), `DiscordInvite_1.png` (Discord x RTB banner), `UE5VariablesCheatSheet.pdf` (no year in the name)
* [ ] Build the email from the template
* [ ] Delete the old "New post" draft (2026-09-03) once the welcome email is done
* [ ] Send a test to Gmail; check images, links, PDF download, `{{First_Name|there}}`
* [ ] Re-enable the welcome email

## Assets
Existing in the beehiiv media library:
* `Mountain256.png`, `White256.png`, `Snowflake.png`: section icons, 10% width, centred
* `CheatSheetMockupFullResCompressed.jpg`: cheat sheet mockup, full width, rounded corners 10
* `DiscordBannerTransparent.png`: old Discord banner (replace with `DiscordInvite_1.png`)
* `Signature004.png`: signature, full width
* `UE5VariablesCheatSheet2024.pdf`: old file attachment (replace)

New (in `D:` or the chat downloads): `TempleHero.jpg`, `DiscordInvite_1.png`, `UE5VariablesCheatSheet.pdf`

## Template
Subject: Welcome, here's your Blueprint cheat sheet
Preview text: Your free download, plus a few things worth knowing

[IMAGE: TempleHero.jpg, full width, alt "Ruined stone temple in Unreal Engine, lit with pink and blue lights"]

**Hi {{First_Name|there}},**

Thanks for subscribing. Your free cheat sheet is just below.

[ICON: Snowflake.png]

### Your cheat sheet

All the main UE5 variable types on 7 pages: booleans, numbers, strings, structs, vectors, enums, object references, arrays, sets and maps.

[IMAGE: CheatSheetMockupFullResCompressed.jpg]
[FILE ATTACHMENT: UE5VariablesCheatSheet.pdf]

[ICON: Mountain256.png]

### What to expect

Hi, I'm Rob, a Technical Artist and Pipeline Developer. I started learning Unreal back in 2014, when Unreal Engine 4 had just replaced Unreal Development Kit (UDK), the engine behind Unreal Tournament.

Since then, I've used Unreal professionally across the Games, VFX, VR/AR/MR/XR (all the realities), and Architecture industries. I started as a 3D environment artist after studying Computer Games Technology, moved into VR as a technical artist, then realised I loved building tools that make my team's life easier, so I became a pipeline developer.

More recently, I've lectured at University College London, teaching 3D and cinematography fundamentals to master's students. Since 2023, I've mentored 30+ students on [MentorCruise](https://mentorcruise.com/mentor/robertfraser/), from learning Unreal to releasing full games on Steam.

I'll be sharing:

* **Blueprints:** 12 years of learning and the mistakes worth avoiding
* **Unreal art:** world building and environment creation
* **Tips and tricks:** small workflow wins from real projects
* **Free resources:** cheat sheets, tools and downloads

[ICON: White256.png]

### A free software list

Free alternatives to the usual paid tools: Photoshop, Maya, Substance, Premiere, Office and more, with notes on the catches worth knowing about.

[BUTTON: View the Free Software List -> https://docs.google.com/spreadsheets/d/1XaZuICuH2aoxRnNfnCM0t6l8w7DVf67YpKXki9anM7I/edit?gid=0#gid=0]

[ICON: Mountain256.png]

### Join Real Time Basecamp on Discord

[IMAGE: DiscordInvite_1.png, linked to https://discord.gg/jZWH59Kgcj, alt "Join Real Time Basecamp on Discord"]

A community for 3D, game art, development and design in Unreal Engine, especially if you're just starting out. Ask questions, share what you're making, or just lurk.

[BUTTON: Join the Discord -> https://discord.gg/jZWH59Kgcj]

[ICON: White256.png]

### Mentoring

Want one-to-one help? I mentor Unreal artists and developers.

[BUTTON: Book a session -> https://mentorcruise.com/mentor/robertfraser/]

Hit reply and tell me what you're building in Unreal at the moment.

Cheers,
Rob

[IMAGE: Signature004.png]

## Decisions
* Inbox tips section removed. Mentorship links to MentorCruise for now
* No emojis, no Sherpa/expedition copy, no newsletter cadence, no LinkedIn, no realtimebasecamp.com links until Feat-12 is live
* Newsletter name pending (Feat-14); update subject/copy if it changes

---

# Bugs & Edge Cases
* Discord invite must be set to never expire; spreadsheet header still links `JuN7XSp26k`, align with `jZWH59Kgcj`.


# User Feedback


# Final review & Tests
