import JSZip from 'jszip';
import toggleTheme from './dark-theme';
import { uploadFile, deleteFile } from './storage';

const darkThemeToggleBtn = document.getElementById('input-checkbox');
const fileButton = document.getElementById('file-btn');
const uploadError = document.querySelector('.upload-error-text');

async function handleFiles() {
  let uniqueId = Date.now() + Math.floor(Math.random() * 25);

  //   check file length
  if (this.files.length === 1) {
    let file = this.files[0];
    const url = await uploadFile(file, uniqueId, uploadError);
  } else {
    const zip = await zipFiles(this.files);
    const url = await uploadFile(zip, uniqueId);
  }
}

async function zipFiles(files) {
  let zip = new JSZip();

  for (let i = 0; i < files.length; i++) {
    zip.file(files[i].name, files[i]);
  }

  const res = zip.generateAsync({ type: 'blob' });
  const blob = await res;
  const newZipFile = new File([blob], 'your files.zip', {
    type: blob.type,
    lastModified: Date.now(),
  });
  return newZipFile;
}

darkThemeToggleBtn.addEventListener('change', toggleTheme);
fileButton.addEventListener('change', handleFiles);
