ko.components.register('ak-gradient-form', {
    viewModel: {
        createViewModel: function (controller, componentInfo) {
            var ViewModel = function (controller, componentInfo) {
                var self = this;

                this.gradient = controller;
                //this.previewImg = 
                this.afterRender = function(){
                    $('.ak-gradientform-colorpicker').each(function(ind,el){
                        $(el).colorpicker({
                            container:  $(el), 
                            format: 'rgba'
                        }).on('changeColor', function (e) {
                            var currTarget = e.currentTarget,
                                bindingProp = $(currTarget).find('[data-bind]').
                                                attr('data-bind').split(',')[0].split(':')[1].trim();
                            
                            self.gradient[bindingProp](e.color.toString());

                            //console.log(e.color.toString());
                        });
                    });
                }
            };

            return new ViewModel(controller, componentInfo);
        }
    },
    template:
        [
'<div class="ak-gradientform-wrapper" data-bind="with: gradient">',
'   <div class="ak-gradientform-controls">',
'       <div class="ak-gradientform-colors">',
'           <div id="akColorPickerStart" class="ak-gradientform-colorpicker" >',
'               <input type="text" data-bind="textInput: start" /><span class="input-group-addon"><i></i></span>',
'           </div>',
'           <div id="akColorPickerEnd" class="ak-gradientform-colorpicker" >',
'               <input type="text" data-bind="textInput: stop"  /><span class="input-group-addon"><i></i></span>',
'           </div>',
'       </div>',
'       <div class="ak-gradientform-direction">',
'           ',
'       </div>',
'   </div>',
'   <div class="ak-preview-wrapper">',
'       <div class="ak-gradient-holder" data-bind="style: {background: \'linear-gradient( \'+ direction() + \',\'+ start() +\',\'+ stop() +\')\'}"></div>',
'   </div>',
'   <div class="clear ms-clear"></div>',
'</div> ',
'<!-- ko text: afterRender() --><!-- /ko -->',
        ].join('')
});