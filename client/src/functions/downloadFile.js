function downloadFile(driveLink) {
    const fileId = driveLink.match(/[-\w]{25,}/);
  if (fileId) {
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId[0]}`;
    window.location.href = downloadUrl;
  } else {
    console.error('Invalid Google Drive link');
  }
}
  
export default downloadFile;