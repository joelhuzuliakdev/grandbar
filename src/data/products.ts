// src/data/products.ts
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  promo?: string;
  image: string;
}

export const products: Product[] = [
    // DIAGEO
    { id: 'smirnoff-vodka', name: 'Smirnoff Vodka', brand: 'Diageo', category: 'Vodka', price: 7443, image: '/bebidas/smirnoffVodka.webp' },
    { id: 'smirnoff-sabores', name: 'Smirnoff Sabores', brand: 'Diageo', category: 'Vodka', price: 8200, image: '/bebidas/smirnoffSabores.webp' },
    { id: 'tanqueray', name: 'Tanqueray Gin', brand: 'Diageo', category: 'Gin', price: 25333, image: '/bebidas/tanquerayGin.webp' },
    { id: 'tanqueray-sabores', name: 'Tanqueray Sabores', brand: 'Diageo', category: 'Gin', price: 30416, image: '/bebidas/tanqueraySabores.webp' },
    { id: 'baileys', name: 'Baileys', brand: 'Diageo', category: 'Licor', price: 26846, image: '/bebidas/baileys.webp' },
    { id: 'white-horse', name: 'White Horse', brand: 'Diageo', category: 'Whisky', price: 14664, image: '/bebidas/whiteHorseWhisky.webp' },
    { id: 'jw-red', name: 'Johnnie Walker Red', brand: 'Diageo', category: 'Whisky', price: 26904, image: '/bebidas/johnnieWalkerRed.webp' },
    { id: 'jw-black', name: 'Johnnie Walker Black', brand: 'Diageo', category: 'Whisky', price: 48928, image: '/bebidas/johnnieWalkerBlack.webp' },
    { id: 'jw-double-black', name: 'Johnnie Walker Double Black', brand: 'Diageo', category: 'Whisky', price: 55706, image: '/bebidas/johnnieWalkerDoubleBlack.webp' },
    { id: 'jw-gold', name: 'Johnnie Walker Gold', brand: 'Diageo', category: 'Whisky', price: 94768, image: '/bebidas/johnnieWalkerGold.webp' },
    // CAMPARI
    { id: 'sky-saborizado', name: 'Skyy Saborizado', brand: 'Campari', category: 'Vodka', price: 8916, image: '/bebidas/skyySaborizado.webp' },
    { id: 'sky-neutro', name: 'Skyy Neutro', brand: 'Campari', category: 'Vodka', price: 5926, promo: '5+1', image: '/bebidas/skyyNeutro.webp' },
    { id: 'campari', name: 'Campari', brand: 'Campari', category: 'Aperitivo', price: 8434, promo: '5+1', image: '/bebidas/campari.webp' },
    { id: 'aperol', name: 'Aperol', brand: 'Campari', category: 'Aperitivo', price: 8434, promo: '5+1', image: '/bebidas/aperol.webp' },
    { id: 'cinzano', name: 'Cinzano', brand: 'Campari', category: 'Vermut', price: 7131, image: '/bebidas/cinzano.webp' },
    // PERNOD RICARD
    { id: 'beefeater', name: 'Beefeater Dry', brand: 'Pernod Ricard', category: 'Gin', price: 19569, promo: '5+1', image: '/bebidas/beefeaterDryGin.webp' },
    { id: 'beefeater-sabores', name: 'Beefeater Sabores', brand: 'Pernod Ricard', category: 'Gin', price: 23262, image: '/bebidas/beefeaterSabores.webp' },
    { id: 'blenders', name: 'Blenders x750cc', brand: 'Pernod Ricard', category: 'Whisky', price: 8724, image: '/bebidas/blenders.webp' },
    { id: 'cusenier-licores', name: 'Cusenier Licores', brand: 'Pernod Ricard', category: 'Licor', price: 5844, image: '/bebidas/cusenierLicores.webp' },
    { id: 'tia-maria', name: 'Tia Maria', brand: 'Pernod Ricard', category: 'Licor', price: 6929, image: '/bebidas/tiaMaria.webp' },
    { id: 'wyborowa', name: 'Wyborowa Vodka', brand: 'Pernod Ricard', category: 'Vodka', price: 4850, promo: '5+1', image: '/bebidas/wyborowaVodka.webp' },
    { id: 'brighton-gin', name: 'Brighton Gin', brand: 'Pernod Ricard', category: 'Gin', price: 7617, promo: '5+1', image: '/bebidas/brightonGin.webp' },
    { id: 'brighton-sabores', name: 'Brighton Gin Sabores', brand: 'Pernod Ricard', category: 'Gin', price: 8368, image: '/bebidas/brightonGinSabores.webp' },
    { id: 'malibu', name: 'Malibú', brand: 'Pernod Ricard', category: 'Licor', price: 12517, promo: '5+1', image: '/bebidas/malibu.webp' },
    { id: 'habana-3', name: 'Havana 3 Años', brand: 'Pernod Ricard', category: 'Ron', price: 11594, promo: '5+1', image: '/bebidas/havanaRon.webp' },
    { id: 'habana-anejo', name: 'Havana Añejo Especial', brand: 'Pernod Ricard', category: 'Ron', price: 12378, promo: '5+1', image: '/bebidas/havanaAnejoEspecial.webp' },
    { id: 'ramazzotti', name: 'Ramazzotti', brand: 'Pernod Ricard', category: 'Licor', price: 6511, promo: '5+1', image: '/bebidas/ramazzotti.webp' },
    { id: 'jameson', name: 'Jameson Whisky', brand: 'Pernod Ricard', category: 'Whisky', price: 29825, image: '/bebidas/jamesonWhisky.webp' },
    { id: 'jameson-black-barrel', name: 'Jameson Black Barrel', brand: 'Pernod Ricard', category: 'Whisky', price: 50338, image: '/bebidas/jamesonBlackBarrel.webp' },
    { id: 'ballantines', name: "Ballantine's Finest", brand: 'Pernod Ricard', category: 'Whisky', price: 26924, image: '/bebidas/ballantinesFinest.webp' },
    { id: 'chivas-12', name: 'Chivas 12 Años', brand: 'Pernod Ricard', category: 'Whisky', price: 47414, image: '/bebidas/chivas12Anos.webp' },
    { id: 'monkey-gin', name: 'Monkey 47 Gin', brand: 'Pernod Ricard', category: 'Gin', price: 59195, image: '/bebidas/monkeyGin.webp' },
    { id: 'glenlivet', name: 'The Glenlivet Reserve', brand: 'Pernod Ricard', category: 'Whisky', price: 50004, image: '/bebidas/theGlenlivetReserve.webp' },
    { id: 'chivas-royal', name: 'Chivas Royal 21', brand: 'Pernod Ricard', category: 'Whisky', price: 287711, image: '/bebidas/chivasRoyal.webp' },
    { id: 'absolut', name: 'Absolut Vodka', brand: 'Pernod Ricard', category: 'Vodka', price: 19793, promo: '5+1', image: '/bebidas/absolutVodka.webp' },
    { id: 'malfy-gin', name: 'Malfy Gin', brand: 'Pernod Ricard', category: 'Gin', price: 44440, image: '/bebidas/malfyGin.webp' },
    { id: 'buhero-negro', name: 'Bühero Negro', brand: 'Pernod Ricard', category: 'Licor', price: 6634, image: '/bebidas/buheroNegro.webp' },
    { id: 'buhero-negro-mandelo', name: 'Bühero Negro Mandelo', brand: 'Pernod Ricard', category: 'Licor', price: 7297, image: '/bebidas/buheroNegroMandelo.webp' },
    { id: 'lillet', name: 'Lillet', brand: 'Pernod Ricard', category: 'Aperitivo', price: 16441, image: '/bebidas/lillet.webp' },
    { id: 'cusenier-cognac', name: 'Cusenier Café al Cognac', brand: 'Pernod Ricard', category: 'Licor', price: 6475, image: '/bebidas/cusenierCafealCognac.webp' },
    { id: 'tia-maria-cremy', name: 'Tia Maria Cremy', brand: 'Pernod Ricard', category: 'Licor', price: 9773, image: '/bebidas/tiaMariaCremy.webp' },
    { id: 'wyborowa-sabores', name: 'Wyborowa Sabores', brand: 'Pernod Ricard', category: 'Vodka', price: 50621, image: '/bebidas/wyborowaSabores.webp' },
    { id: 'jameson-ipa', name: 'Jameson IPA', brand: 'Pernod Ricard', category: 'Whisky', price: 33967, image: '/bebidas/jamesonIpa.webp' },
    { id: 'chivas-cristal-gold', name: 'Chivas Cristal Gold', brand: 'Pernod Ricard', category: 'Whisky', price: 77043, image: '/bebidas/chivasCristalGold.webp' },
    // JACK DANIELS
    { id: 'jack-apple', name: "Jack Daniel's Apple", brand: 'Jack Daniels', category: 'Whisky', price: 33085, promo: '5+1', image: '/bebidas/jackDanielsApple.webp' },
    { id: 'casa-rosa', name: 'Casa Rosa', brand: 'Jack Daniels', category: 'Vinos', price: 6965, image: '/bebidas/casaRosa.webp' },
    // VINOS - Peñaflor
    { id: 'trapiche-rva', name: 'Trapiche Reserva', brand: 'Peñaflor', category: 'Vinos', price: 5999, image: '/bebidas/trapicheReserva.webp' },
    { id: 'el-esteco', name: 'El Esteco', brand: 'Peñaflor', category: 'Vinos', price: 12421, image: '/bebidas/elEsteco.webp' },
    { id: 'la-mascota', name: 'La Mascota', brand: 'Peñaflor', category: 'Vinos', price: 9176, image: '/bebidas/laMascota.webp' },
    { id: 'fond-de-cave', name: 'Fond de Cave', brand: 'Peñaflor', category: 'Vinos', price: 5498, image: '/bebidas/fondDeCave.webp' },
    { id: 'don-david', name: 'Don David', brand: 'Peñaflor', category: 'Vinos', price: 5663, image: '/bebidas/donDavid.webp' },
    { id: 'san-telmo-esp', name: 'San Telmo Espumante', brand: 'Peñaflor', category: 'Espumante', price: 4152, image: '/bebidas/san-telmo-esp.webp' },
    { id: 'gran-medalla', name: 'Gran Medalla', brand: 'Peñaflor', category: 'Vinos', price: 24790, promo: '5+1', image: '/bebidas/gran-medalla.webp' },
    { id: 'origen', name: 'Origen', brand: 'Peñaflor', category: 'Vinos', price: 4532, image: '/bebidas/origen.webp' },
    { id: 'finca-las-moras', name: 'Finca Las Moras', brand: 'Peñaflor', category: 'Vinos', price: 3108, image: '/bebidas/fincaLasMoras.webp' },
    { id: 'alma-mora', name: 'Alma Mora', brand: 'Peñaflor', category: 'Vinos', price: 4242, image: '/bebidas/almaMora.webp' },
    { id: 'elementos', name: 'Elementos', brand: 'Peñaflor', category: 'Vinos', price: 3864, image: '/bebidas/elementos.webp' },
    { id: 'fond-de-cave-rva', name: 'Fond de Cave Reserva', brand: 'Peñaflor', category: 'Vinos', price: 7388, image: '/bebidas/fondDeCaveRva.webp' },
    { id: 'los-arboles', name: 'Los Árboles', brand: 'Peñaflor', category: 'Vinos', price: 3582, image: '/bebidas/losArboles.webp' },
    { id: 'alaris', name: 'Alaris', brand: 'Peñaflor', category: 'Vinos', price: 3216, image: '/bebidas/alaris.webp' },
    { id: 'cazador', name: 'Cazador', brand: 'Peñaflor', category: 'Vinos', price: 3574, image: '/bebidas/cazador.webp' },
    { id: 'dada', name: 'Dadá', brand: 'Peñaflor', category: 'Vinos', price: 4222, image: '/bebidas/dada.webp' },
    // CATENA ZAPATA
    { id: 'saint-felicien', name: 'Saint Felicien', brand: 'Catena Zapata', category: 'Vinos', price: 9436, promo: '5+1', image: '/bebidas/saint-felicien.webp' },
    { id: 'dv-catena', name: 'D.V. Catena', brand: 'Catena Zapata', category: 'Vinos', price: 12428, promo: '5+1', image: '/bebidas/dv-catena.webp' },
    { id: 'nicasia', name: 'Nicasia', brand: 'Catena Zapata', category: 'Vinos', price: 7398, promo: '5+1', image: '/bebidas/nicasia.webp' },
    { id: 'enemigo', name: 'El Enemigo', brand: 'Catena Zapata', category: 'Vinos', price: 17506, promo: '5+1', image: '/bebidas/enemigo.webp' },
    { id: 'gran-enemigo', name: 'Gran Enemigo', brand: 'Catena Zapata', category: 'Vinos', price: 38804, promo: '5+1', image: '/bebidas/gran-enemigo.webp' },
    // CHANDON
    { id: 'latitud', name: 'Latitud', brand: 'Chandon', category: 'Espumante', price: 4585, promo: '4+1', image: '/bebidas/latitud.webp' },
    { id: 'terraza-andes', name: 'Terraza de Los Andes', brand: 'Chandon', category: 'Espumante', price: 10924, promo: '4+1', image: '/bebidas/terraza-andes.webp' },
    { id: 'mercier', name: 'Mercier', brand: 'Chandon', category: 'Espumante', price: 6160, promo: '5+1', image: '/bebidas/mercier.webp' },
    { id: 'latitud-33', name: 'Latitud 33 Espumante', brand: 'Chandon', category: 'Espumante', price: 6420, promo: '5+1', image: '/bebidas/latitud33.webp' },
    { id: 'altos-del-plata', name: 'Altos del Plata', brand: 'Chandon', category: 'Espumante', price: 7672, promo: '4+1', image: '/bebidas/altosDelPlata.webp' },
    // SEPTIMA
    { id: 'emblema', name: 'Emblema', brand: 'Séptima', category: 'Vinos', price: 5103, promo: '5+1', image: '/bebidas/emblema.webp' },
    { id: 'maria-codorniu', name: 'Maria Codorniu', brand: 'Séptima', category: 'Espumante', price: 7414, promo: '5+1', image: '/bebidas/maria-codorniu.webp' },
    { id: 'septima-obra', name: 'Séptima Obra', brand: 'Séptima', category: 'Vinos', price: 7156, promo: '6+1', image: '/bebidas/septima-obra.webp' },
    { id: 'desconfiado', name: 'El Desconfiado Vermut', brand: 'Séptima', category: 'Vermut', price: 10384, promo: '3+1', image: '/bebidas/desconfiado.webp' },
    { id: 'los-pasos', name: 'Los Pasos', brand: 'Séptima', category: 'Vinos', price: 3670, promo: '5+1', image: '/bebidas/losPasos.webp' },
    // SALENTEIN
    { id: 'portillo', name: 'Portillo', brand: 'Salentein', category: 'Vinos', price: 3580, promo: '10+1', image: '/bebidas/portillo.webp' },
    { id: 'salentein-rva', name: 'Salentein Reserva', brand: 'Salentein', category: 'Vinos', price: 8105, image: '/bebidas/salentein-rva.webp' },
    { id: 'salentein-brut', name: 'Salentein Extra Brut', brand: 'Salentein', category: 'Espumante', price: 8714, promo: '5+1', image: '/bebidas/salentein-brut.webp' },
    // LUIGI BOSCA
    { id: 'la-linda', name: 'La Linda', brand: 'Luigi Bosca', category: 'Vinos', price: 8639, promo: '5+1', image: '/bebidas/la-linda.webp' },
    { id: 'luigi-insignia', name: 'Luigi Bosca Insignia', brand: 'Luigi Bosca', category: 'Vinos', price: 14191, promo: '5+1', image: '/bebidas/luigi-insignia.webp' },
    // DOÑA PAULA
    { id: 'estate-dp', name: 'Doña Paula Estate', brand: 'Doña Paula', category: 'Vinos', price: 5286, promo: '5+1', image: '/bebidas/estate-dp.webp' },
    { id: 'los-cardos', name: 'Los Cardos', brand: 'Doña Paula', category: 'Vinos', price: 3575, promo: '5+1', image: '/bebidas/los-cardos.webp' },
    { id: 'dp-single-vineyard', name: 'Doña Paula Single Vineyard', brand: 'Doña Paula', category: 'Vinos', price: 8005, promo: '5+1', image: '/bebidas/dpSingleVineyard.webp' },
    { id: 'altaluvia', name: 'Altaluvia', brand: 'Doña Paula', category: 'Vinos', price: 1640, promo: '4+1', image: '/bebidas/altaluvia.webp' },
    // RUTINI
    { id: 'rutini', name: 'Rutini Cab-Mal', brand: 'Rutini', category: 'Vinos', price: 14193, image: '/bebidas/rutini.webp' },
    { id: 'trumpeter', name: 'Trumpeter', brand: 'Rutini', category: 'Vinos', price: 7287, image: '/bebidas/trumpeter.webp' },
    // ATAMISQUE
    { id: 'atamisque', name: 'Atamisque', brand: 'Atamisque', category: 'Vinos', price: 26400, promo: '4+1', image: '/bebidas/atamisque.webp' },
    { id: 'catalpa', name: 'Catalpa', brand: 'Atamisque', category: 'Vinos', price: 11500, promo: '5+1', image: '/bebidas/catalpa.webp' },
    // FEDERAL
    { id: 'vermut-federal', name: 'Vermut Federal', brand: 'Federal', category: 'Vermut', price: 10588, promo: '5+1', image: '/bebidas/vermutFederal.webp' },
    // AVINEA
    { id: 'artesano-veraprima', name: 'Artesano Veraprima', brand: 'Avinea', category: 'Vinos', price: 6040, promo: '2+1', image: '/bebidas/artesanoVeraprima.webp' },
    { id: 'argento', name: 'Argento', brand: 'Avinea', category: 'Vinos', price: 4479, promo: '2+1', image: '/bebidas/argento.webp' },
    { id: 'cuesta-del-madero', name: 'Cuesta del Madero', brand: 'Avinea', category: 'Vinos', price: 3806, promo: '2+1', image: '/bebidas/cuestaDelMadero.webp' },
    { id: 'pacheco-perera', name: 'Pacheco Perera', brand: 'Avinea', category: 'Vinos', price: 4221, promo: '2+1', image: '/bebidas/pachoPerera.webp' },
    // CASARENA
    { id: 'casarena-estate', name: 'Casarena Estate', brand: 'Casarena', category: 'Vinos', price: 5438, promo: '3+1', image: '/bebidas/casarenaEstate.webp' },
    { id: 'casarena-single', name: 'Casarena Single Vineyard', brand: 'Casarena', category: 'Vinos', price: 15563, promo: '3+1', image: '/bebidas/casarenaSingle.webp' },
    // DILEMA
    { id: 'dilema', name: 'Dilema', brand: 'Dilema', category: 'Vinos', price: 2687, promo: '4+1', image: '/bebidas/dilema.webp' },
    // ESTANCIA MENDOZA
    { id: 'estancia-mendoza', name: 'Estancia Mendoza', brand: 'Estancia Mendoza', category: 'Vinos', price: 2834, promo: '4+1', image: '/bebidas/estanciaMendoza.webp' },
    // FINCA MAGNOLIA
    { id: 'finca-magnolia', name: 'Finca Magnolia', brand: 'Finca Magnolia', category: 'Vinos', price: 2778, promo: '4+1', image: '/bebidas/fincaMagnolia.webp' },
    // LA RURAL
    { id: 'san-felipe', name: 'San Felipe', brand: 'La Rural', category: 'Vinos', price: 4435, image: '/bebidas/sanFelipe.webp' },
    // LUIGI BOSCA
    { id: 'de-sangre', name: 'De Sangre', brand: 'Luigi Bosca', category: 'Vinos', price: 17225, promo: '5+1', image: '/bebidas/deSangre.webp' },
    // ETCHART
    { id: 'arnaldo-etchart', name: 'Arnaldo Etchart', brand: 'Etchart', category: 'Vinos', price: 24760, image: '/bebidas/arnaldoEtchart.webp' },
    { id: 'etchart-sv', name: 'Etchart Single Vineyard', brand: 'Etchart', category: 'Vinos', price: 12972, image: '/bebidas/etchartSV.webp' },
    { id: 'etchart-assemblage', name: 'Etchart Assemblage', brand: 'Etchart', category: 'Vinos', price: 38612, image: '/bebidas/etchartAssemblage.webp' },
    { id: 'etchart-1992', name: 'Etchart 1992', brand: 'Etchart', category: 'Vinos', price: 44793, image: '/bebidas/etchart1992.webp' },
    { id: 'cafayate', name: 'Cafayate', brand: 'Etchart', category: 'Vinos', price: 4437, image: '/bebidas/cafayate.webp' },
    { id: 'etchart-privado', name: 'Etchart Privado', brand: 'Etchart', category: 'Vinos', price: 4033, image: '/bebidas/etchartPrivado.webp' },
    { id: 'cafayate-rva', name: 'Cafayate Reserva', brand: 'Etchart', category: 'Vinos', price: 5814, promo: '5+1', image: '/bebidas/cafayateRva.webp' },
    // RENACER
    { id: 'punto-final', name: 'Punto Final', brand: 'Renacer', category: 'Vinos', price: 4754, promo: '5+1', image: '/bebidas/puntoFinal.webp' },
    { id: 'punto-final-esp', name: 'Punto Final Espumante', brand: 'Renacer', category: 'Espumante', price: 5193, promo: '4+1', image: '/bebidas/puntoFinalEsp.webp' },
    { id: 'punto-final-rva', name: 'Punto Final Reserva', brand: 'Renacer', category: 'Vinos', price: 6889, promo: '4+1', image: '/bebidas/puntoFinalRva.webp' },
    { id: 'renacer', name: 'Renacer', brand: 'Renacer', category: 'Vinos', price: 20769, promo: '3+1', image: '/bebidas/renacer.webp' },
    // CRUX
    { id: 'crux', name: 'Crux', brand: 'Crux', category: 'Vinos', price: 5013, promo: '5+1', image: '/bebidas/crux.webp' },
    { id: 'crux-xtra', name: 'Crux Xtra', brand: 'Crux', category: 'Vinos', price: 10464, promo: '5+1', image: '/bebidas/cruxXtra.webp' },
    // SALENTEIN
    { id: 'killka', name: 'Killka', brand: 'Salentein', category: 'Vinos', price: 5471, image: '/bebidas/killka.webp' },
    // SAN HUBERTO
    { id: 'san-huberto-clasico', name: 'San Huberto Clásico', brand: 'San Huberto', category: 'Vinos', price: 3064, promo: '10+2', image: '/bebidas/sanHubertoClasico.webp' },
    { id: 'san-huberto-rva', name: 'San Huberto Reserva', brand: 'San Huberto', category: 'Vinos', price: 3511, promo: '10+2', image: '/bebidas/sanHubertoRva.webp' },
    { id: 'ugarteche', name: 'Ugarteche', brand: 'San Huberto', category: 'Vinos', price: 2458, promo: '10+2', image: '/bebidas/ugarteche.webp' },
    { id: 'gran-nina', name: 'Gran Niña', brand: 'San Huberto', category: 'Vinos', price: 11679, promo: '5+1', image: '/bebidas/granNina.webp' },
    { id: 'nina-extra-brut', name: 'Niña Extra Brut', brand: 'San Huberto', category: 'Espumante', price: 9733, promo: '5+1', image: '/bebidas/ninaExtraBrut.webp' },
    // ATAMISQUE
    { id: 'serbal', name: 'Serbal', brand: 'Atamisque', category: 'Vinos', price: 6900, promo: '5+1', image: '/bebidas/serbal.webp' },
    // CORDERO CON PIEL DE LOBO
    { id: 'cordero-piel-lobo', name: 'Cordero con Piel de Lobo', brand: 'Cordero con Piel de Lobo', category: 'Vinos', price: 3655, promo: '10+1', image: '/bebidas/corderoPielLobo.webp' },
    // VISTALVA
    { id: 'mundo-chiquito', name: 'Mundo Chiquito', brand: 'Vistalva', category: 'Vinos', price: 4091, promo: '10+1', image: '/bebidas/mundoChiquito.webp' },
    { id: 'tomero', name: 'Tomero', brand: 'Vistalva', category: 'Vinos', price: 6819, promo: '10+1', image: '/bebidas/tomero.webp' },
    // PIXEL
    { id: 'pixel', name: 'Pixel', brand: 'Pixel', category: 'Vinos', price: 2703, promo: '5+1', image: '/bebidas/pixel.webp' },
];

export const categories = ['Todos', 'Whisky', 'Gin', 'Vodka', 'Ron', 'Licor', 'Aperitivo', 'Vermut', 'Vinos', 'Espumante'];