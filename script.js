 require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "hybrid"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,

          extent: {
            // autocasts as new Extent()
            xmin: -10366387,
            ymin: 4902434,
            xmax: -10356735,
            ymax: 4919960,
            spatialReference: 102100
          }
        });

        /********************
         * Add feature layer
         ********************/

        var featureLayer1 = new FeatureLayer({     url:"https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/Commission_prop_footprint/FeatureServer"});
   
        map.add(featureLayer1);
   
   var featureLayer2 = new FeatureLayer({     url:"https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/Normal_Pool/FeatureServer"});
   
        map.add(featureLayer2);
      });
