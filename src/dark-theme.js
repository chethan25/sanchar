export default function toggleTheme() {
  const body = document.body;
  const layoutHeader = document.getElementById('layout-header');
  const logoText = document.getElementById('logo-text');
  const uploadFilesTitle = document.getElementById('upload-files-title-text');
  const driveBtn = document.querySelector('.drive-btn');
  const dropBoxBtn = document.querySelector('.dropbox-btn');
  const urlBtn = document.querySelector('.url-btn');
  const layoutFooter = document.getElementById('layout-footer');
  const githubLink = document.getElementById('github-link');
  const qrcodeLayoutTitle = document.querySelector('.layout-qr-code-title');
  const qrcodeLayoutContainer = document.querySelector(
    '.layout-qr-code-container'
  );
  const closeBtn = document.getElementById('close-btn');
  const btnContainer = document.querySelector('.btn-container');

  body.classList.toggle('body-dark-theme');
  logoText.classList.toggle('logo-text-dark-theme');
  layoutHeader.classList.toggle('layout-header-dark-theme');
  uploadFilesTitle.classList.toggle('upload-files-title-text-dark-theme');
  driveBtn.classList.toggle('drive-btn-dark-theme');
  dropBoxBtn.classList.toggle('dropbox-btn-dark-theme');
  urlBtn.classList.toggle('url-btn-dark-theme');
  layoutFooter.classList.toggle('layout-footer-dark-theme');
  githubLink.classList.toggle('github-link-dark-theme');
  qrcodeLayoutTitle.classList.toggle('layout-qr-code-title-dark-theme');
  qrcodeLayoutContainer.classList.toggle('layout-qr-code-container-dark-theme');
  closeBtn.classList.toggle('close-btn-dark-theme');
  btnContainer.classList.toggle('btn-container-dark-theme');
}
