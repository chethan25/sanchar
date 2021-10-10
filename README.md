# Sanchar

Sanchar is a single page web app which can be used to share any type of files between devices using QR codes.

## How it works

* Upload the file from your file system. The file will be stored in firebase cloud storage.
* If multiple files are selected the files will be compressed into a zip file.
* A QR code is generated for each file which can be scanned to recieve the file.
* The uploaded file will be immediately deleted once the QR code is closed.

## Live Demo
https://sanchar-faf9f.web.app/

## Future work
* Add support to choose files from user's google drive and dropbox.
* Add url's directly.

## Acknowledgements
* [JSZip](https://www.npmjs.com/package/jszip) - A library for creating, reading and editing .zip files with JavaScript, with a lovely and simple API.
* [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator/tree/master/js) - A library for generating QR codes.
