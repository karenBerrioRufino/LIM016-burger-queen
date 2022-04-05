# Burger House

## Índice

* [1. DEFINICIÓN DEL PRODUCTO](#1-DEFINICIÓN-DEL-PRODUCTO)
* [2. HISTORIAS DE USUARIO](#2-HISTORIAS-DE-USUARIO)
* [3. PROTOTIPO DE ALTA FIDELIDAD](#3-PROTOTIPO-DE-ALTA-FIDELIDAD)
* [4. HERRAMIENTAS](#4-HERRAMIENTAS)
* [5. CHECKLIST](#5-CHECKLIST)
* [6. AUTORAS](#6-AUTORAS)


## 1. DEFINICIÓN DE PRODUCTO 📝

El proyecto consiste en la creación de una app para el manejo de las órdenes en un restaurante. Esta idea surge de la necesidad de mejorar la atención a los clientes.

El app tiene un login que identifica el tipo de rol del usuario que son tres: el mesero, el cocinero y el administrador. Cada uno con diferentes accesos.

El mesero puede seleccionar los pedidos de una carta para luego visualizarlos en una siguiente vista donde podrá eliminar algún pedido, aumentar la cantidad por pedido, poner el nombre del cliente, y seleccionar la mesa. Además, se puede ver datos como la fecha y la hora, el subtotal por pedido y el total de todo. Una vez que se envía la orden, se muestra en una ventana compartida un boton verde que le va a indicar al cocinero que puede comenzar a preparar la orden.

Cuando el cocinero vea el boton verde podrá ver la orden donde cada pedido tendrá un círculo anaranjado que se irá cambiando a verde cada vez que el cocinero lo termine de preparar. Además, habrá un cronómetro que al enviar la orden completa va a mostrar el tiempo que el cocinero se demoró cocinando y en la ventana compartida el mesero podrá ver que la orden lista para ser recogida.

El mesero recoge la orden, la entrega y recibe el pago. 

## 2. HISTORIAS DE USUARIO 📚

¿Quiénes son los principales usuarios de producto?

- Mesero
- Cocinero
- Administrador

¿Cuáles son los objetivos de estos usuarios en relación con el producto?

- Tomar la orden completa sin perder información.
- Preparar cada pedido de la orden.
- Contar el tiempo de preparación de la orden.
- Interactuar con el usuario.
- Tener un historial.

¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

- Que nuestro usuario pueda tomar la orden de los clientes de forma rápida y sin perder información.
- Que la app les muestre al mesero y al cocinero lo que está pasando en tiempo real para que su trabajo no tenga tiempos de pérdida.

  
## 3. PROTOTIPO DE ALTA FIDELIDAD ⬆️
 
   ##  📓 TABLET
   
   ![image](https://user-images.githubusercontent.com/91863929/161681843-d8476d62-0872-4170-847b-2817b4ca8a91.png)
   ![image](https://user-images.githubusercontent.com/91863929/161681878-eefcf0fc-053f-4489-88ea-e7bf5367e2db.png)
   ![image](https://user-images.githubusercontent.com/91863929/161682193-d585de5e-c4bf-431a-ab73-8a95ca83581c.png)
   ![image](https://user-images.githubusercontent.com/91863929/161682334-031ec9a2-a0a6-4e12-9e2c-f0ed1039d3aa.png)
   ![image](https://user-images.githubusercontent.com/91863929/161682417-3c20c22f-d2ec-4033-a86a-213290af3bfe.png)
   ![image](https://user-images.githubusercontent.com/91863929/161682562-130f86a2-6723-4b50-9942-6011a2941b09.png)
   ![image](https://user-images.githubusercontent.com/91863929/161682615-be8a0ee6-94ea-44fd-9610-39114ed5f32b.png)
   
## 4. HERRAMIENTAS 🛠️

  📌 GitBash
  
  📌 GitHub
  
  📌 Firebase
  
  📌 Figma
  
  📌 TypeScript
  
  📌 Saas
  
  📌 Angular
  
  📌 Karma
  
  📌 Jasmine
  
  📌 Netlify
  
  ## 5. CHECKLIST ☑️	
  
  ✔️ La aplicación es una Single Page Application (SPA)
  
  ✔️ Incluye _Definición del producto_ clara e informativa.
  
  ✔️ Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad).
  
  ✔️ Alterar y persistir datos usando firestore.
  
  ✔️ Sign in y Sign up con firebase.
  
  ✔️ Autenticación con cuenta de correo y contraseña.
  
  ✔️ Solamente se permite el acceso a usuarios con cuentas válidas.
  
  ✔️ No puede haber usuarios repetidos.
  
  ✔️ Lo que se escriba en el campo de contraseña debe ser secreto si el usuario lo desea.
  
  ✔️ Se puede recuperar la contraseña
  
  ✔️ La app interactúa constantemente con el usuario a través de mensajes.
  
  ✔️ El usuario con el rol de mesero puede escoger los productos de la carta para luego visualizarlos y poder aumentar la cantidad e incluso eliminarlos para que después el cocinero lo pueda ver y comience con la preparación de la orden. 
  
  ✔️ El usuario con el rol de cocinero puede ver la orden que manda el mesero y revisar el pedido para prepararlo. Finalmente, avisa a traves de una ventana conmpartida con el cocinero que ya puede entregar el pedido al cliente.
  
  ✔️ El mesero entrega el pedido y recibe el pago del cliente.
  
  ✔️ El usuario con el rol de administrador puede ver todas las ventanas y la información con las que interactúan el mesero y el cocinero.
  
  ## 6. AUTORAS ♀️

  📌 Andrea Henostroza
  
  📌 Kaly Zulema Cristóbal Alcántara

  📌 Karen Berrio Rufino
