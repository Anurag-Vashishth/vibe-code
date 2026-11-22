# Pete McPherson's portfolio

A static Astro portfolio with three pages and a shared newsletter form.

## Run locally

Install [Node.js](https://nodejs.org/) using the version in `.node-version`. In this folder, run:

```sh
npm ci
npm run dev
```

Open the local URL printed in the terminal. To create and preview a production build:

```sh
npm run build
npm run preview
```

The build writes to `dist/`.

## Deploy on Cloudflare Pages

1. Push this project to a GitHub repository.
2. In Cloudflare's **Workers & Pages** dashboard, create a **Pages** project and import the GitHub repository.
3. Select the production branch. Set the build command to `npm run build` and the build output directory to `dist`. If this folder is inside a larger repository, set the root directory to `pete-portfolio`.
4. Save and deploy. Cloudflare rebuilds the site when you push to the production branch.

[Cloudflare Pages Astro deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)

## Edit the site

| Change | File or folder |
| --- | --- |
| Home hero and introduction | `src/pages/index.astro` |
| About copy, milestones, and interests | `src/pages/about.astro` |
| Projects page heading | `src/pages/projects.astro` |
| Project titles, descriptions, images, and links | `src/data/projects.js` |
| Project images and portrait | `public/images/` |
| Colors, typography, and spacing | `src/styles/global.css` |
| Fontshare font imports and sharing image | `src/components/Layout.astro` |
| Social links | `src/components/Footer.astro` |
| Newsletter copy and submission behavior | `src/components/NewsletterForm.astro` |

Add projects to the data list. The first three appear on the homepage. Set a project's `url` to its actual external address when available. To replace an image, copy the new file to `public/images/` and update its path and alt text. The current project images use an 8:5 crop. The portrait path and caption are on the About page. Add meaningful alt text when replacing it with a real portrait and remove the placeholder caption.

Once you know your production domain, set `site` in `astro.config.mjs` and rebuild. This enables canonical URLs and the sitemap, which is then referenced from `robots.txt`. To add a social sharing image, place it in `public/images/` and set `sharingImage` in the shared layout.

## Connect the newsletter later

The form validates the email and displays a setup message. The value stays in the field. To connect a provider, replace the placeholder submit handler in `NewsletterForm.astro` with the provider's supported public form endpoint or embed instructions. For a hosted form submission, add the provider's required field name and set the form action and method. For a JavaScript submission, use the existing status region to communicate the provider's actual response. Keep any secret API keys out of the browser.
