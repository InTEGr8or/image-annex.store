---
layout: layout.njk
title: Image Annex — archive the whole catalog
description: Open-source archive and catalog for photographers and creators. You own the files — including YouTube masters YouTube does not.
gtm_id:
---

# Your photos are a catalog, not a pile of drives

<img class="hero" src="/images/hero-camera.jpg" alt="A camera on a workbench — Unsplash stock, not a client shoot">

If you shoot weddings, events, headshots, or commercial work, the volume is the job. Same if you publish YouTube (or any platform): the site is distribution, not your master. Image Annex is a permanent archive and index so you dump cards, drives, and exports in, keep thumbnails searchable, and stop paying sync-suite prices for files you rarely open. You own the objects. YouTube does not.

<div class="shots">
<figure>
  <img src="/images/gallery-grid.jpg" alt="Image Annex gallery: a searchable thumbnail grid of a demo catalog">
  <figcaption>Dump-in catalog. Search, don’t archaeology folders. (Demo gallery on licensed stock — not client work.)</figcaption>
</figure>
<figure>
  <img src="/images/gallery-detail.jpg" alt="Image Annex gallery detail: one file with camera and path metadata">
  <figcaption>Open a file: EXIF, path, size. The hash is the identity.</figcaption>
</figure>
</div>

## What it does

- **Ingest without sorting.** Dump cards, drives, and old backups. Cataloging and dedup happen after ingest.
- **Find by what you remember.** Date, camera, location, keywords — not a folder archaeology project.
- **Cheap long-term keep.** Active storage for what you still deliver from; deep archive for the rest. You own the files.

## Open source. You don't pay us for the software.

Image Annex is [open source](https://github.com/InTEGr8or/image-annex). Run it on your machine. You pay **your** storage bill, not a license. **Nothing locks you into Amazon S3.** git-annex special remotes can be S3, Backblaze B2, Wasabi, Cloudflare R2, IDrive e2, another disk, or a mix: hot recent work on one remote, closed jobs on another. That is why it can be the cheapest for *every* access pattern — you pick the strategy, you are not buying a Drive/Box/Lightroom package.

We charge only if you want **us** in the loop:

- **Setup** — we stand up the annex, ingest, and catalog on a body of work.
- **On-site box** — a dedicated NUC (or similar) in the studio that hosts the image browser and archiver.
- **Service** — optional help: ingest days, restores, training. Still your files, your account.
- **Encryption** — optional client-side encryption before objects leave the box. Keys in **1Password** (or another plugin), or a hosted KMS (AWS or otherwise) if you want the key ceremony hosted. Platforms never see the key.

## Rarely opened, still searchable

Drive, Box, Dropbox, and Lightroom sell **package deals**: seats, sharing, PDF tools, admin, or the editor itself. Storage is a side effect. Volumes keep growing; those SKUs do not get cheaper per terabyte as the pile grows. They are not a long-term catalog you dump and forget.

Thumbnails stay local and fast. Originals go to **whatever remote fits the strategy**:

| Strategy | Example remote (2026 list, storage-only) | ~1 TB / mo | ~10 TB / mo |
|---|---|---|---|
| Almost never open (hours to restore) | S3 Glacier Deep Archive | **~$1** | **~$10** |
| Cheap + fairly hot, S3-compatible | IDrive e2 ~$4–6/TB; Backblaze B2 ~$7/TB; Wasabi ~$8/TB (egress often free or 3× stored) | **~$4–8** | **~$40–80** |
| Serve a lot (zero egress) | Cloudflare R2 ~$15/TB, $0 download | ~$15 | ~$150 |
| S3 Standard (if you insist) | Amazon ~$23/TB + egress | ~$23 | ~$230 |

Still cheaper than Lightroom’s 1 TB bundled in a **$12–20/mo** editor plan, or Google One / Dropbox **~$10/mo for 2 TB** of sync — **at 1 TB and at 20 TB**. You can keep Lightroom. You do not have to buy their cloud as the vault. Mix remotes as the library grows.

**Keep Lightroom. Don't use it as the archive.** The Lightroom or Photography plan is the editor at ~$12–20/mo with **1 TB** of cloud — enough for *current* work. Photographers already rotate older jobs off that quota onto disks. Adobe will sell more cloud (**3 / 10 / 20 TB** bundles; add-ons **from $11.99/mo per TB**, call to buy). That is still Creative Cloud, not archive: **10 TB ~$120/mo, 20 TB ~$240/mo** at that rate. Image Annex is for the closed jobs so Lightroom stays the cheap editor.

**Dropbox (list, US):** Plus ~$10/mo is **2 TB for one person**. Standard is **$15/mo, 3 TB for the team** (1 person or more) — adding the team product only adds **1 TB**. Advanced is **$24/user/mo for 15 TB, 3-person minimum** ($72/mo). Another Advanced seat adds **5 TB**, not 15.

| | What you actually buy | **1 TB** | **10 TB** closed archive | Catalog |
|---|---|---|---|
| **Google Drive / One** | ~$10/mo for 2 TB consumer. Extra people / Workspace SKUs do not scale as cheap TB. | Still buy the 2 TB SKU (~$10) | No cheap 10 TB SKU; AI Pro 5 TB ~$20/user, then quote | Folders + Photos |
| **Dropbox** | Plus ~$10 → 2 TB (1 person). $15 → 3 TB team (+1 TB). $24/user × 3 min → 15 TB; extra user +5 TB | Plus ~$10 for 2 TB | Advanced $72/mo for 15 TB at 3 seats | Sync, PDF, branding — not an archive index |
| **Adobe Lightroom** | **Editor** ~$12–20/mo with **1 TB**. Keep that for active develops. Do not grow the cloud. | **~$12–20/mo** (the whole plan) for 1 TB of Creative Cloud | Archive add-on **~$12/TB/mo** → 10 TB ~$120, 20 TB ~$240 | Working catalog + develop. Closed jobs / YouTube masters do not belong here. |
| **Box** | Business ~$15/user, 3-user min (~$45/mo “unlimited”) | Seats, not TB | Seats, not TB. File-size caps. | Collab |
| **iCloud+** | 2 TB ~$10; 6 TB ~$30; 12 TB ~$60 | 2 TB ~$10 | 12 TB ~$60/mo | Apple Photos |
| **Image Annex (OSS)** | Software **$0**. Keep Lightroom. Rent archive storage. YouTube is distribution, not the master. | **~$1/mo** cold originals | **~$10/mo** (20 TB ~$20). Optional setup / NUC / encryption. | Dump-in catalog. Thumbs stay searchable. You own the objects. |

List prices, US, 2026 ballpark — not a quote. Those suites are sync products; Image Annex is software you run plus storage at archive rates.

## First step

Never seen Image Annex? Sign up for a free demo. We will catalog a body of work so you can search it.

<form id="demo-signup" class="demo-form">
  <button type="submit" class="cta" id="demo-submit">Sign up for a free demo</button>
  <label class="sr-only" for="demo-email">Email</label>
  <input id="demo-email" name="email" type="email" required autocomplete="email" placeholder="you@studio.com">
  <p id="demo-status" class="muted" role="status"></p>
</form>

<p class="muted">Photographers and creators first (Fullerton area to start). Hourly digest to mark@bizkite.net.</p>
<p class="credit">Hero and catalog images: Unsplash License stock for demo. Not a real client archive. Competitor and AWS figures are public US list-price ballparks (2026), not a quote or a contract.</p>

<script>
(function () {
  var form = document.getElementById("demo-signup");
  if (!form) return;
  var status = document.getElementById("demo-status");
  var url = {{ signup.url | dump | safe }};
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var email = document.getElementById("demo-email").value.trim();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "cta_click", cta_label: "demo_signup" });
    if (!url) {
      status.textContent = "Signup is not live yet — email mark@bizkite.net.";
      return;
    }
    status.textContent = "Sending…";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, source: "landing" })
    }).then(function (res) {
      if (!res.ok) throw new Error("bad status");
      status.textContent = "Got it. We will follow up about a demo.";
      form.reset();
    }).catch(function () {
      status.textContent = "Could not submit. Email mark@bizkite.net instead.";
    });
  });
})();
</script>
