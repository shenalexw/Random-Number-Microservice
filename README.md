# Random Number Microservice

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)

---

## Description

picks a random number between a min and max value

---

## How To Use

#### Installation
- Node 14.0 +

```
git clone https://github.com/shenalexw/Random-Number-Microservice.git
cd Random-Number-Microservice
npm install
npm start
```
- The service will be hosted on http://localhost:4000/
- Press ctrl+c to end hosting

## API Reference

#### HTTP URL
```
http://localhost:4000/random
```
#### Routes
```
POST /random
```

Send a POST HTTP Request to the HTTP URL with a request json body
```json
{
    "min" : 1,
    "max" : 100
}
```

Response will be in json
```json
{
    "number": 65
}
```







