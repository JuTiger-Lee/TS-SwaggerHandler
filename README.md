# Ts-Swagger-Handler

## 시작

1. npm ci

### Product Mode Start

- npm run start

### Dev Mode Start

- npm run dev

## 설명

- JS 버전 Swagger-Hanlder: [JS-Swagger-Handler](https://github.com/JuTiger-Lee/JS-SwaggerHandler)

### API 주소

- /api-docs

### 핵심 파일

- handler/SwaggerHandler.ts
- controllers\apiDocs.ts

#### handler/SwaggerHandler.ts

- API 문서를 만드는 핵심 Class이다.
- 보통 Swagger API 문서를 만들 때는 .yml 으로 만들거나 .json 파일에 하나에 다 몰아서 넣게 된다.
- 위와 같은 방식은 가독성에도 별로이고 분리도 어려워지게된다.
- 그렇기 때문에 JS 코드로 API 문서를 만들기 위해 만들어진 Class 이다.
- 해당 Class는 싱글톤 패턴으로 만들어졌는데 그 이유는 "apiPaths" 라는 프로퍼티 배열이 계속해서 쌓여지게해야하기 때문이다.

#### 사용 방법

```javascript
SwaggerHandler.getSwaggerInstance().addAPI({API 문서코드})
```

#### controllers\apiDocs.ts

- 해당 파일은 없어도된다 그냥 controller 레벨에서 SwaggerHandler를 불러 addAPI 메서드로 추가를 해도 된다.
- 하지만 원하는 구조는 API 문서를 만드는 JS 코드는 따로 분리하고 그러를 하나로 모아 한번에 만들어지기 위해서 그거를 모으는 역할인 ApiDocs Class를 만들었다.
