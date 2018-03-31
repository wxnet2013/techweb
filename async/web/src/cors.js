const createXHR = (method, url) => {
  let xhr = new XMLHttpRequest();
  if ('withCredentials' in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest !== 'undefined') {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
};

export const request = ({
  url,
  method = 'GET',
  timeout = 2000,
  withCredentials = true,
  customHeaders = [],
  onLoad = xhr => {},
  onTimeout = event => {},
  onError = () => {},
}) => {
  const xhr = createXHR(method, url);
  if (!xhr) throw new Error('CORS not supported');

  // with cookie
  xhr.withCredentials = withCredentials;

  // headers
  customHeaders.forEach(([header, value]) => {
    xhr.setRequestHeader(header, value);
  });

  // download progress
  xhr.onprogress =
    // upload progress
    xhr.upload.onprogress = event => {
      if (event.lengthComputable) {
        let percentComplete = event.loaded / event.total;
        // alert(percentComplete);
      }
    };

  // response
  xhr.onload = () => {
    onLoad(xhr);
  };

  // timeout
  xhr.timeout = timeout;
  xhr.ontimeout = onTimeout;

  // error handler
  xhr.onerror = onError;

  xhr.send();
};
