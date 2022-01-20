Feature: W3org

    Validating www.w3.org page if there is no console error, response from code and all page links go to another live page

    Scenario Outline: Validate w3org page
        Given open w3org home page with <path>

    Examples:
        | path                                |
        | 'standards/webofdevices/multimodal' |
        | 'standards/webdesign/htmlcss'       |
        | 'standards/badpage'                 |