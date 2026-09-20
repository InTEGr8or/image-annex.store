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
- **Cheap long-term keep.** Active storage for what you still deliver from; deep archive for the rest. You own the files. No lock-in.

## Rarely opened, still searchable

Originals you almost never open go to **S3 Glacier Deep Archive**. Thumbnails stay fast (local / hot) so the catalog still works. Storage-only, us-east-1 list-price ballpark:

| What | Where | About |
|---|---|---|
| Thumbnails (search/preview) | Local disk or S3 Standard | ~50 KB each. 100k files ≈ 5 GB. |
| Originals you still deliver from | S3 Standard-IA | ~$12.50 / TB / month, instant get |
| Originals you almost never open | Glacier Deep Archive | **~$1 / TB / month**; restore in hours |

A 10 TB closed-job archive is on the order of **$10/month** for the cold originals, not $230/month of “hot” object storage. Retrieval is slow by design. You own the files; no lock-in.

## First step

Never seen Image Annex? Sign up for a free demo. We will catalog a body of work so you can search it.

<form id="demo-signup" class="demo-form">
  <button type="submit" class="cta" id="demo-submit">Sign up for a free demo</button>
  <label class="sr-only" for="demo-email">Email</label>
  <input id="demo-email" name="email" type="email" required autocomplete="email" placeholder="you@studio.com">
  <p id="demo-status" class="muted" role="status"></p>
</form>

<p class="muted">Fullerton-area photographers first. Hourly digest to mark@bizkite.net.</p>
<p class="credit">Hero and catalog images: Unsplash License stock for demo. Not a real client archive. Prices are AWS us-east-1 storage-only estimates, not a quote.</p>

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
