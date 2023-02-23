async function handleRequest(request) {
  // Get the requested IPFS hash from the URL
  let hash = request.url.split('/')[1]

  // Fetch the content from the web3.storages HTTP client
  let url = `https://web3.storages.cdn/ipfs/${hash}`
  const response = await fetch(url)
  const file = await response.text()

  // Serve the content to the user
  return new Response(file, { headers: { 'content-type': 'text/html' } })
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
