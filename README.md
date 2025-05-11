# backendProyecto7FullStack

## Estructura del Proyecto

```bash
react-context/
├── node_modules/
├── public/
├── src/
│   ├── config/
│   │   ├── db.config.js
│   │   ├── envs.config.js
│   │   └── mercadoPago.config.js
│   │   
│   ├── coontrollers/
│   │   ├── auth.controller.js
│   │   ├── libros/controller.js
│   │   └── payment.controller.js
│   │   
│   ├── Error/
│   │   ├── CustomError.js
│   │   └── TypeError.js    
│   │   
│   ├── middlewares/ 
│   │   ├── auth.middleware.js
│   │   ├── errorhandler.js
│   │   ├── uploadFile.middleware.js
│   │   └── verifyAdmin.middleware.js
│   │
│   ├── model/
│   │   ├── Libro.models.js
│   │   └── Usuario.model.js
│   │
│   ├── routers/ 
│   │   ├── auth.routes.js
│   │   ├── index.routes.js
│   │   ├── libros.routes.js
│   │   └── payments.routes.js
│   │      
│   ├── services/
│   │   ├── db
│   │   │   └── updateDocs.js
│   │   ├── files
│   │   │   └── multerConfig.js
│   │   ├── payments
│   │   │   └── mercadopago.service.js
│   │   ├── auth.srvice.js
│   │   └── libros.service.js
│   │ 
│   ├── utils/
│   │   └── db
│   │       ├── formateUserCreate.js
│   │       ├── hashPassword.js
│   │       ├── validateLibroCrate.js
│   │       └── validateLibroUpdate.js
│   │        
│   └──server.js
│  
├── .enve.templete
├── .gitignore
├── eslint.config.js
├── package-lock.json
├── package.json
└── README.md


```
