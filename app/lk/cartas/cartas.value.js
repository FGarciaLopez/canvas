// disparadores.value.js
(function() {
	'use strict';

	angular
		.module('lkCanvas')
		.value( 'Cartas', new Cartas());

	function Disparador (nombre, descripcion, imagen) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.imagen = imagen;
		this.activo = null;
		this.seleccionado = true;
	}

	function Motivador (nombre, descripcion, imagen) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.imagen = imagen;
		this.activo = null;
		this.seleccionado = null;
		this.mecanicas = [];
	}

	function Mecanica (nombre, descripcion, imagen, motivadores) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.imagen = imagen;
		this.activo = null;
		this.seleccionado = null;
		this.motivadores = motivadores;
		this.algunMotivadorSeleccionado = algunMotivadorSeleccionado;
	}

	function algunMotivadorSeleccionado() {
		for (var i in this.motivadores) {
			if( this.motivadores[i].seleccionado)
				return true;
		}
		return false
	}
	function Componente (nombre, descripcion, imagen) {
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.imagen = imagen;
		this.activo = null;
		this.seleccionado = null;
	}

	function Cartas() {
		this.dis
		this.disparadores = {
			nombre: 'Disparadores',
			imagen: 'disparador',
			cartas: [
				new Disparador( 'Desafío', 'Propón retos interesantes. Proporcionados a las habilidades físicas y coginitivas de tus alumnos, y alineados con los objetivos.', 'desafio'),
				new Disparador( 'Sensación física',	'Permite a tus alumnos que experimente con sus sentidos. Efectos visuales muy atractivos, acciones que impliquen movimiento.', 'fisica'),
				new Disparador( 'Obstaculos', 'Crea diferentes resticciones que reten al alumno', 'obstaculos'),
				new Disparador( 'Fantasia','Estimula la atención con la creación de elementos y mundos imaginarios.', 'fantasia'),
				new Disparador( 'Expresión', 'Permite a tus alumnos que puedan expresarse creando, diseñando, personalizando etc.', 'expresion'),
				new Disparador( 'Descubrimiento', 'Permite a los alumnos que son más exploradores poder buscar y encontrar cosas nuevas.', 'descubrimiento'),
				new Disparador( 'Social', 'La posibilidad de crear equipos, cooperar, actuar en comunidad.', 'social'),
				new Disparador( 'Narrativa','A los alumnos les atraen poderosamenta las historias. Permite a tus alumnos que puedan experimentar el desarrollo de una historia.', 'narrativa')
		]}
		this.motivadores = {
			nombre: 'Motivadores',
			imagen: 'motivador',
			cartas: [
				new Motivador( 'Aceptación', 'Esta carta sirve para fijar un tipo de recompensa que permita al alumno sentirse aprobado', 'aceptacion'),
				new Motivador( 'Actividad Física', 'Utiliza esta carta si tus alumnos van a tener que ejercitar sus musculos durante la experiencia.', 'actividad'),
				//new Motivador( 'Coleccionar', 'Utiliza esta carta cuando quiera que el alumno coleccione una serie de item que ira consiguiendo con su progreso en la experiencia.'),
				new Motivador( 'Contacto social', 'Esta carta hace es usada cuando tu experiencia permite compartir y relacionarse con otros compañeros', 'contacto'),
				new Motivador( 'Curiosidad', 'Utiliza esta carta para que tus alumnos vayan descubriendo nuevos contenidos', 'curiosidad'),
				new Motivador( 'Idealismo', 'Cuando usas esta causa tu experiencia esta relacionada con hacer del mundo un lugar mejor', 'idealismo'),
				new Motivador( 'Independencia', 'El uso de esta carta hace que esta experiencia permita a los alumnos ser autonomos', 'independencia'),
				new Motivador( 'Justicia', 'Esta carta es utilizada para permitir que tus alumnos puedan hacer justicia con alguna causa.', 'justicia'),
				new Motivador( 'Orden', 'Esta carta permite que en nuestra experiencia el alumno puede ordenar y organizar.', 'orden'),
				new Motivador( 'Poder', 'Con esta carta nuestra experiencia permite que nuestros alumnos puedan liderar', 'poder'),
				new Motivador( 'Posición social', 'Usar esta carta hace de tu experiencia un lugar donde se puede destacar socialmente', 'posicion'),
				new Motivador( 'Seguridad', 'Usar esta carta hace de nuestra experiencia un entorno de tranquilidad y seguridad', 'seguridad'),
		]}
		this.mecanicas = {
			nombre: 'Mecanicas',
			imagen: 'mecanica',
			cartas: [
				new Mecanica( 'Dominar habilidades','1', ['Poder', 'Independencia', 'Actividad Física']),
				new Mecanica( 'Ser un villano', '2', ['Poder', 'Independencia', 'Venganza']),
				new Mecanica( 'Encontrar tesoros', '3',	['Poder', 'Ahorro', 'Posición social']),
				new Mecanica( 'Ser un revelde', '4', ['Poder', 'Independencia', 'Idealismo', 'Contacto social', 'Posición social', 'Justicia']),
				new Mecanica( 'Triunfar en conflictos', '5', ['Poder', 'Justicia']),
				new Mecanica( 'Completar cosas', '6', ['Poder', 'Independencia', 'Orden', 'Tranquilidad']),
				new Mecanica( 'Ser un sabio', '7', ['Poder', 'Independencia', 'Aceptación', 'Ahorro', 'Familia', 'Posición social']),
				new Mecanica( 'Personalizar mundos', '8', ['Independencia', 'Contacto social', 'Posición social']),
				new Mecanica( 'Ser el centro de atención', '9', ['Poder', 'Posición social']),
				new Mecanica( 'Hacer regalos', '10', ['Aceptación']),
				new Mecanica( 'Analizar', '11', ['Curiosidad', 'Orden']),
				new Mecanica( 'Contar historias', '12', ['Poder', 'Aceptación', 'Posición social']),
				new Mecanica( 'Iluminación', '13', ['Curiosidad', 'Independencia', 'Seguridad']),
				new Mecanica( 'Tener contactos', '14', ['Aceptación', 'Contacto social']),
				new Mecanica( 'Fortalecer relaciones', '15', ['Contacto social']),
				new Mecanica( 'Escuchar historias', '16', ['Curiosidad', 'Contacto social']),
				new Mecanica( 'Ser reconocido', '17', ['Aceptación', 'Contacto social', 'Posicion social']),
				new Mecanica( 'Adquirir conocimientos', '18', ['Curiosidad', 'Contacto social', 'Posición social']),
				new Mecanica( 'Coleccionar', '19', ['Poder', 'Orden', 'Posición social']),
				new Mecanica( 'Vivir una fantasia', '20', ['Curiosidad', 'Idealismos', 'Seguridad']),
				new Mecanica( 'Organizar grupos de personas', '21', ['Orden', 'Contacto social', 'Posición social']),
				new Mecanica( 'Competir', '22', ['Poder', 'Posición social', 'Justicia', 'Actividad Física']),
				new Mecanica( 'Explorar el mundo', '23', ['Curiosidad', 'Independencia']),
				new Mecanica( 'Identificar patrones', '24', ['Curiosidad', 'Orden']),
				new Mecanica( 'Misterio', '25', ['Curiosidad']),
				new Mecanica( 'Mejorar la sociedad', '26', ['Idealismo', 'Posición social']),
				new Mecanica( 'Relajarse', '27', ['Seguridad']),
				new Mecanica( 'Asustarse', '28', ['Actividad Física']),
				new Mecanica( 'Crear orden del caos', '29', ['Orden', 'Seguridad']),
				new Mecanica( 'Hacer tonterias', '30', ['Orden', 'Tranquilidad']),
				new Mecanica( 'Ser un heroe', '31', ['Poder', 'Indepencia', 'Coleccionar', 'Idealismo', 'Contacto social', 'Posición social', 'Justicia']),
				new Mecanica( 'Hacer justicia', '32', ['Poder', 'Justicia']),
				new Mecanica( 'Mejorar la salud', '33', ['Actividad Física'])
		]}
		this.componentes = {
			nombre: 'Componentes',
			imagen: 'componente',
			cartas: [
				new Componente( 'Ranking', 'Clasificación acorde a una puntuación o valor'),
				new Componente( 'Desbloqueo de contenido', 'Aspectos que solo estan disponibles cuando los alumnos alcanzan ciertos objetivos'),
				new Componente( 'Colecciones', 'Elementos a acumular'),
				new Componente( 'Misiones', 'Desafíos predefinidos con objetivos y recompensas'),
				new Componente( 'Misiones epicas', 'Desafíos muy complicado al final'),
				new Componente( 'Medallas', 'Representación visual de los logros'),
				new Componente( 'Barras de progreso', 'Representación del estado actual de diferentes acciones, niveles, retos, vida, etc'),
				new Componente( 'Cuenta atrás', 'Cuenta atrás para realizar cierta acciones'),
				new Componente( 'Logros', 'Objetivos definidos'),
				new Componente( 'Avatares', 'Representación visual del alumno'),
				new Componente( 'Puntos', 'Representación numerica de la progresión dentro del juego'),
				new Componente( 'Niveles', 'Pasos definidos en la progresión de un jugador'),
				new Componente( 'Mercado', 'Sitio donde se pueden intercambiar los bienes por recompensas'),
				new Componente( 'Bienes virtuales', 'Activos del juego con un valor virtual'),
				new Componente( 'Ranking sociales', 'Posición de los alumnos en relación a la participación social'),
				new Componente( 'Equipos', 'Grupo definido de alumnos que trabaja conjuntamente'),
				new Componente( 'Recompensas', 'Acciones que se consiguen al intercambiar bienes y ayudan al progreso'),
				new Componente( 'Roles', 'Permite que existan diferentes personajes con distintas acciones y que tus alumos puedan decidir que rol desempeñan'),
				new Componente( 'Tesoros escondidos', 'Recompensa obtenidad por exploración o por azar.')
		]}
		for( var i in this.mecanicas.cartas) {
			var motivadores = [];
			for( var j in this.mecanicas.cartas[i].motivadores) {
				for( var x in this.motivadores.cartas[x]) {
					if( this.mecanicas.cartas[i].motivadores.cartas[j] === this.motivadores.cartas[x].nombre) {
						motivadores.push( this.motivadores.cartas[x]);
						this.motivadores.cartas[x].mecanicas.cartas.push( this.mecanicas.cartas[i]);
					}
				}
			}
			this.mecanicas.cartas[i].motivadores = motivadores;
		}
	}
})();	