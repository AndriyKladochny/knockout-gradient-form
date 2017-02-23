ko.components.register('gradient-form', {
    viewModel: {
        createViewModel: function (controller, componentInfo) {
            var ViewModel = function (controller, componentInfo) {
                var self = this;

                this.gradient = controller;
                
            };

            return new ViewModel(controller, componentInfo);
        }
    },
    template:
        [
'<div data-bind="text: gradient.test" >',
'</div> '
        ].join('')
});