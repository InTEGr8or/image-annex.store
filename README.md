# image-annex.store

Eleventy landing page for Image Annex. GitHub Pages, custom domain.

## Namecheap

Do **not** add A/CNAME host records at Namecheap. Delegate the zone to Route53
(the public hosted zone already exists in AWS profile `mark`):

**Domain → Nameservers → Custom DNS**

- `ns-204.awsdns-25.com`
- `ns-692.awsdns-22.net`
- `ns-1050.awsdns-03.org`
- `ns-1901.awsdns-45.co.uk`

GitHub Pages A/AAAA records for the apex live in that Route53 zone (not at
Namecheap). SES/CDK will use the same zone later.

## Local

```bash
npm ci
npm run serve
```
