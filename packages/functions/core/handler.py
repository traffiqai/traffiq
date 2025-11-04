import json
import requests

def main(event, context):
    """
    AWS Lambda handler function. SST's config will point to 'handler.main'.
    """
    response = requests.get('https://httpbin.org/get')
    
    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": "Hello from Python Lambda!",
            "external_call_status": response.status_code
        })
    }