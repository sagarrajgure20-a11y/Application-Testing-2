API = Application Programming Interface

Example:- 

Zomato                   - Java
Waether - api access     - Python
Google Map - api access  - C#


API's
SOAP
REST

common data exchange process = json

component - 
1. Authorization - (credential) - key (OAuth)
response - token

2. Resource or endpoint
3. Request payload process
  a - quary parameter (source and target)
      gooogle.map.com/api/distance?source=pune&target=mumbai

  b - path param
      gooogle.map.com/api/distance/pune/mumbai

  c - json payload
     {
        "source":"pune",
        "target":"mumbai"
     }

4. Method - 

   GET  - Read
   POST - Create
   PUT  - Update (To update entire resorse - to update any info, put all the info)
   PATCH  - Update (to update any info, pass only need info)
   DELETE - Delete

5. Response from API
 
        Response header -
        Response code -
           1XX - Informational
           2XX - Success, 200- Ok, 201- Created, 204- No Content
           3XX - Redirectional, 300- Moved, 302- Move Permanently
           4XX - Client side, 400- Bad Request, 401- Unathorized, 403- Forbidden, 404- Resourse not found, 405- Method not allowed, 
                 409- conflict, 429- too many request
           5XX - Server Side, 500- Internal Server Error, 503- Service not available
        Response body -
          json response for cross check 
 