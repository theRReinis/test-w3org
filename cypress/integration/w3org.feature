Feature: W3org

    Validating www.w3.org page if there is no console error, response from code and all page links go to another live page

    Scenario Outline: Validate w3org page
        Given open w3org home page with <path>
        And there is no console error
        And response code from page is <statusCode>
        When gather all links on page
        Then validate that all links do not respond with client error status code
        
        Examples:
            | path                                 | statusCode |
            | '/standards/webofdevices/multimodal' | 200        |
            | '/standards/webdesign/htmlcss'       | 200        |
            | '/standards/badpage'                 | 404        |