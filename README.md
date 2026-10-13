# Xingyu Zhao — Academic website

Personal academic website for Xingyu Zhao: https://peterxingyuzhao.github.io/

This repository is ready for GitHub Pages. It uses static HTML, CSS, and JavaScript with no build step.

## Deploy

1. Create the public repository `PeterXingyuZhao/PeterXingyuZhao.github.io`.
2. Commit these files to the `main` branch, with `index.html` at the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**, then **main** and **/(root)**, and save.
4. After GitHub finishes deployment, visit https://peterxingyuzhao.github.io/.

The `.nojekyll` file tells GitHub Pages to serve the static files directly.

## Edit and preview

- `index.html`: biography, publications, projects, education, and links.
- `styles.css`: responsive layout and typography.
- `script.js`: citation dialogs and navigation.
- `assets/Xingyu_Zhao_CV.pdf`: downloadable CV with the GitHub Pages website link.
- `assets/xingyu-zhao-web.jpg`: single-frame sRGB JPEG for the portrait (1600×1200). Use this web export instead of the full-resolution Apple multi-picture original, `assets/xingyu-zhao.jpg`.
- `demos/b-spline/`: interactive course project, including source credits and license notices.

Run `python3 -m http.server 8779` from this directory, then open http://localhost:8779/.

Keep publication statuses and the CV current. If the domain changes, update the canonical URL, Open Graph URL, Person schema URL, `robots.txt`, `sitemap.xml`, and the CV website link.

## Credits

The website content is based on Xingyu Zhao’s CV and research. The information architecture was inspired by academic websites including https://jonbarron.info/ and https://tridao.me/; the page code and styling are original. The arithmetic learning image is an unchanged export of a figure from *Shattered Compositionality*. The other research and project illustrations are original conceptual SVG diagrams.

The B-spline demo retains its original credits and license notices. See `demos/b-spline/README.md` and the notices in its `libs` and `vendor` directories. Third-party libraries retain their respective licenses.
