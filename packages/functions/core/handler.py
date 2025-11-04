import json
import requests
from requests.exceptions import RequestException, Timeout

def main(event, context):
    """
    AWS Lambda handler function. SST's config will point to 'handler.main'.
    """
    try:
        print(f"Lambda invoked with event: {json.dumps(event)}")
        print(f"Remaining time: {context.getRemainingTimeInMillis()}ms")
        
        # Make external API call with timeout
        response = requests.get('https://httpbin.org/get', timeout=10)
        response.raise_for_status()
        
        print("Hello from Python Lambda!")
        print(f"External API call successful: {response.status_code}")
        
        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps({
                "message": "Hello from Python Lambda!",
                "external_call_status": response.status_code,
                "timestamp": context.awsRequestId
            })
        }
        
    except Timeout as e:
        print(f"Timeout error: {str(e)}")
        return {
            "statusCode": 408,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps({
                "error": "Request timeout",
                "message": str(e)
            })
        }
        
    except RequestException as e:
        print(f"Request error: {str(e)}")
        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps({
                "error": "External API error",
                "message": str(e)
            })
        }
        
    except Exception as e:
        print(f"Unexpected error: {str(e)}")
        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps({
                "error": "Internal server error",
                "message": str(e)
            })
        }