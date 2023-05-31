# Leto REST APIs

## Analytics

This API allows you to fetch analytics tracked by the `leto.gg` platform for the requested CIDs.

```text
POST https://api.leto.gg/analytics
```

Request Headers:

```text
Content-Type: application/json
X-Leto-Token: <access-token> (Coming soon)
```

Request Body:

```json
{
    "cids": ["string"],
    "page": "integer",
    "size": "integer"
}
```

Request Body Parameters:

- `cids` (array): An array of strings, denoting content identifiers (CIDs)
- `page` (integer): The page number of the search results
- `size` (integer): The number of results to return per page

### Fetch Analytics Example

- Request payload:

  ```json
  {
      "cids": ["bafkreiedazv25tc7idkywbco3jxrywdnb3g4ff3pqegrmshhtcpk5zgsyi", "bafkreigt25bt7a6fdnx72jhtnnoezvoihcxxlvyc6kpxkfonayxrqnpiie"],
      "page": 1,
      "size": 10
  }
  ```

- Response:

  ```json
  {
      "success": true,
      "data": {
          "metadata": [
              {
                  "total": 2,
                  "page": 1
              }
          ],
          "data": [
              {
                  "cid": "bafkreiedazv25tc7idkywbco3jxrywdnb3g4ff3pqegrmshhtcpk5zgsyi",
                  "cidType": "ipfs",
                  "lastAccessed": "2023-04-10T22:16:42.813Z",
                  "numbersAccessed": 33
              },
              {
                  "cid": "bafkreigt25bt7a6fdnx72jhtnnoezvoihcxxlvyc6kpxkfonayxrqnpiie",
                  "cidType": "ipfs",
                  "lastAccessed": "2023-04-07T09:42:14.531Z",
                  "numbersAccessed": 3
              }
          ]
      }
  }
  ```

- `success` (boolean): Indicates whether the API request was successful or not.
- `data` (object): Contains the search results.
  - `metadata` (object): Contains metadata information about the search results such as pagination information.
    - `total` (integer): The total number of results available.
    - `page` (integer): The current page number of the search results.
  - `data` (array): Contains the actual search results.
    - `cid` (string): The content identifier (CID).
    - `cidType` (string): The type of identifier, i.e. `ipfs` or `ipns`.
    - `lastAccessed` (string): Timestamp when the CID was last accessed.
    - `numbersAccessed` (integer): Number of times the CID was accessed.

**Try it!**

```bash
curl --location --request POST 'https://api.leto.gg/analytics' \
--header 'Content-Type: application/json' \
--data-raw '{
    "cids": ["bafkreiedazv25tc7idkywbco3jxrywdnb3g4ff3pqegrmshhtcpk5zgsyi", "bafkreigt25bt7a6fdnx72jhtnnoezvoihcxxlvyc6kpxkfonayxrqnpiie"],
    "page": 1,
    "size": 5
}'
```

## Error Responses

These error responses provide information about the encountered errors during the API requests and can help you identify and address the issues with the requests.

### No CIDs provided

- Request:

    ```bash
    curl --location --request POST 'https://api.leto.gg/analytics' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "cids": [],
        "page": 1,
        "size": 5
    }'
    ```

- Response:
  - Status: 400

    ```json
    {
        "success": false,
        "message": "request needs at least one CID to respond"
    }
    ```

### Invalid Page

- Request:

    ```bash
    curl --location --request POST 'https://api.leto.gg/analytics' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "cids": ["bafkreiedazv25tc7idkywbco3jxrywdnb3g4ff3pqegrmshhtcpk5zgsyi", "bafkreigt25bt7a6fdnx72jhtnnoezvoihcxxlvyc6kpxkfonayxrqnpiie"],
        "page": -1,
        "size": 5
    }'
    ```

- Response:
  - Status: 400

    ```json
    {
        "success": false,
        "message": "invalid page"
    }
    
    ```

### Invalid Size

- Request:

    ```bash
    curl --location --request POST 'https://api.leto.gg/analytics' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "cids": ["bafkreiedazv25tc7idkywbco3jxrywdnb3g4ff3pqegrmshhtcpk5zgsyi", "bafkreigt25bt7a6fdnx72jhtnnoezvoihcxxlvyc6kpxkfonayxrqnpiie"],
        "page": 1,
        "size": -1
    }'
    ```

- Response:
  - Status: 400

    ```json
    {
        "success": false,
        "message": "invalid size"
    }
    ```
