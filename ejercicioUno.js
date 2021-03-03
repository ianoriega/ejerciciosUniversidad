/**
 * a)El perro mas pesado ok
b)El porcentaje de enfermos sobre el total de mascotas ok
c)El nombre de la ultima mascota de tipo "otra cosa" ok
d)El animal sin pelo con menor temperatura corporal	ok
e)Que tipo de mascota(gato o un perrro u "otra cosa") ok que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano
 */
function probarEjercicio(){
	
	var tipoMascota;  
	var tipoPelaje;		
	var edadMascota;	
	var nombreMascota;	
	var razaMascota;	
	var pesoMascota;	
	var estadoClinicoMascota;	
	var temperaturaMascota;	
	var continuar; 
	var validacionEdadMascota; 
	var validacionNombreMascota;
	var validacionRazaMascota;	
	var validacionPesoMascota;	
	var validacionTemperaturaMascota;	
	var perroMasPesado;		
	var contadorTotalMascotas;
	var contadorEnfermos;
	var totalEnfermos;
	var ultimoOtraCosa;
	var contadorTempSinPelo;
	var promedioTempPerro;
	var contadorPerros;
	var temperaturaPerros;
	var promedioTempGatos;
	var contadorGatos;
	var temperaturaGatos;
	var promedioOtraCosa;
	var contadorOtraCosa;
	var temperaturaOtraCosa;
	var promedioMayor;
	var tipoPromedioMayor;
	var porcentajeGatosPerros;
	var contadorInternados;
	var contadorAdopcion;
	var menorEstadoClinicoMascota;
	var promedioPesoMascotas;
	var totalPesoMascotas;
	var menorPesoGato;
	var contadorPeloGato;
	var nombreGatoLiviano;
	var razaGatoLiviano;
	var contadorPerroPesado;
	


	contadorPerroPesado = 0;
	contadorTotalMascotas = 0;
	contadorEnfermos = 0;
	contadorTempSinPelo = 51;
	contadorPerros = 0;
	temperaturaPerros = 0;
	contadorGatos = 0;
	temperaturaGatos = 0;
	contadorOtraCosa = 0;
	temperaturaOtraCosa = 0;
	contadorInternados = 0;
	contadorAdopcion = 0;
	totalPesoMascotas = 0;
	contadorPeloGato = 0;


	do
	{
		do
		{
			tipoMascota = prompt("Ingrese perro ó gato u otra cosa");
		}while(tipoMascota != "perro" && tipoMascota != "gato" && tipoMascota != "otra cosa");

		do
		{
			tipoPelaje = prompt("Ingrese el tipo de pelaje: corto / largo / sin pelo");
		}while(tipoPelaje != "corto" && tipoPelaje != "largo" && tipoPelaje != "sin pelo");

		do
		{
			edadMascota = prompt("Ingrese la edad de su mascota");
			edadMascota = parseInt(edadMascota);
			validacionEdadMascota = isNaN(edadMascota);
		}while(validacionEdadMascota == true);

		do
		{
			nombreMascota = prompt("Ingrese el nombre de su mascota");
			validacionNombreMascota = isNaN(nombreMascota);
		}while(validacionNombreMascota == false);

		do
		{
			razaMascota = prompt("Ingrese la raza de su mascota");
			validacionRazaMascota = isNaN(razaMascota);
		}while(validacionRazaMascota == false);

		do
		{
			pesoMascota = prompt("Ingrese el peso de su mascota");
			pesoMascota = parseInt(pesoMascota);
			validacionPesoMascota = isNaN(pesoMascota);
		}while(validacionPesoMascota == true);

		do
		{
			estadoClinicoMascota = prompt("Ingrese el estado: enfermo / internado / adopcion");
		}while(estadoClinicoMascota != "enfermo" && estadoClinicoMascota != "internado" && estadoClinicoMascota != "adopcion");


		do
		{
			temperaturaMascota = prompt("Ingrese la temperatura corporal de su mascota");
			temperaturaMascota = parseInt(temperaturaMascota);
			validacionTemperaturaMascota = isNaN(temperaturaMascota);
		}while((validacionTemperaturaMascota == true) || (temperaturaMascota <10 || temperaturaMascota > 50));
		
		if(tipoMascota == "perro" && contadorPerroPesado == 0)
		{
			perroMasPesado = pesoMascota;
			
			if(pesoMascota > perroMasPesado)
			{
				perroMasPesado = pesoMascota;
			
			}
			contadorPerroPesado++;
		}

		contadorTotalMascotas++;


		if(estadoClinicoMascota == "enfermo")
		{
			contadorEnfermos++;
		}
		else if(estadoClinicoMascota == "internado")
		{
			contadorInternados++;
		}
		else
		{
			contadorAdopcion++;
		}


		if(tipoMascota == "otra cosa")
		{
			ultimoOtraCosa = nombreMascota;
		}

		if(tipoPelaje == "sin pelo")
		{
			if(temperaturaMascota < contadorTempSinPelo)
			{
				contadorTempSinPelo = temperaturaMascota;
			}
		}


		if(tipoMascota == "perro")
		{
			contadorPerros++;
			temperaturaPerros = temperaturaPerros + temperaturaMascota;
		}
		else if(tipoMascota == "gato")
		{
			contadorGatos++;
			temperaturaGatos = temperaturaGatos + temperaturaMascota;
		}
		else
		{
			contadorOtraCosa++;
			temperaturaOtraCosa = temperaturaOtraCosa + temperaturaMascota;
		}

		totalPesoMascotas = totalPesoMascotas + pesoMascota;

		if(tipoMascota == "gato" && tipoPelaje == "sin pelo")
		{
			if(contadorPeloGato == 0)
			{
				menorPesoGato = pesoMascota;
				nombreGatoLiviano = nombreMascota;
				razaGatoLiviano = razaMascota;
			}
			
			if(menorPesoGato > pesoMascota)
			{
				menorPesoGato = pesoMascota;
				nombreGatoLiviano = nombreMascota;;
				razaGatoLiviano = razaMascota;
			}
			contadorPeloGato++;
		}


		continuar = confirm("Desea cargar otra mascota?");
	}while(continuar == true);

	totalEnfermos = contadorEnfermos *100 /contadorTotalMascotas;

	promedioTempPerro = temperaturaPerros / contadorPerros;
	promedioTempGatos = temperaturaGatos / contadorGatos;
	promedioOtraCosa = temperaturaOtraCosa / contadorOtraCosa;

	if(promedioTempPerro > promedioTempGatos && promedioTempPerro > promedioOtraCosa)
	{
		promedioMayor = promedioTempPerro;
		tipoPromedioMayor = "perro";
	}
	else if(promedioTempGatos > promedioTempPerro && promedioTempGatos > promedioOtraCosa)
	{
		promedioMayor = promedioTempGatos;
		tipoPromedioMayor = "gato";
	}
	else if(promedioOtraCosa > promedioTempPerro && promedioOtraCosa > promedioTempGatos)
	{
		promedioMayor = promedioOtraCosa;
		tipoPromedioMayor = "otra cosa";
	}
	else
	{
		promedioMayor = " existen varias temperaturas";
		tipoPromedioMayor = " perro, gato, otra cosa";
	}

	if(contadorEnfermos < contadorInternados && contadorEnfermos < contadorAdopcion)
	{
		menorEstadoClinicoMascota = "Enfermos";
	}
	else if(contadorInternados < contadorEnfermos && contadorInternados < contadorAdopcion)
	{
		menorEstadoClinicoMascota = "Internados";
	}
	else if(contadorAdopcion < contadorEnfermos && contadorAdopcion < contadorInternados)
	{
		menorEstadoClinicoMascota = "adopcion";
	}
	else
	{
		menorEstadoClinicoMascota = "hay estados clinicos igualados";
	}

	porcentajeGatosPerros = (contadorGatos + contadorPerros) *100 / contadorTotalMascotas;

	promedioPesoMascotas = totalPesoMascotas / contadorTotalMascotas;

	document.write("El perro mas pesado pesa: " + perroMasPesado + "kilogramos");
	document.write("<br> El porcentaje de enfermos es del " + totalEnfermos + "porciento");
	document.write("<br> El nombre del ultimo Otra Cosa es :" + ultimoOtraCosa);
	document.write("<br> El animal sin pelo con menor temperatura tiene: " + contadorTempSinPelo + "grados");
	document.write("<br> El mayor promedio pertenece a: " + tipoPromedioMayor + " y la temperatura es " + promedioMayor);
	document.write("<br> El porcentaje de gatos mas perros es de: " + porcentajeGatosPerros);
	document.write("<br> El estado clinico que tiene la menor cantidad de mascotas es: " + menorEstadoClinicoMascota);
	document.write("<br> El promedio de peso de todas las mascotas es: " + promedioPesoMascotas);
	document.write("<br> El gato sin pelos mas liviano es: " + nombreGatoLiviano + " y la raza es " + razaGatoLiviano);
}