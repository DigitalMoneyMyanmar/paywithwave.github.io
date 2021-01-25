# 2. Technical Integration 

## How it works

WavePay Payment Gateway allows Merchants to accept payments through the user’s WavePay account with minimum effort and enjoy the full benefits of enhanced security and full suite of payment options. Accepting payment is easier with WavePay Payment Gateway.

Below is the state diagram that explains the flow of WavePay Payment Gateway.


## Security

Merchants who wish to have access to the API will be provided with a merchantID and Hash Secret Key. Certificates used for HTTPS endpoints for callback URL need to be from recognized Certificate Authorities (CAs), i.e., they are not self-signed and must be implemented with standard port 443.

## Hashing Algorithm

The API is using HMAC SHA256 algorithm for the hash value between messages. The hash formula for each request & response are provided below. Please note that the null values in the message will be hash as "null" String. For example - when the transactionId is null and the hash formula is (msisdn+transactionId+merchantId) - the String to be hashed would be ```9791009039nulltestmerchantID``` (```String message = "9791009039"+"null"+"testmerchnatID"```).
There are some example snippets for the hash function for the reference. 

Javascript 
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/hmac-sha256.min.js"></script>

<script>
  var hash = CryptoJS.HmacSHA256("HelloMessage", "secret-key-1234");
  document.write(hash);
</script>
```
PHP
```
<?php

$key = 'secret-key-1234';
$message = 'HelloMessage';

// to lowercase hexits
echo(hash_hmac('sha256', $message, $key));

```

## Environment

Merchants can use the testing environment to do their functional integrations. Once the integration testing in test environment is finished, the switch to our production system can be made. This means that all endpoints for both environments and the credentials must be obtained from Wave Money.

| **Environment** | **URL**                                      |
| --------------- | -------------------------------------------- |
| Testing         | https://testpayments.wavemoney.io:8107/payment |
| Production      | https://payments.wavemoney.io/payment    |

We will be providing the Client ID and Client Secret to access both environments after successful onboarding.

## Payment Request

The Header of Payment Request Header will have the following content.

| **Name**              | **Description**                                  | **Type** | **Mandatory** |
| --------------------- | ------------------------------------------------ | -------- | ------------- |
| merchant_id           | Merchant ID provided by Wave Money               | string   | Mandatory     |
| order_id              | Order ID provided by Merchant                    | string   | Mandatory     |
| merchant_reference_id | Unique ID for every transaction by Merchant      | string   | Mandatory     |
| frontend_result_url   | Merchant's Website URL                           | string   | Mandatory     |
| backend_result_url    | Merchant's Web Service callback URL              | string   | Mandatory     |
| amount                | Total Amount                                     | string   | Mandatory     |
| time_to_live_in_seconds     | Time to Live for transaction (in seconds )       | string   | Mandatory     |
| payment_description   | Payment Description to display on Payment Screen | string   | Mandatory     |
| merchant_name         | Merchant Name to display on Payment Screen       | string   | Mandatory     |
| items                 | Items to display on Payment Screen               | JSON string array| Mandatory     |
| hash                  | Needed for Hash Validation                       | string   | Mandatory     |

 