---
layout: layout.njk
title: Image Annex — archive the whole catalog
description: The app is free. Your pictures stay in a cloud bucket you own, at archive prices. We can bring a computer and set it up, or run the cloud account. The bucket stays yours.
gtm_id:
---

# The app is free. The bucket is yours. Closed jobs cost about $1 a terabyte a month.

<div class="vp">
  <p>Image Annex runs on your laptop, or on dedicated machines you keep on the local network. One hub is enough. Several hubs can share the archive. The catalog is stored in a cloud bucket in your name. You pay that storage bill, not a software license. Install it and use it without paying us. If you want us to bring a machine and set the hub up, we do that. Or we run the cloud account and add a maintenance markup. Either way you keep the bucket. Stopping our fee does not take the pictures.</p>
  <p>Service prices are not on this page yet. The storage figures below are the cloud vendors’ public list prices.</p>
</div>

<p><a class="cta" href="https://pypi.org/project/image-annex/">Install it yourself</a></p>

<img class="hero" src="/images/hero-camera.jpg" alt="A camera on a workbench — Unsplash stock, not a client shoot">

If you shoot weddings, events, headshots, or commercial work, the volume is the job. Same if you publish on YouTube: the site is distribution, not your master. The app, on a laptop or on a local hub, takes the files, keeps a gallery, and copies originals into storage you rarely have to open.

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

## How a picture is stored

<figure class="diagram">
  <img src="/images/how-a-file-moves.svg" alt="Five steps: you shoot, the app runs on your laptop or on a local hub, one or several, it copies the files into your cloud bucket, the card can then be erased, and you search on the web or your phone.">
</figure>

<p>Run it on the laptop you edit on, or on dedicated machines on your network. A studio can keep one hub, or several, so the archive sits on those machines while the laptop stays light. The card or the old drive is emptied only after a local copy and the bucket both have the file. Some folders stay on the laptop or the hub so they open immediately. Others can leave that machine once the bucket is the copy that counts. A phone folder that is still syncing is copied and never deleted. The same photo from two cards is stored once. The folder it came from stays on the file, so you can still search for the job after the folders are gone.</p>

<p>The gallery on the machine running the app is newest-first thumbnails. It reads captions, words in the picture, faces, and transcripts of audio and video. A phone web page shows that catalog too. Log in is the button at the top of this page. An Android app for that search is in progress. It is not in the stores yet.</p>

## What you pay

<figure class="diagram">
  <img src="/images/what-you-pay.svg" alt="Three parts: the app is free and runs on a laptop or on local dedicated machines, one hub or several. The cloud bucket is in your name. Help is optional: we bring a hub or set up machines you already have, or we run the cloud account. The bucket stays yours. Service prices are not listed yet.">
</figure>

<p>The software is <a href="https://github.com/InTEGr8or/image-annex">open source</a>. The install page is <a href="https://pypi.org/project/image-annex/">image-annex on PyPI</a>:</p>

<pre><code>pip install image-annex</code></pre>

<p>Nothing locks the bucket to Amazon S3. Your computer can copy to S3 Glacier, Backblaze B2, Wasabi, Cloudflare R2, IDrive e2, another disk, or a mix: recent work on one, closed jobs on another.</p>

<p>Two ways to hire us, both optional. Neither one is required to use the app:</p>

<ul>
  <li><strong>We come to you.</strong> We bring a dedicated machine, leave it as a hub, and set the archive up on a body of work. We can also set up hubs you already have. One machine or several.</li>
  <li><strong>We run the cloud account.</strong> You still own the bucket. We charge a maintenance markup on top of the vendor’s bill.</li>
</ul>

<p>Encryption before objects leave the computer is optional. Keys can live in 1Password, or in a hosted KMS if you want that ceremony. The storage platform does not see the key.</p>

## Rarely opened, still searchable

Drive, Box, Dropbox, and Lightroom sell **package deals**: seats, sharing, PDF tools, admin, or the editor itself. Storage is a side effect. Volumes keep growing; those SKUs do not get cheaper per terabyte as the pile grows. They are not a long-term catalog you dump and forget.

Thumbnails stay on the laptop or the hub and stay fast. Originals go to **whatever remote fits the strategy**:

| Strategy | Example remote (2026 list, storage-only) | ~1 TB / mo | ~10 TB / mo |
|---|---|---|---|
| Almost never open (hours to restore) | S3 Glacier Deep Archive | **~$1** | **~$10** |
| Cheap + fairly hot, S3-compatible | IDrive e2 ~$4–6/TB; Backblaze B2 ~$7/TB; Wasabi ~$8/TB (egress often free or 3× stored) | **~$4–8** | **~$40–80** |
| Serve a lot (zero egress) | Cloudflare R2 ~$15/TB, $0 download | ~$15 | ~$150 |
| S3 Standard (if you insist) | Amazon ~$23/TB + egress | ~$23 | ~$230 |

Still cheaper than Lightroom’s 1 TB bundled in a **$12–20/mo** editor plan, or Google One / Dropbox **~$10/mo for 2 TB** of sync — **at 1 TB and at 20 TB**. You can keep Lightroom. You do not have to buy their cloud as the vault. Mix remotes as the library grows.

**Keep Lightroom. Don't use it as the archive.** The Lightroom or Photography plan is the editor at ~$12–20/mo with **1 TB** of cloud — enough for *current* work. Photographers already rotate older jobs off that quota onto disks. Adobe will sell more cloud (**3 / 10 / 20 TB** bundles; add-ons **from $11.99/mo per TB**, call to buy). That is still Creative Cloud, not archive: **10 TB ~$120/mo, 20 TB ~$240/mo** at that rate. Image Annex is for the closed jobs so Lightroom stays the cheap editor.

**Dropbox (list, US):** Plus ~$10/mo is **2 TB for one person**. Standard is **$15/mo, 3 TB for the team** (1 person or more) — adding the team product only adds **1 TB**. Advanced is **$24/user/mo for 15 TB, 3-person minimum** ($72/mo). Another Advanced seat adds **5 TB**, not 15.

<div class="table-scroll">
<table>
<thead>
<tr><th>Product</th><th>What you actually buy</th><th>1 TB</th><th>10 TB closed archive</th><th>Catalog</th></tr>
</thead>
<tbody>
<tr><td>Google Drive / One</td><td>~$10/mo for 2 TB consumer. Extra people / Workspace SKUs do not scale as cheap TB.</td><td>Still buy the 2 TB SKU (~$10)</td><td>No cheap 10 TB SKU; AI Pro 5 TB ~$20/user, then quote</td><td>Folders + Photos</td></tr>
<tr><td>Dropbox</td><td>Plus ~$10 → 2 TB (1 person). $15 → 3 TB team (+1 TB). $24/user × 3 min → 15 TB; extra user +5 TB</td><td>Plus ~$10 for 2 TB</td><td>Advanced $72/mo for 15 TB at 3 seats</td><td>Sync, PDF, branding — not an archive index</td></tr>
<tr><td>Adobe Lightroom</td><td>Editor ~$12–20/mo with 1 TB. Keep that for active develops. Do not grow the cloud.</td><td>~$12–20/mo (the whole plan) for 1 TB of Creative Cloud</td><td>Archive add-on ~$12/TB/mo → 10 TB ~$120, 20 TB ~$240</td><td>Working catalog + develop. Closed jobs / YouTube masters do not belong here.</td></tr>
<tr><td>Box</td><td>Business ~$15/user, 3-user min (~$45/mo “unlimited”)</td><td>Seats, not TB</td><td>Seats, not TB. File-size caps.</td><td>Collab</td></tr>
<tr><td>iCloud+</td><td>2 TB ~$10; 6 TB ~$30; 12 TB ~$60</td><td>2 TB ~$10</td><td>12 TB ~$60/mo</td><td>Apple Photos</td></tr>
<tr><td>Image Annex (OSS)</td><td>Software $0. Your bucket. Optional: we bring the computer, or we run the cloud account. Service prices are not listed yet.</td><td>~$1/mo cold originals</td><td>~$10/mo (20 TB ~$20), paid to the storage vendor.</td><td>Gallery on the web and on your phone. You own the objects.</td></tr>
</tbody>
</table>
</div>

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
