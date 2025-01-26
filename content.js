function applyPageFilter(type, intensity) {
  let filterStyle = document.getElementById('vision-filter-style');
  if (!filterStyle) {
    filterStyle = document.createElement('style');
    filterStyle.id = 'vision-filter-style';
    document.head.appendChild(filterStyle);
  }

  let filter = '';
  switch (type) {
    case 'protanopia':
      const protanopiaIntensity = intensity / 100;
      filter = `
        html * {
          filter: url('#protanopia-filter') !important;
          -webkit-filter: grayscale(${protanopiaIntensity}) sepia(1) saturate(3) hue-rotate(300deg) !important;
        }
      `;
      break;
    case 'deuteranopia':
      const deuteranopiaIntensity = intensity / 100;
      filter = `
        html * {
          filter: url('#deuteranopia-filter') !important;
          -webkit-filter: grayscale(${deuteranopiaIntensity}) sepia(1) saturate(3) hue-rotate(30deg) !important;
        }
      `;
      break;
    case 'tritanopia':
      const tritanopiaIntensity = intensity / 100;
      filter = `
        html * {
          filter: url('#tritanopia-filter') !important;
          -webkit-filter: grayscale(${tritanopiaIntensity}) sepia(1) saturate(3) hue-rotate(180deg) !important;
        }
      `;
      break;
    case 'blur':
      const blurAmount = (intensity / 10) + 'px';
      filter = `
        html * {
          filter: blur(${blurAmount}) !important;
        }
      `;
      break;
    case 'contrast':
      const contrastAmount = 1 + ((intensity - 50) / 50);
      filter = `
        html * {
          filter: contrast(${contrastAmount}) !important;
        }
      `;
      break;
    default:
      filter = '';
  }

  filterStyle.textContent = filter;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.enabled && request.type !== 'normal') {
    applyPageFilter(request.type, request.intensity);
  } else {
    const filterStyle = document.getElementById('vision-filter-style');
    if (filterStyle) filterStyle.textContent = '';
  }
});
