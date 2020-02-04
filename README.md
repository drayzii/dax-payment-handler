# Dax Payment Handler
A small payment system built with the help of [Flutterwave](www.flutterwave.com). You can test this in your HTTP client using the demo link hosted on: [https://dax-pay-demo.herokuapp.com](https://dax-pay-demo.herokuapp.com/)

## Installation 
- Clone the application and run `npm install` to install dependencies
- Run `npm run dev` to start development server

## Endpoints
| Endpoint Name     | Method    |  Category     | Endpoint             | Description |   
|--------------------|---------- | --------------|----------------------|-------------|
| Pay with credit card     | **POST**  | Credit card   | `/credit-card`  | Allows to pay via credit cards. Refer to the example payload 1 below  |
| Pay with mobile money     | **POST**  | Mobile Money   | `/mobile-money`  | Allows to pay via mobile money. Refer to the example payload 2 below  |

## Example payloads

#### Payload 1
```
{
	"keys": {
		"PUBLIC": "FLWPUBK-61714571d2fbfe1ea1407542db2b3660-X",
		"SECRET": "FLWSECK-30a9336427c7c7330eab9cc52216aa18-X"
	},
	"payload": {
		"cardno": "4556052704172643",
		"cvv": "899",
		"expirymonth": "01",
		"expiryyear": "21",
		"currency": "RWF",
		"country": "RW",
		"amount": "10000",
		"email": "jonashyaka3@gmail.com",
		"phonenumber": "+250780477291",
		"firstname": "Jonathan",
		"lastname": "Shyaka",
		"txRef": "MC-1580587639286"
	}
}
```

#### Payload 2
```
{
	"keys": {
		"PUBLIC": "FLWPUBK-61714571d2fbfe1ea1407542db2b3660-X",
		"SECRET": "FLWSECK-30a9336427c7c7330eab9cc52216aa18-X"
	},
	"payload": {
		"amount": "10000",
		"email": "jonashyaka3@gmail.com",
		"phonenumber": "+250788366152",
		"firstname": "Jonathan",
		"lastname": "Shyaka",
		"txRef": "MC-1580587639286"
	}
}
```
