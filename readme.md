
 # Metrics API WIP!

![Leto-API-Flow](https://user-images.githubusercontent.com/30084404/232206623-b5c230a7-d3b6-46ea-ac9b-bc72e7539de5.png)




 
 ## Anonymous Gateway Metrics API

With a simple public website or a HTTP GET request, you can tell how many times an IPFS object was requested/served to a user.
API endpoint URL
The main public API endpoint URL for LetoMetrics is https://leto.metrics.gg. All endpoints documented should be made relative to this root URL. 
For example, to request the /cid/ endpoint, send your request to 
https://leto.metrics.gg/cid/ and leto.metrics.gg will respond with something like

 ` { "value": "/ipfs/QmPqrEHJTex2CPbqNULCmbSFJT3boBwAAfMb5UjvXtKjEe",
"requests": "93", }
`

## Leto.gg Metrics API Usage
 
 - Give the engine a CID, and it will return if it has metrics on that specific file
The response currently is in JSON format

## Usage





