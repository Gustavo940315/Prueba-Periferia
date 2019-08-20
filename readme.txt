Para poder ejecutar la aplicacion se requiere:

	1. Ajustar el properties para apuntar a la base de datos teniendo presente el usuario y contraseña:
		- spring.datasource.username=root
		- spring.datasource.password=940315

	2. Se utilizo Ionic 4 para desarrollar la aplicaicon.

	3. Antes de complilar el proyecto en Ionic se deben ingresar por la consola las siguientes lineas:
		- npm install	
		- ionic cordova plugin add cordova-sqlite-storage
		- npm install --save @ionic/storage

	4. En el documento ddl.txt se encuentra el Query para crear la base de datos.