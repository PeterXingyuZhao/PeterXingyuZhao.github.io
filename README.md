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
- `assets/b-spline-visualization.svg`: the demo's cubic preset and its four basis functions, calculated from its clamped knot vector.
- `assets/studyroom-workflow.svg`: an illustration of the booking project's implemented workflow, using fictional room data.
- `assets/arithmetic-learning-order.svg`: measured reversed-output addition curves, redrawn from Figure 1(b)'s vector plot with a comparison of carry dependencies and the observed acquisition pattern. The unchanged source plot is `assets/arithmetic-reversed-output.pdf`.
- `assets/city-transfer-network.svg`: the measured Qwen2.5-7B city-transfer network under 00–99 distribution distillation, with a compact explanation of the experiment. Data: `cross-trait-transfer/data/figures/figure2.json`, panel `qwen25_city_number_distribution`. All 30 PCA positions and all 113 entries at or above 4 centered nats are retained (86 directed arrows, 27 self-loops). Six example city labels keep the thumbnail readable. The cutoff is for display, not statistical significance; positions come from the complete transfer profiles and colors denote predefined regions.

Run `python3 -m http.server 8779` from this directory, then open http://localhost:8779/.

Keep publication statuses and the CV current. If the domain changes, update the canonical URL, Open Graph URL, Person schema URL, `robots.txt`, `sitemap.xml`, and the CV website link.

## Credits

The website content is based on Xingyu Zhao’s CV and research. The information architecture was inspired by academic websites including https://jonbarron.info/ and https://tridao.me/; the page code and styling are original. Research figures use measurements from the papers and their source code, with explanatory annotations. The downloadable arithmetic source plot is unchanged. Project illustrations are original SVG diagrams based on the projects' implementations.

The B-spline demo retains its original credits and license notices. See `demos/b-spline/README.md` and the notices in its `libs` and `vendor` directories. Third-party libraries retain their respective licenses.
