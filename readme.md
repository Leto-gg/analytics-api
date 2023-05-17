
 # Metrics API WIP!


![Leto-API-Flow](https://user-images.githubusercontent.com/30084404/232287746-9205c249-24fa-4bde-92fb-30c828dac0d3.png)




## Leto Metrics API

With a simple public website or a HTTP GET request, you can tell how many times an IPFS object was requested/served to a user.

- API is deployed at https://api.leto.gg/analytics (POST request with pagination support)

- Provide at least one cid to the api for it to work.

- Default CIDs size limit is 10, max is 50 CIDs per request (for now, can be changed if required).

Sample JSON Requests are as follows: 	

No Pagination- {
  "cids": [
    "bafkreiedazv25tc7idkywbco3jxrywdnb3g4ff3pqegrmshhtcpk5zgsyi",
    "bafkreigt25bt7a6fdnx72jhtnnoezvoihcxxlvyc6kpxkfonayxrqnpiie"
  ]
}


With Pagination-
{
  "cids": [
    "bafkreiedazv25tc7idkywbco3jxrywdnb3g4ff3pqegrmshhtcpk5zgsyi",
    "bafkreigt25bt7a6fdnx72jhtnnoezvoihcxxlvyc6kpxkfonayxrqnpiie"
  ],
  "page": 1,
  "size": 5
}

Make the request to https://api.leto.gg/analytics 




