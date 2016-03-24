define([
    'esri/units',
    'esri/geometry/Extent',
    'esri/config',
    'esri/tasks/GeometryService',
    'esri/layers/ImageParameters'
], function (units, Extent, esriConfig, GeometryService, ImageParameters) {

    //url to the proxy
    //esriConfig.defaults.io.proxyUrl = 'proxy/proxy.ashx';
    //esriConfig.defaults.io.alwaysUseProxy = false;

    //url to the geometry server
    esriConfig.defaults.geometryService = new GeometryService('http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer');

    //image parameters for dynamic services, set to png32 for higher quality exports.
    var imageParameters = new ImageParameters();
    imageParameters.format = 'png32';

    return {
        //used for debug.
        isDebug: true,
        //default mapClick mode,
        defaultMapClickMode: 'identify',
        //map options
        //I'm in Dallas, so .. guess where I am centering.
        mapOptions: {
            basemap: 'streets',
            center: [-96.8024, 32.7833],
            zoom: 10,
            sliderStyle: 'small'
        },

        //operational Layers:  This is an array of layers which I will try to add later.
        operationalLayers: [
        {
            //layers will be added here later
        }],

        widgets: {
            //basemaps
            basemaps: {
                include: true,
                id: 'basemaps',
                type: 'domNode',
                path: 'gis/dijit/Basemaps',
                srcNodeRef: 'basemapsDijit',
                options: 'config/basemaps'
            },
            //scalebar
            scalebar: {
                include: true,
                id: 'scalebar',
                type: 'map',
                path: 'esri/dijit/Scalebar',
                options: {
                    map: true,
                    attachTo: 'bottom-left',
                    scalebarStyle: 'line',
                    scalebarUnit: 'dual'
                }
            },
            //homebutton
            homeButton: {
                include: true,
                id: 'homeButton',
                type: 'domNode',
                path: 'esri/dijit/HomeButton',
                srcNodeRef: 'homeButton',
                options: {
                    map: true,
                    extent: new Extent({
                        xmin: -97.50,
                        ymin: 32.50,
                        xmax: -96.50,
                        ymax: 33.0975,
                        spatialReference: {
                            wkid: 4326
                        }
                    })
                }
            },
            bookmarks: {
                include: true,
                id: 'bookmarks',
                type: 'titlePane',
                position: 0,
                path: 'gis/dijit/Bookmarks',
                title: 'Bookmarks',
                open: false,               
                options: 'config/bookmarks'
            }

        }
    }

});