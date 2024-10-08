/*  --------------------  */
window.onload = init;


const rome = ol.proj.fromLonLat([12.5, 41.9]);
const view = new ol.View({
    center: ol.proj.fromLonLat([37.41, 8.82]),
    zoom: 4
});

function init() {
    var map = new ol.Map({
        controls: ol.control.defaults({
            rotate: false,
            attribution: false
        }).extend([new ol.control.ScaleLine]),
        target: 'js-map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: view
    });

}


function onClick(id, callback) {
    debugger;
    document.getElementById(id).addEventListener('click', callback);
}


onClick('pan-to-london', function() {
    debugger;
    view.animate({
        center: rome,
        duration: 2000,
    });
});





/*-----------------------------------------------------------------*/







/*------------------------------------*/



/*
 * Use App.getDependency for Dependency Injection
 * eg: var DialogService = App.getDependency('DialogService');
 */

/* perform any action on the variables within this block(on-page-load) */
App.onAppVariablesReady = function() {
    /*
     * variables can be accessed through 'App.Variables' property here
     * e.g. App.Variables.staticVariable1.getData()
     */
};

/* perform any action on session timeout here, e.g clearing some data, etc */
App.onSessionTimeout = function() {
    /*
     * NOTE:
     * On re-login after session timeout:
     * if the same user logs in(through login dialog), app will retain its state
     * if a different user logs in, app will be reloaded and user is redirected to respective landing page configured in Security.
     */
};

/*
 * This application level callback function will be invoked after the invocation of PAGE level onPageReady function.
 * Use this function to write common logic across the pages in the application.
 * activePageName : name of the page
 * activePageScope: scope of the page
 * $activePageEl  : page jQuery element
 */
App.onPageReady = function(activePageName, activePageScope, $activePageEl) {

};

/*
 * This application level callback function will be invoked after a Variable receives an error from the target service.
 * Use this function to write common error handling logic across the application.
 * errorMsg:    The error message returned by the target service. This message will be displayed through appNotification variable
 *              You can change this though App.Variables.appNotification.setMessage(YOUR_CUSTOM_MESSAGE)
 * xhrObj:      The xhrObject used to make the service call
 *              This object contains useful information like statusCode, url, request/response body.
 */
App.onServiceError = function(errorMsg, xhrObj) {

};