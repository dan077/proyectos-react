

var script = ()=>{
    var asignaturasLink = document.getElementsByClassName("bdGrpStyle");
    var cant = asignaturasLink.length; //obtengo la cantidad de links.
    var asignaturas_json = {};
    //se agregan las key de las asignaturas pendientes.
    for(let i = 0; i < cant; i++)
    {
        let asignatura = asignaturasLink[i].firstElementChild.firstElementChild;
        if(asignatura)
        {
            let asignatura_onclick = asignatura.getAttribute('onclick')
            let asignatura_key = asignatura_onclick.match(`'([^']*)'`)[0];
            let nombre_asignatura = asignatura.outerText;
            asignaturas_json[nombre_asignatura] = {};
            asignaturas_json[nombre_asignatura]["Mostrar_Grupos"] = asignatura_onclick;
            asignaturas_json[nombre_asignatura]["Eliminar"] = `delAsgServlet(${asignatura_key},'${nombre_asignatura}')`;
        }
    }

        //funcion para descargar el json como txt.
        function download(content, fileName, contentType) {
            var a = document.createElement("a");
            var file = new Blob([content], {type: contentType});
            a.href = URL.createObjectURL(file);
            a.download = fileName;
            a.click();
        }
        //Descargamos el json como .txt
        download(JSON.stringify(asignaturas_json), 'json.txt', 'text/plain');
    }




//modifica la funcion.
function addAsgServlet(codEst, nmat, anio, sem, ct){	
	jQuery('#materiasPlan').empty();
	jQuery('#asignaturasMateria').empty();
	jQuery("#modalAsignaturas").modal("show");
	jQuery.ajax({
        url : '/mEstudiantes/listarAsigAdd',
        data : {
        	codEst : codEst,
        	nmat   : nmat,
        	anio   : anio, 
        	sem    : sem,
        	ct     : ct
        },
        type:'POST',
        beforeSend : function(objeto) {
        	/*jQuery('#overlay').fadeIn('fast',function(){
        		jQuery('#lAjaxDiv').show();
        	});*/
			jQuery("#loader").show();
		},
        success : function(responseText) {
			jQuery("#loader").hide();
        	//jQuery('#lAjaxDiv').hide(); 
        	//jQuery('#contenPlan').show();
        	jQuery('#materiasPlan').empty();
        	jQuery('#materiasPlan').html(responseText)
            script();
        	//jQuery('#overlay').fadeOut('fast');
        },
		error: function (jqXHR, exception) {
				var valError  = errorHandler(jqXHR);				
				jQuery("#loader").hide();
				jQuery('#materiasPlan').html("<div class='alert alert-danger'><h4 syle='color:#900;'>Error cargando asignaturas: "+valError+", intentelo nuevamente.</h4></div>");				
			}
    });
}
document.getElementById("bt_agregar").click() //Iniciamos el script.
/*
//dejo la funcion como estaba.
function addAsgServlet(codEst, nmat, anio, sem, ct){	
	jQuery('#materiasPlan').empty();
	jQuery('#asignaturasMateria').empty();
	jQuery("#modalAsignaturas").modal("show");
	jQuery.ajax({
        url : '/mEstudiantes/listarAsigAdd',
        data : {
        	codEst : codEst,
        	nmat   : nmat,
        	anio   : anio, 
        	sem    : sem,
        	ct     : ct
        },
        type:'POST',
        beforeSend : function(objeto) {
			jQuery("#loader").show();
		},
        success : function(responseText) {
			jQuery("#loader").hide();
        	//jQuery('#lAjaxDiv').hide(); 
        	//jQuery('#contenPlan').show();
        	jQuery('#materiasPlan').empty();
        	jQuery('#materiasPlan').html(responseText)
        	//jQuery('#overlay').fadeOut('fast');
        },
		error: function (jqXHR, exception) {
				var valError  = errorHandler(jqXHR);				
				jQuery("#loader").hide();
				jQuery('#materiasPlan').html("<div class='alert alert-danger'><h4 syle='color:#900;'>Error cargando asignaturas: "+valError+", intentelo nuevamente.</h4></div>");				
			}
    });
}
*/

//Editar funcion changeHor.
function changeHorServlet(json, zonal, opt){
	/*if (jQuery('#overlay').css('display') == 'none' ){
		jQuery('#overlay').fadeIn('fast');
	}

	if(jQuery('#contenPlan').css('display') == 'block'){
		jQuery('#contenPlan').hide();
	}*/
	
	jQuery('#materiasPlan').empty();
	jQuery('#asignaturasMateria').empty();	
	
	jQuery("#modalAsignaturas").modal("hide");
	jQuery("#modalasignaturas").modal("show");
	jQuery("html, body").animate({ scrollTop: jQuery(document).height()-600 }, 50);
	//jQuery("#resasignaturas").hide();
	
	jQuery.ajax({
        url : '/mEstudiantes/listarasignaturasChg',
        data : {
        	jObj : json,  
            ct   : zonal, 
            opt  : opt
        },
        type:'POST',
        beforeSend : function(objeto) {
			//jQuery('#lAjaxDiv').show();
			jQuery("#loaderG").show();
		},
        success : function(responseText) {
        	//jQuery('#lAjaxDiv').hide();
			jQuery("#loaderG").hide();
        	//jQuery('#contenasignatura').show();
        	console.log(responseText);
            jQuery('#asignaturasMateria').html(responseText);

        },
		error: function (jqXHR, exception) {
				var valError  = errorHandler(jqXHR);				
				jQuery("#loaderG").hide();
				jQuery('#asignaturasMateria').html("<div class='alert alert-danger'><h4 syle='color:#900;'>Error cargando asignaturas: "+valError+", intentelo nuevamente.</h4></div>");				
			}
    });
}

