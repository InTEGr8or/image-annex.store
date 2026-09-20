---
layout: layout.njk
title: Image Annex — archive the whole catalog
description: Permanent archiving, cataloging, and catalog search for photographers who shoot a lot.
gtm_id:
---

# Your photos are a catalog, not a pile of drives

<img class="hero" src="/images/hero-camera.jpg" alt="A camera on a workbench — Unsplash stock, not a client shoot">

If you shoot weddings, events, headshots, or commercial work, the volume is the job. Image Annex is a permanent archive and index so you can dump everything in, keep thumbnails searchable, and stop paying premium storage for files you rarely open.

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

Image Annex is [open source](https://github.com/InTEGr8or/image-annex). Run it on your machine. You pay **your** cloud bill for the originals (typically AWS S3 Glacier Deep Archive), not a license.

We charge only if you want **us** in the loop:

- **Setup** — we stand up the annex, ingest, and catalog on a body of work.
- **On-site box** — a dedicated NUC (or similar) in the studio that hosts the image browser and archiver.
- **Service** — optional help: ingest days, restores, training. Still your files, your account.

## Rarely opened, still searchable

Drive, Box, and Dropbox are priced as **sync and collaboration**. A 10 TB closed-job pile is not that. Consumer 2 TB plans are ~$10/month (~$5/TB). They do not stay that cheap at archive scale, and they are not a catalog: you still search folders.

Thumbnails stay local and fast. Originals you almost never open sit in **Glacier Deep Archive** (~**$1/TB/month**, hours to restore).

| | ~2 TB | ~10 TB closed archive | Catalog / thumbs |
|---|---|---|---|
| **Google Drive / One** | ~$10/mo (2 TB consumer) | No cheap 10 TB SKU; Workspace / AI Pro 5 TB is ~$20/user, then quote | Folders + Photos. Not EXIF/hash search. |
| **Dropbox** | Plus ~$10–12/mo (2 TB) | Business from ~$15/user (3-user min on some plans) | Sync/share. Not an archive index. |
| **Box** | Personal is tiny | Business ~$15/user, 3-user min (~$45/mo “unlimited”) | Collab + file-size caps. Not a photo vault. |
| **iCloud+** | 2 TB ~$10/mo | 6 TB ~$30, 12 TB ~$60 | Apple Photos. Locked to that ecosystem. |
| **Image Annex (OSS)** | Software **$0** | Cold originals **~$10/mo** (10 × $1/TB). Optional setup / NUC. | Dump-in catalog. Thumbs stay searchable. You own the objects. |

List prices, US, 2026 ballpark — not a quote. Drive/Box/Dropbox are the product you already know; Image Annex is software you run plus storage you rent at archive rates.

## First step

Never seen Image Annex? Sign up for a free demo. We will catalog a body of work so you can search it.

<form id="demo-signup" class="demo-form">
  <button type="submit" class="cta" id="demo-submit">Sign up for a free demo</button>
  <label class="sr-only" for="demo-email">Email</label>
  <input id="demo-email" name="email" type="email" required autocomplete="email" placeholder="you@studio.com">
  <p id="demo-status" class="muted" role="status"></p>
</form>

<p class="muted">Fullerton-area photographers first. Hourly digest to mark@bizkite.net.</p>
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
