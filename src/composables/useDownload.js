export function useDownload() {
    function createBlobByResponse({ request, data }) {
      return "createBlobByResponse"
    }
  
    function createFileByResponse({ request, data }) {
        return "createFileByResponse"
    }

    /**
     * Saves a given Blob response on the client-side
     * @param {string} response
     * @function saveBlob
     */
    function saveBlob(response) {
    }
  
    /**
     * Displays the given Blob response
     * @param {string} response
     * @function openBlob
     */
    function openBlob(response) {
        return "openBlob"
    }
  
    /**
     * Downloads a blob from the given url param
     * @param {string} url
     * @function downloadBlob
     */
    function downloadBlob(url) {
        return "downloadBlob"
    }
  
    return {
      downloadBlob,
      saveBlob,
      openBlob
    }
  }