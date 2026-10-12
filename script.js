'use strict';
const citations = {
  shattered: `@misc{zhao2026shatteredcompositionality,
  title = {Shattered Compositionality: Counterintuitive Learning Dynamics of Transformers for Arithmetic},
  author = {Xingyu Zhao and Darsh Sharma and Rheeya Uppaal and Yiqiao Zhong},
  year = {2026},
  eprint = {2601.22510},
  archivePrefix = {arXiv},
  primaryClass = {cs.LG},
  url = {https://arxiv.org/abs/2601.22510}
}`,
  transfer: `@misc{zhao2026crosstraittransfer,
  title = {Cross-Trait Transfer in Subliminal Learning},
  author = {Xingyu Zhao and Yiqiao Zhong},
  year = {2026},
  eprint = {2610.04260},
  archivePrefix = {arXiv},
  url = {https://arxiv.org/abs/2610.04260}
}`
};
const dialog = document.querySelector('#citation-dialog');
const citationText = document.querySelector('#citation-text');
const copyStatus = document.querySelector('#copy-status');
document.querySelectorAll('[data-citation]').forEach(button => {
  button.addEventListener('click', () => {
    citationText.textContent = citations[button.dataset.citation];
    copyStatus.textContent = '';
    dialog.showModal();
  });
});
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
document.querySelector('#copy-citation').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(citationText.textContent);
    copyStatus.textContent = 'Copied to clipboard.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citationText);
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = 'Select and copy the highlighted citation.';
  }
});
if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, {rootMargin: '-12% 0px -65% 0px'});
  ['about', 'research', 'projects', 'background'].forEach(id => observer.observe(document.getElementById(id)));
}
