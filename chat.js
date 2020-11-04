const Chat = (function(){
    // init 함수
    function init() {
        $(document).on('keydown', 'div.input-div textarea', function(e){
            if(e.keyCode == 13 && !e.shiftKey) {
                e.preventDefault();
                const message = $(this).val();
              // 입력창 clear
               clearTextarea();
            }
        });
    }
 
    return {
        'init': init
    };
})();
 
$(function(){
    Chat.init();
});
