## API Contract

The frontend communicates with the competency web service running on
`http://localhost:3000`.

### GET /api/courses

Returns an array of course objects.

Example response:

```json
[
  {
    "code": "ICT461",
    "name": "Web Standards and HTTP Fundamentals"
  },
  {
    "code": "ICT462",
    "name": "Example Course"
  }
]
