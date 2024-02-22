var wms_layers = [];

var format_fusionbtsacd_0 = new ol.format.GeoJSON();
var features_fusionbtsacd_0 = format_fusionbtsacd_0.readFeatures(json_fusionbtsacd_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fusionbtsacd_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fusionbtsacd_0.addFeatures(features_fusionbtsacd_0);
var lyr_fusionbtsacd_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fusionbtsacd_0, 
                style: style_fusionbtsacd_0,
                interactive: true,
    title: 'fusion btsa cd<br />\
    <img src="styles/legend/fusionbtsacd_0_0.png" /> CFA Caulnes<br />\
    <img src="styles/legend/fusionbtsacd_0_1.png" /> CFA de la Moselle<br />\
    <img src="styles/legend/fusionbtsacd_0_2.png" /> CFA de la Vienne<br />\
    <img src="styles/legend/fusionbtsacd_0_3.png" /> CFA de l\'ESA d\'Angers<br />\
    <img src="styles/legend/fusionbtsacd_0_4.png" /> CFA de l\'Indre<br />\
    <img src="styles/legend/fusionbtsacd_0_5.png" /> CFA de Merdrignac<br />\
    <img src="styles/legend/fusionbtsacd_0_6.png" /> CFA de Seine Maritime<br />\
    <img src="styles/legend/fusionbtsacd_0_7.png" /> CFA des Ardennes<br />\
    <img src="styles/legend/fusionbtsacd_0_8.png" /> CFA du Loiret<br />\
    <img src="styles/legend/fusionbtsacd_0_9.png" /> CFA du Lot et Garonne<br />\
    <img src="styles/legend/fusionbtsacd_0_10.png" /> CFA du Tarn<br />\
    <img src="styles/legend/fusionbtsacd_0_11.png" /> CFA Forma\'Terra à St Paul<br />\
    <img src="styles/legend/fusionbtsacd_0_12.png" /> CFA Le Robillard<br />\
    <img src="styles/legend/fusionbtsacd_0_13.png" /> CFPPA de Genech<br />\
    <img src="styles/legend/fusionbtsacd_0_14.png" /> Ecole des Etablières de La Roche Sur Yon<br />\
    <img src="styles/legend/fusionbtsacd_0_15.png" /> EPLEFPA de Châlons en Champagne<br />\
    <img src="styles/legend/fusionbtsacd_0_16.png" /> EPLEFPA de Quétigny Plombières Les Dijon<br />\
    <img src="styles/legend/fusionbtsacd_0_17.png" /> IAHP de Genech<br />\
    <img src="styles/legend/fusionbtsacd_0_18.png" /> Institut privé Ch. Quentin de Pierrefonds<br />\
    <img src="styles/legend/fusionbtsacd_0_19.png" /> LAP de Sainte Maure<br />\
    <img src="styles/legend/fusionbtsacd_0_20.png" /> LEAP de Pommerit Jaudy<br />\
    <img src="styles/legend/fusionbtsacd_0_21.png" /> LEAP La Touche de Ploermel<br />\
    <img src="styles/legend/fusionbtsacd_0_22.png" /> LEGTA Aix Valabre<br />\
    <img src="styles/legend/fusionbtsacd_0_23.png" /> LEGTA Amiens le Paraclet<br />\
    <img src="styles/legend/fusionbtsacd_0_24.png" /> LEGTA Bourg les Valence<br />\
    <img src="styles/legend/fusionbtsacd_0_25.png" /> LEGTA Carcassonne<br />\
    <img src="styles/legend/fusionbtsacd_0_26.png" /> LEGTA Croix Rivail<br />\
    <img src="styles/legend/fusionbtsacd_0_27.png" /> LEGTA Dax<br />\
    <img src="styles/legend/fusionbtsacd_0_28.png" /> LEGTA de Châteauroux<br />\
    <img src="styles/legend/fusionbtsacd_0_29.png" /> LEGTA de la Thiérache<br />\
    <img src="styles/legend/fusionbtsacd_0_30.png" /> LEGTA de l\'Oise<br />\
    <img src="styles/legend/fusionbtsacd_0_31.png" /> LEGTA E. de Chambray<br />\
    <img src="styles/legend/fusionbtsacd_0_32.png" /> LEGTA Fontaines<br />\
    <img src="styles/legend/fusionbtsacd_0_33.png" /> LEGTA La Côte Saint André<br />\
    <img src="styles/legend/fusionbtsacd_0_34.png" /> LEGTA \'le Robillard\'<br />\
    <img src="styles/legend/fusionbtsacd_0_35.png" /> LEGTA Metz Courcelles Chaussy<br />\
    <img src="styles/legend/fusionbtsacd_0_36.png" /> LEGTA Obernai<br />\
    <img src="styles/legend/fusionbtsacd_0_37.png" /> LEGTA Poitiers Venours<br />\
    <img src="styles/legend/fusionbtsacd_0_38.png" /> LEGTA Toulouse<br />\
    <img src="styles/legend/fusionbtsacd_0_39.png" /> LEGTA Yvetot<br />\
    <img src="styles/legend/fusionbtsacd_0_40.png" /> LEGTPA d\'Auxerre<br />\
    <img src="styles/legend/fusionbtsacd_0_41.png" /> Lycée de Pouillé des Ponts de Cé<br />\
    <img src="styles/legend/fusionbtsacd_0_42.png" /> MFREO de Campagne Les Boulonnais<br />\
    <img src="styles/legend/fusionbtsacd_0_43.png" /> MFREO de Coqueréaumont<br />\
    <img src="styles/legend/fusionbtsacd_0_44.png" /> MFREO du Haut Vaucluse<br />\
    <img src="styles/legend/fusionbtsacd_0_45.png" /> Site d\'Arras du CFPPA du Pas de Calais<br />\
    <img src="styles/legend/fusionbtsacd_0_46.png" /> Site d\'Arras du LEGTA du Pas de Calais<br />\
    <img src="styles/legend/fusionbtsacd_0_47.png" /> Site d\'Auch du LEGTA Auch Beaulieu Lavacant<br />\
    <img src="styles/legend/fusionbtsacd_0_48.png" /> Site de Castelnaudary de l\'Institut Saint Joseph<br />\
    <img src="styles/legend/fusionbtsacd_0_49.png" /> Site de Moissac du CFPPA du Tarn et Garonne<br />\
    <img src="styles/legend/fusionbtsacd_0_50.png" /> Site de Nermont du LEAP de Nermont<br />\
    <img src="styles/legend/fusionbtsacd_0_51.png" /> Site Montardon du CFPPA des Pyrénées Atlantiques<br />\
    <img src="styles/legend/fusionbtsacd_0_52.png" /> Site Yvetot du CFPPA de Seine Maritime agricole<br />'
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

lyr_fusionbtsacd_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);
var layersList = [lyr_fusionbtsacd_0,lyr_GoogleSatellite_1];
lyr_fusionbtsacd_0.set('fieldAliases', {'nom': 'nom', });
lyr_fusionbtsacd_0.set('fieldImages', {'nom': 'TextEdit', });
lyr_fusionbtsacd_0.set('fieldLabels', {'nom': 'no label', });
lyr_fusionbtsacd_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});