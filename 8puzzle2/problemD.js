
	var velke_cislo = 12*11*10*9*8*7*6*5*4*3*2 + 1;
	var m = 8;
	var iteracia = 0;
	var cols = 3;
	var rows = 3;
	var start = []; // TOTO JE ZACIATOCNA POZICIA Z KTOREJ SA ODSTARTUJE, TOTO SA MENI, KED SA HTML MATRIX MENI
	var pouzit_heuristiku = 1;

	//popisuje rozne stavy
	//GLOBALNE PREMENNE
	var pocet_prvkov = 0;
	var velkost_tabulky = velke_cislo; 
	var hash_table = new Array(velkost_tabulky);
	var best_prvok = null;



	function getInvCount(pole)
	{
    	var inv_count = 0;
    	for (var i = 0; i < pole.length - 1; i++)
        	for (var j = i+1; j < pole.length; j++)
             // Value 0 is used for empty space
            	 if (pole[j] && pole[i] &&  pole[i] > pole[j])
                		inv_count++;
    	return inv_count;
	}
 
	// This function returns true if given 8 puzzle is solvable.
	function isSolvable(pole)
	{
    	// Count inversions in given 8 puzzle
    	var invCount = getInvCount(pole);
 
    	// return true if inversion count is even.
   		return (invCount%2 == 0);
	}

	function changeHeuristic(element){
		pouzit_heuristiku = element.checked && element.getAttribute('h')=="1" ? 1 : 2; 
	}

	// AK SA V HTML ZMENI DIMENZIA, VYKRESLI SA ZNOVU HTML
	function recreate(element)
	{
		var matrix = document.getElementById('matrix');
		start = [];

		if(element.getAttribute('id') == "cols")
		{
				cols = parseInt(element.value); 
				x_dimension = parseInt(element.value);
		}
		else
		{
			rows = parseInt(element.value);
			y_dimension = parseInt(element.value);
		}

		console.log("cols = "+cols+" rows="+rows);


		// VYNULOVANIE TABULKY
		matrix.innerHTML = "";

		var row = "";

		for(var a=0;a<rows*cols-1;a++)
			start[a] = a+1;
		start[rows*cols-1] = 'm';

		for(var a=0;a<rows;a++)
		{
			row += "<tr>";
			for(var b=0;b<cols;b++)
			{
				if(a==rows-1 && b==cols-1)
					row += "<td><input class='inputik' val='m' type='number' value='' onchange='changeValue(this);' row='"+a+"' column='"+b+"'></td>";
				else
					row += "<td><input class='inputik' val='"+(a*cols+b+1)+"' type='number' value='"+(a*cols+b+1)+"' onchange='changeValue(this);' row='"+a+"' column='"+b+"'></td>";
			}
		}
		matrix.innerHTML = row;
		console.log(start);
	}


	// AK SA ZMENI HODNOTA V MATRIXE, TAK TATO FUNKCIA SA SPUSTI
	function changeValue(element)
	{
		if(element.value == "")
			element.setAttribute("val",'m');
		else
			element.setAttribute("val",element.value);

		var v 	   = element.getAttribute("val");
		var column = parseInt(element.getAttribute('column'));
		var row    = parseInt(element.getAttribute('row'));	
			
		start[row*cols + column] = (v==='m') ? v : parseInt(v);
		console.log(start);

		return;
	}

	// OBJEKT puzzle, OBSAHUJE POLE A POZICIU MEDZERI
	var puzzle = function(pole,pos,heuristika)
	{
		this.pos = new Number(pos);			// novy objekt
		this.pole  = pole.slice(0);	// novy objekt
		this.predchodca;	
		this.sucet;
		this.toDelete = 1;
		this.last_step;				// maximalny (nezmyselny) sucet 

		// PRVY VYPOCET HEURISTIKY
		this.firstHeuristic = function()
		{
			var sum = 0;
			var cislo,x_prve,y_prve,x_cislo,y_cislo;

			for(var a=0;a < rows*cols;a++)
			{
				cislo = this.pole[a];
				
				// A TOTO ROZHODNE KDE SA MA NACHADZAT TO DANE CISLO
				if(cislo === "m")
				{
					x_cislo = cols-1;
					y_cislo = rows-1;
				}
				else
				{
					x_cislo = (cislo-1) % cols;
					y_cislo = Math.floor((cislo-1)/cols);	
				}

				// ZE KDE SA MOMENTALNE NACHADZA
				x_prve = a % cols;
				y_prve = Math.floor(a/cols);

				sum += Math.abs(x_prve - x_cislo) + Math.abs(y_prve - y_cislo); 
			}
			return sum;
		}

		// DRUHY VYPOCET HEURISTIKY
		this.secondHeuristic = function()
		{
			var sum = 0;

			for(a=0;a<rows*cols;a++)
			{
				if(this.pole[a]!=(a+1))
					sum++;
			}
			return sum;
		}

		// KED UZ SME DEFINOVALI METODY, TERAZ MOZME HNED VYPOCITAT HEURISTIKU
		this.sucet = ((heuristika == 1) ? this.firstHeuristic() : this.secondHeuristic());
	}


	function insertToTable(puzzle)
	{
		//console.log('inserting to table');
		pozicia = hashCompute(puzzle) % velkost_tabulky;
		var i = 0;
		var o = 1;

		// pokracuj ak neni undefined a zaroven to neni ten hladany
		while( hash_table[pozicia] !== undefined && (i = porovnajPolia(hash_table[pozicia % velkost_tabulky],puzzle)) == 0 ) 
			{ 
				//console.log('cyklim pozicia = '+pozicia);
				pozicia=(++pozicia + (o++)) % velkost_tabulky;
			}

		// AK TAM UZ JE TAK VRAT NULU (nepridali sme ziadny prvok)
		if(i)	
			return 0;	
		else
			hash_table[pozicia] = puzzle; // ak tam nie je, pridaj do hash tabulky

		//inkrementuj pocet prvkov v tabulke
		pocet_prvkov++;
		

		// AK PREKROCIME HRANICU PRVKOV
		if(pocet_prvkov > 250000)
		{
			tmp = best_prvok;
			console.log('premazavanie...');
			console.log(best_prvok.sucet);
			console.log(best_prvok.pole);
			var zasobnik = [];
			var tmp_pocet = 0;

			// NASTAV KAZDEMU PRVKU V DOBREJ CESTE ABY SA NEVYMAZAL, ALE ABY SA PAMATAL V HASH TABLE
			while(tmp != undefined)
			{

				zasobnik.push(tmp);
				tmp = tmp.predchodca;
			}
			
			// VYMAZANIE PRVKOV AK PREKROCI ISTU HRANICU, NECHA LEN TU CESTU , KTORA VEDIE K NAJLEPSIEMU PRVKU
			hash_table = [];
			pocet_prvkov = zasobnik.length;

			//ZNOVU UMIESTNIT PRVKY V ZASOBNIKU DO TABULKY
			while(zasobnik.length)
			{
				var i,o = 1;
				var prvok = zasobnik.shift();
				pozicia = hashCompute(prvok) % velkost_tabulky;

				// UMIESTNIT PRVKY ZO ZASOBNIKA DO NOVOVYTVORENEJ TABULKY
				while( hash_table[pozicia] !== undefined && (i = porovnajPolia(hash_table[pozicia % velkost_tabulky],prvok)) == 0 ) 
				{	
					console.log('cykli');
					pozicia = (++pozicia + (o++)) % velkost_tabulky;
				}
				
				hash_table[pozicia] = prvok;
			}
			
			// SIGNAL ze sa premazavala tabulka !!!
			return 2;
		}

		
		// SIGNAL ZE SA PRIDAL USPESNE PRVOK DO TABULKY BEZ PREMAZAVANIA
		return 1; // ak sa to tam uspesne vlozilo a este tam dany prvok nebol tak vrat 1
	}
	
	function hashCompute(puzzle)
	{
		/**vypočíta sa HASH**/
		var n = puzzle.pole.length;
		var sucet = 0;
		for(var a = 0;a<n;a++)
		{
			if(puzzle.pole[a] == "m")
				sucet += 100*(a+1)*(a+1)*(a+1);
			else
				sucet += (a+1)*(a+1)*(a+1)*(a+1)*(puzzle.pole[a]+1)*(1+puzzle.pole[a])*(puzzle.pole[a]); 
		}
		return sucet;
	}

	function porovnajPolia(Array1,Array2)
	{
		/**porovna dve polia, vrati 1 pokial sa rovnaju, 0 pokial sa nerovnaju**/
		var n = Array1.pole.length;
		var ok = 1;
		for(a=0;a < n;a++)
		{
			if(Array1.pole[a] !== Array2.pole[a])
				return 0;
		}
		return 1;
	}

	function getValid(sach)
	{	
		/**VRATI POLE STRINGOV PRE VALID TAHY**/
		var x = sach.pos % cols; 
		var y = Math.floor(sach.pos / cols); 
		var pole = [];

		if(y != 0) 			pole.push("up");
		if(y != rows-1)		pole.push("down");
		if(x != 0)			pole.push("left");
		if(x != cols-1) 	pole.push("right");

		return pole;
	}

	function DOWN(sach)
	{
		var tmp = sach.pole[sach.pos+cols];
		var nova = new puzzle(sach.pole,sach.pos,pouzit_heuristiku);
		nova.pole[nova.pos + cols] = "m"; 
		nova.pole[nova.pos] = tmp;
		nova.pos += cols;
		nova.last_step = "UP";
		return nova;
	}
	function UP(sach){
		var tmp = sach.pole[sach.pos-cols];
		var nova = new puzzle(sach.pole,sach.pos,pouzit_heuristiku);
		nova.pole[nova.pos-cols] = "m";
		nova.pole[nova.pos] = tmp;
		nova.pos-=cols;
		nova.last_step = "DOWN";
		return nova;
	}
	function LEFT(sach){
		var tmp = sach.pole[sach.pos-1];
		var nova = new puzzle(sach.pole,sach.pos,pouzit_heuristiku);
		nova.pole[nova.pos-1] = "m";
		nova.pole[nova.pos] = tmp;
		nova.pos--;
		nova.last_step = "RIGHT";
		return nova;
	}
	function RIGHT(sach){
		var tmp = sach.pole[sach.pos+1]; 
		var nova = new puzzle(sach.pole,sach.pos,pouzit_heuristiku);
		nova.pole[nova.pos+1] = "m";
		nova.pole[nova.pos] = tmp;
		nova.pos++;
		nova.last_step = "LEFT";
		return nova;
	}
	
	function findSolution(start,destination)
	{
		var neprehladane = [];
		neprehladane.push(start);
		
		var tmp;
		var choices;
		var validmoznosti;
		var zaciatok_riesenia = new Date;
			zaciatok_riesenia = zaciatok_riesenia.getTime();

		while(neprehladane.length)
		{
			// INKREMENTOVAT, KOLKO KRAT SA CYKLUS OPAKOVAL, AK PRILIS DLHO TAK SKONCI
			iteracia++;

			if(iteracia > 1000000) //ak viac ako pol melona
			{
				window.alert("simulacia prekrocila iteracny limit...");
				return 0;
			}

			choices = [];
	
			// VYBER ZO ZASOBNIKA
			tmp = neprehladane.shift();


			// NAJST NAJLEPSI MOZNY PRVOK Z CYKLU , PO PREMAZANI TABULKY SA BUDE HLADAT OD TOHTO PRVKU
			if(best_prvok == undefined || best_prvok.sucet >= tmp.sucet)
				best_prvok = tmp;

			// vrati POLE STRINGOV napr. ["down","up"]
			validmoznosti = getValid(tmp); 

			// AK SME VYBRALI Z NEPREHLADANYCH STAVOV NAS VYSLEDNY TAH KTORY CHCEME NAJST, TAK SUPER, NASLI SME RIESENIE
			if( porovnajPolia(destination,tmp) )
			{
				var koniec_riesenia = new Date();
					koniec_riesenia = koniec_riesenia.getTime();

				window.alert('riesenie trvalo '+(koniec_riesenia - zaciatok_riesenia)+' milisekund');
				console.log('JUPII');
				console.log('pocet iteracii = '+iteracia);
				console.log(tmp);
				return tmp;
			}

			// VYTVORI SA POLE "Choices" DO KTOREHO SA ULOZIA NOVE SACHOVNICE KTORE SA VYGENEROVALI PO VALID TAHOCH
			for(var a = 0;a < validmoznosti.length ; a++)
			{
				if     ( validmoznosti[a] == "up"   )	choices.push(UP(tmp));	
				else if( validmoznosti[a] == "down" )	choices.push(DOWN(tmp));
				else if( validmoznosti[a] == "right")	choices.push(RIGHT(tmp));
				else if( validmoznosti[a] == "left" )	choices.push(LEFT(tmp));
			}

			// PRE KAZDU NOVU VYGENEROVANU SACHOVNICU SA ZISTI, CI UZ SME JU NAHODOU NEOBJAVILI, AK SME JU OBJAVILI TAK ULOZIT DO NEPREHLADANYCH STAVOV
			for(var b = 0; b < choices.length ;b++)
			{
				
				var i;
				if( (i=insertToTable(choices[b])) == 1) // AK ESTE NIE JE V HASH TABLE
					{
						if(neprehladane.length && choices[b].sucet <= neprehladane[0].sucet ) // AK JE LEPSIA HEURISTIKA, PRIDAJ NA ZACIATOK FRONTU
							neprehladane.unshift(choices[b]);
						else
							neprehladane.push(choices[b]);   // AK NENI LEPSIA AKO PRVY ELEMENT,PRIDAJ NA KONIEC
						
						choices[b].predchodca = tmp; // vytvori sa odkaz na rodica
					}
				else if(i==2) // AK BOLA TABULKA PREMAZAVANA, TAK VYPRAZDNI FRONT, A UMIESTNI NA ZACIATOK NAJLEPSIEHO JEDINCA, KTORY MA NAJNIZSIU HEURISTIKU - BLIZSIE K CIELI
				{
					neprehladane = [];
					neprehladane.push(best_prvok);
					best_prvok.sucet++; // pridaj prvku heuristicky sucet + 1 , ak sa bude tento silny prvok opakovat, tak po istom case uz nebude najlepsi a zacne sa prehladavat ina cesta
					break;//znamena nepridavat dalsie CHOICES
				}

			}
			
		}

		return 0; // ak sa nenasla moznost
	}


	// JEDNODUCHE NAVRATENIE KU RODICOM A VYPISAT ICH
	function vypisPredchodcov(puzzle)
	{
		var tmp = puzzle;
		console.log('vypisovat idem');
		console.log(puzzle);
		var element = document.getElementById('result');

		while(tmp != undefined)
		{
			console.log(tmp.pole);	
			if(tmp.predchodca != undefined)
				element.innerHTML += "<p>"+tmp.last_step+" -> <span style='float:right'>"+tmp.pole+"</span></p>";
			else
				element.innerHTML += "<p>  Zaciatok -> "+tmp.pole+"</p>";
			tmp = tmp.predchodca;
		}

		hash_table = [];
		pocet_prvkov = 0;
		best_prvok = undefined;
		iteracia = 0; 
	}


	// TATO FUNKCIA SA SPUSTI PO STLACENI NA TLACIDLO BUTTON V HTML
	function startSimulation()
	{
		document.getElementById('result').innerHTML = "";
		var tmp_array = [];



		for(var a=0;a < rows*cols-1;a++)
		{
			tmp_array.push(a+1);
		}
		tmp_array.push("m");

		var destination = new puzzle(tmp_array,rows*cols-1);
		var starting = null;

		for(var a=0;a< rows*cols;a++)
		{
			if(start[a] === "m")
			{	
				starting = new puzzle(start,a,pouzit_heuristiku);
				console.log('naslo sa m na pozicii '+a);
				break;
			}
		}

		insertToTable(starting);	
		var vysledna = findSolution(starting,destination);
		vypisPredchodcov(vysledna);
	}
