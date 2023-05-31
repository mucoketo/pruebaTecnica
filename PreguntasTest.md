1. Verbosidad REST

Qué path emplearias para recuperar un mensaje con id 123124 de un usuario con id adf8789.

- /messages/?user=adf8789&id=123124
- /user/adf8789/?message=123124
- /user/adf8789/messages/123124/✅
- /messages/user/adf8789?id=123124

2. HTTP Verbs

Identify the item that is not an HTTP verb.

- GET
- POST
- DELETE
- REMOVE✅
- PUT
- PATCH

The item that is not an HTTP verb is "REMOVE."

3. Time Complexity of Searching a Linked List

What is the time complexity to find an element in a linked list of length n will be:

- O(log2n)
- O(n)✅
- O(1)
- O(n2)

4. Values in a Hash Table

In a hash table, both the keys and the values, are integers. We iterate over the key-value pairs of a hash table, and print each of the pairs of values in the format Key=a, Value=b.

Which of the following could be a valid output?

```
Key = 1, Value = 10
Key = 1, Value = 11
Key = 2, Value = 10
Key = 3, Value = 100

Key = 1, Value = 10
Key = 2, Value = 10
Key = 2, Value = 10
Key = 3, Value = 100

✅
Key = 1, Value = 10
Key = 2, Value = 10
Key = 3, Value = 10
Key = 4, Value = 10

Key = 1, Value = 1
Key = 2, Value = 2
Key = 3, Value = 3
Key = 3, Value = 4
```

5. Employees 3
   ### Lo resolvemos en archivo.
6. Rod Cutting
   ### Lo resolvemos en archivo.
7. Growth in 2 Dimensions
   ### Lo resolvemos en archivo.
8. Arquitectura Web

### La web de un cliente está formada por una base de datos (MYSQL), un backend de servicios de aplicación (JAVA -Tomcat) y un frontend (Javascript/HTML/CSS - Apache). La aplicación está alojada en un servidor local de la empresa y, debido a un incremento masivo en el número de visitas que recibe, su rendimiento se está degradando hasta el punto de que habitualmente deja de funcionar.

### Indica qué tipo de mejoras tanto a nivel de desarrollo como a nivel de sistemas llevarías a cabo para mejorar su rendimiento. Puedes utilizar cualquier tecnología que conozcas.

En primer lugar, dado que la base de datos es una base de datos MYSQL, vería se está bien diseñada. Habría que optimizar las consultas SQL: si dispone de imágenes, comprobar que están alojadas fuera de la base de datos. Crear índices para aquellos registros que más consultas reciben y optimizar el número de tablas y de columnas a las necesarias. Asimismo, la compresión de archivos, imágenes y de archivos de código puede mejorar el rendimiento.

A continuación, si no hay implementado un sistema de caché de datos, se debería implementar para reducir el nº de consultas a la base de datos.

Otra de las opciones es utilizar un CDN distribuyendo así el contenido en diferentes microservicios y así mejorar tanto la carga de la página como su latencia.

También puede deberse a que la escalabilidad del sitio web no sea el correcto y por ello no esá preparado para recibir tanto volumen de consultas. Habría que implementar una solución escalable, como la arquitectura de servicios (acorde a la opción anterior)

9. Fábrica

### Una fábrica tiene cientos de sensores que envían información a un módulo que corre en un servidor central alojado en internet. Cada vez que se produce una variación en la temperatura en algún punto de la fábrica, el sensor que monitoriza esa zona envía un mensaje con la nueva temperatura y el momento exacto del cambio.

### A veces, la conexión entre la fábrica e internet se cae y los sensores no pueden hacer llegar la información al nodo central. En otras ocasiones, las variaciones en la temperatura son tan rápidas y afectan a tantos sensores que el número de mensajes se dispara, el módulo central se satura y muchos mensajes se pierden.

### ¿Cómo solucionarías estos problemas?

Una de las posibles soluciones sería la de implementar tareas asíncronas. Dado que éstas permitan que nuestro sistema siga funcionando mientras esperamos la respuesta del servidor, no bloqueándolo hasta que procesa la respuesta actual, dejando el resto en cola.

Esa cola de mensajes es la que habría que procesar de manera asíncrona en el servidor central en lugar de directamente. Esto además permite al sistema seguir funcionando si la conexión se cae temporalmente o si, como hemos visto, los mensajes crecen en gran número.

Asimismo, podríamos implementar un mecanismo de control de flujo para indicar la cantidad de mensajes que se envían al servidor central para así, evitar la sobrecarga de este (reduciendo así el riesgo a la pérdida de mensajes).

A continuación, pongo unas soluciones más generales que podría implementar un Full Stack Developer:

- Backend robusto: Desarrollar un backend sólido y escalable que pueda gestionar la recepción y procesamiento de los mensajes de los sensores. Utilizar un lenguaje de programación adecuado y un framework robusto que permita gestionar grandes volúmenes de datos y conexiones.

- API RESTful: Diseñar una API RESTful para permitir que los sensores envíen los datos al servidor central. Definir endpoints adecuados para recibir los datos de temperatura y momento exacto del cambio.

- Gestión de conexiones: Implementar un mecanismo de gestión de conexiones en el servidor central para manejar los casos de caída de la conexión. Esto puede incluir la detección de la conexión perdida y la reconexión automática una vez que se restablezca la conexión.

- Colas de mensajes: Utilizar sistemas de colas de mensajes, como RabbitMQ o Apache Kafka, para gestionar los mensajes entrantes de los sensores. Esto permitirá manejar la alta carga de mensajes y evitar la pérdida de datos. Los mensajes se almacenarán en la cola hasta que puedan ser procesados por el servidor central.

- Almacenamiento de datos: Utilizar una base de datos adecuada para almacenar los datos de temperatura y momento exacto del cambio. Dependiendo de los requisitos y la cantidad de datos, se puede optar por una base de datos relacional o no relacional.

- Monitorización y registro: Implementar un sistema de monitorización y registro en el servidor central para detectar posibles problemas, como la saturación del servidor o la pérdida de mensajes. Esto permitirá identificar y solucionar los problemas de manera proactiva.

- Frontend de visualización: Desarrollar una interfaz de usuario amigable que permita visualizar los datos de temperatura en tiempo real y proporcionar funcionalidades de filtrado y análisis. Utilizar tecnologías web modernas, como HTML, CSS y JavaScript, junto con bibliotecas o frameworks como React o Angular.

- Autenticación y seguridad: Implementar un sistema de autenticación seguro para garantizar que solo los sensores autorizados puedan enviar los datos al servidor central. Utilizar protocolos de seguridad estándar, como HTTPS, para proteger la comunicación entre los sensores y el servidor.

10. NoSQL

### Para construir el repositorio de datos de trabajadores de una compañía. ¿Cómo reprentarías las entidades employees, departments, salaries y titles en una base de datos NoSQLorientada a Documentos (como MondoDB)? ¿Cuántas y qué colecciones crearías si lo que se quiere es tener como nivel de agregación los empleados?.

La representación de las distintas entidades se podría crear en cuatro colecciones:

1.  Employees: en esta colección tendríamos los datos de los empleados (nombre, fecha de nacimiento, dirección ...), además cada documento de la colección podría tener un department_id, salary_id y title_id. Con los que representaríamos el departamento del empleado, su salario y su título.
2.  Departments: contendría los datos de los departamentos (nombre, descripción ...) Cada documento tendría un campo department_id para identificarlo de manera única.
3.  Salaries: en esta colección tendríamos los datos del salario (cuantía, fecha de inicio y de fin de ese salario ...) Cada documento tendría un campo salary_id para identificarlo de manera única.
4.  Titles: esta colección tendría los datos de los títulos de los employees (nombre del título, fecha_inicio, fecha_fin, jerarquía ...) y cada documento tendría un campo title_id que lo identificara de manera única.

Para tener como nivel de agregación los empleados podemos tener la colección empleados como única con los campos id descritos en el punto 1; y luego usar consultas agregadas para realizar consultas o cálculos deseados.
Puede depender de la complejidad de los datos, pero dado que lo recomendable es el uso de una colección para cada tipo de entidad: creo que esta sería una buena elección dada la información de la que se dispone.
