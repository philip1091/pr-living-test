var viewerResponse;

function displayWebViewerButton() {
  document.getElementById('web-viewer-button').style.display = 'block';
}

function displayWebViewer() {

  var configuration =  {};
  viewerResponse.generateWebViewer(document.getElementById('web-viewer-container'), configuration, function() {
  });

  document.getElementById('web-viewer-canvas').style.display = 'block';
}



augment.initForProduct(
  {
    gtin: {
    type: 'GTIN-13',
    value: '4054568898766'
    },
    brand: 'Restoration Hardware',
    name: 'Chair',
    identifier: '89',
    price: {
      value: 399.99,
      currency: 'EUR'
    },
    categoryPath: ['Computers', 'Laptops'],
    pageUrl: 'http://www.example.com/82.html'
  }, function(error, response) {
    if (!error) {
      if (response['product'] && response['model3d']) {
        viewerResponse = response;
        displayWebViewerButton();
      }
    }
  }
);
