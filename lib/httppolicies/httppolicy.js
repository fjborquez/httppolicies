(function() {

    'use strict';    

    module.exports = (settings) => {
        settings.directives.unshift(settings.defaultDirective);

        function isDirectiveAllowed(directive) {
            return settings.directives.includes(directive);
        }
    
        function getDirectiveOrDefault(directive) {
            return isDirectiveAllowed(directive) ? directive : settings.defaultDirective;
        }
    
        function createObject() {
            return {
                isDirectiveAllowed: isDirectiveAllowed,
                getDirectiveOrDefault: getDirectiveOrDefault,
                getDefaultDirective: () => settings.defaultDirective,
                getHeaderName: () => settings.headerName,
            }
        }

        return createObject();
    };
})();
