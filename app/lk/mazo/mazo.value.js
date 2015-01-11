// disparadores.value.js
(function() {
	'use strict';

	angular
		.module('lkCanvas')
		.value( 'Mazo', new Mazo());

	function Componente (nombre, descripcion, imagen) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.imagen = imagen;
		this.activo = null;
		this.seleccionado = false;
	}

	function Disparador (nombre, descripcion, imagen) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.imagen = imagen;
		this.activo = null;
		this.seleccionado = false;
	}

	function Mecanica (nombre, descripcion, imagen, motivadores) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.imagen = imagen;
		this.activo = false;
		this.seleccionado = false;
		this.ref = motivadores;
		this.motivadores = [];
		// console.log("pongo", nombre, motivadores)
	}

	function Motivador (nombre, descripcion, imagen) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.imagen = imagen;
		this.activo = null;
		this.seleccionado = false;
	}

	function Mazo() {
		var mazos = this;
		mazos.disparadores = {
			nombre: 'Disparadores',
			imagen: 'disparador',
			cartas: [
				new Disparador( 'Desafío', 'Propón retos interesantes. Proporcionados a las habilidades físicas y coginitivas de tus alumnos, y alineados con los objetivos.', 'desafio'),
				new Disparador( 'Sensación física',	'Permíteles experimentar con sus sentidos. Efectos visuales muy atractivos, acciones que impliquen movimiento.', 'fisica'),
				new Disparador( 'Obstaculos', 'Crea diferentes restricciones que reten al alumno', 'obstaculos'),
				new Disparador( 'Fantasia','Estimula la atención con la creación de elementos y mundos imaginarios.', 'fantasia'),
				new Disparador( 'Expresión', 'Déjales expresarse creando, diseñando, personalizando...', 'expresion'),
				new Disparador( 'Descubrimiento', 'Permite a los alumnos que son más exploradores poder buscar y encontrar cosas nuevas.', 'descubrimiento'),
				new Disparador( 'Social', 'La posibilidad de crear equipos, cooperar, actuar en comunidad.', 'social'),
				new Disparador( 'Narrativa','A los alumnos les atraen poderosamenta las historias. Permíteles que experimenten el desarrollo de una historia.', 'narrativa')
		]}
		mazos.motivadores = {
			nombre: 'Motivadores',
			imagen: 'motivador',
			cartas: [
				new Motivador( 'Aceptación', 'Esta carta sirve para fijar un tipo de recompensa que permita al alumno sentirse aprobado', 'aceptacion'),
				new Motivador( 'Actividad Física', 'Utiliza esta carta si tus alumnos van a tener que ejercitar sus músculos durante la experiencia.', 'actividad'),
				new Motivador( 'Ahorrar', 'Utiliza esta carta cuando quiera que el alumno coleccione una serie de item que irá consiguiendo con su progreso en la experiencia.', 'ahorrar'),
				//new Motivador( 'Coleccionar', 'Utiliza esta carta cuando quiera que el alumno coleccione una serie de item que irá consiguiendo con su progreso en la experiencia.'),
				new Motivador( 'Contacto social', 'Esta carta hace es usada cuando tu experiencia permite compartir y relacionarse con otros compañeros', 'contacto'),
				new Motivador( 'Curiosidad', 'Utiliza esta carta para que tus alumnos vayan descubriendo nuevos contenidos', 'curiosidad'),
				new Motivador( 'Idealismo', 'Cuando usas esta causa tu experiencia esta relacionada con hacer del mundo un lugar mejor', 'idealismo'),
				new Motivador( 'Independencia', 'El uso de esta carta hace que esta experiencia permita a los alumnos ser autonomos', 'independencia'),
				new Motivador( 'Justicia', 'Tus alumnos podrán hacer justicia con alguna causa.', 'justicia'),
				new Motivador( 'Orden', 'Esta carta permite que en nuestra experiencia el alumno puede ordenar y organizar.', 'orden'),
				new Motivador( 'Poder', 'Con esta carta nuestra experiencia permite que nuestros alumnos puedan liderar', 'poder'),
				new Motivador( 'Posición social', 'Usar esta carta hace de tu experiencia un lugar donde se puede destacar socialmente', 'posicion'),
				new Motivador( 'Seguridad', 'Usar esta carta hace de nuestra experiencia un entorno de tranquilidad y seguridad', 'seguridad'),
		]}
		mazos.mecanicas = {
			nombre: 'Mecanicas',
			imagen: 'mecanica',
			cartas: [
				new Mecanica( 'Dominar habilidades','1', 'dominar', ['Poder', 'Independencia', 'Actividad Física']),
				// new Mecanica( 'Ser un villano', '2', ['Poder', 'Independencia', 'Venganza']),
				new Mecanica( 'Encontrar tesoros', '2',	'tesoros', ['Poder', 'Ahorrar', 'Posición social']),
				new Mecanica( 'Ser un rebelde', '3', 'rebelde', ['Poder', 'Independencia', 'Idealismo', 'Contacto social', 'Posición social', 'Justicia']),
				new Mecanica( 'Triunfar en conflictos', '4', 'conflictos', ['Poder', 'Justicia']),
				new Mecanica( 'Completar cosas', '5','completar', ['Poder', 'Independencia', 'Orden', 'Seguridad']),
				new Mecanica( 'Ser un sabio', '6', 'sabio', ['Poder', 'Independencia', 'Aceptación', 'Ahorrar', 'Posición social']),
				new Mecanica( 'Personalizar mundos', '7', 'personalizar', ['Independencia', 'Contacto social', 'Posición social']),
				new Mecanica( 'Ser el centro de atención', '8', 'centro', ['Poder', 'Posición social']),
				new Mecanica( 'Hacer regalos', '9', 'regalos', ['Aceptación']),
				new Mecanica( 'Analizar', '10', 'analizar', ['Curiosidad', 'Orden']),
				new Mecanica( 'Contar historias', '11', 'contar', ['Poder', 'Aceptación', 'Posición social']),
				new Mecanica( 'Iluminación', '12', 'iluminacion', ['Curiosidad', 'Independencia', 'Seguridad']),
				new Mecanica( 'Tener contactos', '13', 'contactos', ['Aceptación', 'Contacto social']),
				new Mecanica( 'Fortalecer relaciones', '14', 'relaciones', ['Contacto social']),
				new Mecanica( 'Escuchar historias', '15', 'escuchar', ['Curiosidad', 'Contacto social']),
				new Mecanica( 'Ser reconocido', '16', 'reconocido', ['Aceptación', 'Contacto social', 'Posición social']),
				new Mecanica( 'Adquirir conocimientos', '17', 'conocimientos', ['Curiosidad', 'Contacto social', 'Posición social']),
				new Mecanica( 'Coleccionar', '18', 'coleccionar', ['Poder', 'Orden', 'Posición social']),
				new Mecanica( 'Vivir una fantasía', '19', 'fantasia', ['Curiosidad', 'Idealismo', 'Seguridad']),
				new Mecanica( 'Organizar grupos de personas', '20', 'organizar', ['Orden', 'Contacto social', 'Posición social']),
				new Mecanica( 'Competir', '21', 'competir', ['Poder', 'Posición social', 'Justicia', 'Actividad Física']),
				new Mecanica( 'Explorar el mundo', '22', 'explorar', ['Curiosidad', 'Independencia']),
				new Mecanica( 'Identificar patrones', '23', 'patrones', ['Curiosidad', 'Orden']),
				new Mecanica( 'Misterio', '24', 'misterio', ['Curiosidad']),
				new Mecanica( 'Mejorar la sociedad', '25', 'sociedad', ['Idealismo', 'Posición social']),
				new Mecanica( 'Relajarse', '26', 'relajarse', ['Seguridad']),
				new Mecanica( 'Asustarse', '27', 'asustarse', ['Actividad Física']),
				new Mecanica( 'Crear orden del caos', '28', 'orden', ['Orden', 'Seguridad']),
				new Mecanica( 'Hacer tonterías', '29', 'tonterias', ['Orden', 'Seguridad']),
				new Mecanica( 'Ser un heroe', '30', 'heroe', ['Poder', 'Independencia', 'Ahorrar', 'Idealismo', 'Contacto social', 'Posición social', 'Justicia']),
				new Mecanica( 'Hacer justicia', '31', 'justicia', ['Poder', 'Justicia']),
				new Mecanica( 'Mejorar la salud', '32', 'salud', ['Actividad Física'])
		]}
		mazos.componentes = {
			nombre: 'Componentes',
			imagen: 'componente',
			cartas: [
				new Componente( 'Avatares', 'Representación visual del alumno', 'avatares'),
				new Componente( 'Barras de progreso', 'Representación del estado actual de diferentes acciones, niveles, retos, vida, etc', 'progreso'),
				new Componente( 'Bienes virtuales', 'Activos del juego con un valor virtual', 'virtuales'),
				new Componente( 'Colecciones', 'Elementos a acumular', 'colecciones'),
				new Componente( 'Cuenta atrás', 'Cuenta atrás para realizar cierta acciones', 'cuenta'),
				new Componente( 'Desbloqueo de contenido', 'Aspectos que solo estan disponibles cuando los alumnos alcanzan ciertos objetivos', 'desbloqueo'),
				new Componente( 'Equipos', 'Grupo definido de alumnos que trabaja conjuntamente', 'equipos'),
				new Componente( 'Logros', 'Objetivos definidos', 'logros'),
				new Componente( 'Medallas', 'Representación visual de los logros', 'medallas'),
				new Componente( 'Mercado', 'Sitio donde se pueden intercambiar los bienes por recompensas', 'mercado'),
				new Componente( 'Misiones epicas', 'Desafíos muy complicado al final', 'epica'),
				new Componente( 'Misiones', 'Desafíos predefinidos con objetivos y recompensas', 'mision'),
				new Componente( 'Niveles', 'Pasos definidos en la progresión de un jugador', 'niveles'),
				new Componente( 'Puntos', 'Representación numerica de la progresión dentro del juego', 'puntos'),
				new Componente( 'Ranking sociales', 'Posición de los alumnos en relación a la participación social', 'social'),
				new Componente( 'Ranking', 'Clasificación acorde a una puntuación o valor', 'ranking'),
				new Componente( 'Recompensas', 'Acciones que se consiguen al intercambiar bienes y ayudan al progreso', 'recompensas'),
				new Componente( 'Roles', 'Permite que existan diferentes personajes con distintas acciones y que tus alumos puedan decidir que rol desempeñan', 'roles'),
				new Componente( 'Tesoros escondidos', 'Recompensa obtenidad por exploración o por azar.', 'tesoros'),
				new Componente( 'Vidas', 'Salud virtual del alumno', 'vida')
		]}

		for( var i in mazos.mecanicas.cartas) {
			var motivadores = [];
			var descripcion = false;
			// Para cada una de las refs. a motivador en la mecánica
			for( var j in mazos.mecanicas.cartas[i].ref) {
				var encontrado = false;
				// Busca el motivador con nombre como ref.
				for( var x in mazos.motivadores.cartas) {
					// si existe una referencia entre el motivador y la mecánica
					if( mazos.mecanicas.cartas[i].ref[j] === mazos.motivadores.cartas[x].nombre) {
						encontrado = x;
						break;
					}
				}
				if (! encontrado) {
					console.log("No encuentro motivador", mazos.mecanicas.cartas[i].nombre, mazos.mecanicas.cartas[i].ref[j]);	
				} else {
					// Añade él motivador a la lista de motivadores de la mecánica
					motivadores.push( mazos.motivadores.cartas[x]);
					// Añade el nombre del motivador a la descripción de la mecánica
					if( !descripcion) {
						descripcion = '';
					} else {
						descripcion += ', '
					}
					descripcion += mazos.motivadores.cartas[x].nombre;
				}
				
			}
			mazos.mecanicas.cartas[i].motivadores = motivadores;
			mazos.mecanicas.cartas[i].descripcion = descripcion;
			//console.log("-->", mazos.mecanicas.cartas[i])
		}
	}
})();	