(function() {

    'use strict';

    module.exports = (settings) => {
        function isDirectiveAllowed(directive) {
            return settings.directives.includes(directive);
        }
    
        function getDirectiveOrDefault(directive) {
            return isDirectiveAllowed(directive) ? directive : settings.defaultDirective;
        }
    
        function createObject(settings) {
            settings.directives.unshift(settings.defaultDirective);

            return {
                isDirectiveAllowed: isDirectiveAllowed,
                getDirectiveOrDefault: getDirectiveOrDefault,
                getDefaultDirective: () => settings.defaultDirective,
                getHeaderName: () => settings.headerName,
            }
        }

        return createObject(settings);
    };
})();
