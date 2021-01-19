Esta instancia consta en ampliar la API de movies con las siguientes pautas:

El sitio deberá tener un header y un footer que se compartan a lo largo de todo el sitio. Dicho header deberá tener una navegación donde se pueda acceder a:
Home, listado de películas, listado de series, iniciar sesión, registrarse. En el caso que el usuario ya esté conectado, se deberá mostrar cerrar sesión en reemplazo de iniciar sesión y registrarse.
Las páginas que deberá tener el proyecto son las siguientes.
.Home → Deberá contener un listado de 10 películas y 10 series. Todas deberán poder ser cliqueables y dirigir al detalle correspondiente.
.Detalle de película/serie → Deberá contener título, fecha de lanzamiento y nombre del género al que pertenece.
.Listado de todas las películas → Listado completo de películas
.Listado de todas las series → Listado completo de las series
.ABM de películas/series → Los usuarios administradores deberán poder tener acceso a una vista donde poder editar o borrar una película/serie seleccionando la misma y editando los datos en un formulario.
.Crear una nueva película
.Registro de usuario
.Logueo de usuario
Todas estas vistas se podrán hacer con Bootstrap para agilizar el proceso
Deberán crear rutas de manera ordenada para cada una de las páginas mencionadas anteriormente.
Para cuando el usuario haga login, se deberá crear una sesion para guardar los datos que consideres (email, id).
De la mano del punto anterior, generar un middleware de aplicación para consultar si el usuario que está logueado es administrador o usuario normal. Dependiendo de esto, crear una variable dentro de res.locals para mostrarle al loguearse/registrarse o editar peliculas/editar series.
Generar un middleware de ruta que controle que solo el administrador pueda tener acceso al ABM de películas/series. Puede que en este caso necesites editar la tabla de users para agregar un campo que pueda permitirte establecer el tipo de usuario.