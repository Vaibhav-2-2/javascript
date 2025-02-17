/*
XMLHttpRequest (XHR) and AJAX Theory

1. Core Concepts:
---------------
AJAX (Asynchronous JavaScript and XML):
- Programming technique for dynamic web page updates
- Allows content updates without full page reloads
- XMLHttpRequest is the core object enabling AJAX

2. XMLHttpRequest States (readyState):
----------------------------------
0: UNSENT - Client created, open() not called
1: OPENED - open() called
2: HEADERS_RECEIVED - send() called, headers received
3: LOADING - Downloading response
4: DONE - Operation completed

3. Basic Implementation Examples:
-----------------------------
// GET Request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/users', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        // Handle response
    }
};
xhr.send();

// POST Request
const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(data));

4. Error Handling:
---------------
xhr.onerror = function() {
    console.error('Network error occurred');
};
xhr.ontimeout = function() {
    console.error('Request timed out');
};
xhr.onabort = function() {
    console.log('Request was aborted');
};

5. Progress Monitoring:
--------------------
xhr.upload.onprogress = function(event) {
    if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
    }
};

6. Modern Alternative - fetch():
----------------------------
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

7. Best Practices:
---------------
- Always use asynchronous requests
- Implement proper error handling
- Show loading states to users
- Handle different response types appropriately
- Consider using fetch() for modern applications
- Implement proper security measures (CORS, authentication)
- Handle network errors and timeouts
- Use appropriate content types and headers

8. Common Use Cases:
-----------------
- Form submissions without page reload
- Auto-complete/search suggestions
- Real-time data updates
- Dynamic content loading
- API interactions
- File uploads with progress monitoring

9. Security Considerations:
------------------------
- CORS (Cross-Origin Resource Sharing)
- Authentication headers
- Data validation
- XSS prevention
- CSRF protection

Example with CORS and credentials:
xhr.withCredentials = true;
xhr.setRequestHeader('Authorization', 'Bearer token');
*/


/***************************************************)))))))))))))))))))))))))))))))))
  I'll explain the theory behind XMLHttpRequest (XHR) and AJAX:
XMLHttpRequest and AJAX Overview
AJAX (Asynchronous JavaScript and XML) is a programming technique that allows web pages to update content dynamically without reloading the entire page. XMLHttpRequest is the fundamental object that makes AJAX possible.
Key Concepts:
XMLHttpRequest (XHR)
A built-in browser object that allows JavaScript to make HTTP requests to servers
Can handle various data formats (not just XML, despite the name)
Supports both synchronous and asynchronous requests (async is recommended)

XHR States (readyState):
0: UNSENT - Client created, open() not called
1: OPENED - open() called
2: HEADERS_RECEIVED - send() called, headers received
3: LOADING - Downloading response
4: DONE - Operation completed
Modern Alternatives:
fetch() API - More modern, Promise-based approach
Axios - Popular HTTP client library
jQuery.ajax() - jQuery's AJAX implementation
Benefits of AJAX:
Better user experience (no full page reloads)
Reduced server load
Asynchronous data transfer
Partial page updates

Common Use Cases:
Form submissions
Auto-complete/search suggestions
Real-time data updates
Dynamic content loading

*/