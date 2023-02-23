 # Preliminary Build on Elastic Observability + Prometheus
 
  Anonymous metrics engine built on top of the Leto Caching Gateway
 
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

example of json response WIP(CURRENT FORM)
![Screenshot 2022-12-10 at 3 42 08 AM](https://user-images.githubusercontent.com/30084404/206844865-488ff7d9-969c-44fe-9671-63e6d7140b38.png)

## Usage

Leto Gateway provides IPFS path style resolutions `https://leto.gg/ipfs/{cid}` as follows:

```
> curl https://leto.gg/ipfs/bafkreidyeivj7adnnac6ljvzj2e3rd5xdw3revw4da7mx2ckrstapoupoq
Hello leto! 😎
> curl https://leto.gg/ipfs/QmT5NvUtoM5nWFfrQdVrFtvGfKFmG7AHE8P34isapyhCxX
...
```

In practice, when Leto Gateway receives a IPFS path style request, it will redirect to a subdomain style resolution maintaining compliance with the [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy). The canonical form of access `https://{CID}.ipfs.leto.gg/{optional path to resource}` causes the browser to interpret each returned file as being from a different origin.

```
> curl https://bafkreidyeivj7adnnac6ljvzj2e3rd5xdw3revw4da7mx2ckrstapoupoq.ipfs.leto.gg
Hello leto! 😎
```

Please note that subdomain resolution is only supported with [CIDv1](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) in case-insensitive encoding such as Base32 or Base36. When using IPFS path resolution, the requested CID will be converted before the redirect.


## Development Notes

 What Log Parsing Features to look for?(ingest quickly, parse quickly, get to intrepretation)
- Automation
- Customization
- Visualization

## extra notes- 


### Data-Points
- How many times an IPFS object was requested via the leto.gg Gateway?




