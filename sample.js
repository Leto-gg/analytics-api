const express = require('express')
const res = require('express/lib/response')
const app = express()

const port = 2222

// currently configured for leto.gg/metrics - This is a sample response

const cid = [
    { bafy: "Qmb9en2Qsh3fKsXPCCT8CMhsh6g69rkgMXpE3AsL89WU9m", requests: "222" },
    { bafy: "QmY3h7XrLFSFWwcdLDAXU6X5Cbv3jMRLyK42inuBSQGrJS", requests: "22" },
    { bafy: "QmVYD1TBRWJDbay7ynn4SjZjGXzFMKdgyzWyDYdh8cNbyX", requests: "2" },
]

// Sample of a Gateway API

app.get("/", (req, res) => {
    res.json(cid)
})

// This is the IPFS cid/bafy handler for the anon metrics API
app.get("/metrics/:cid", (req, res) => {
    res.json(dogs[parseInt(req.params.id) - 1])
})

// dont do anything with this- its important
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

// HTTP => POST, GET, PUT/PATCH, 

// work more on the request and response