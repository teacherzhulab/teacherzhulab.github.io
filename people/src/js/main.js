$.extend({
    StandardPost:function(url,args){
        var body = $(document.body),
            form = $("<form method='post'></form>"),
            input;
        form.attr({"action":url});
        $.each(args,function(key,value){
            input = $("<input type='hidden'>");
            input.attr({"name":key});
            input.val(value);
            form.append(input);
        });

        form.appendTo(document.body);
        form.submit();
        document.body.removeChild(form[0]);
    }
});
function get_url_head(){
    var url = document.location.toString();
    var arrUrl = url.split("//")[1];
    return arrUrl.split("/")[0];
}

function turn_on(){
    $("#menue_line").removeClass("hidden-small");
    $("#menue-buttom").attr("onclick","turn_off()");
    $("#menue-icon").removeClass("buttom_menue");
    $("#menue-icon").addClass("buttom_top");
}
function turn_off(){
    $("#menue_line").addClass("hidden-small");
    $("#menue-buttom").attr("onclick","turn_on()");
    $("#menue-icon").removeClass("buttom_top");
    $("#menue-icon").addClass("buttom_menue");
}
function auto_css(){
    /*for left&right buttom*/
    height=$("div#img_frame").height(); 
    $("div.center_buttom").css("padding-top",height/2);
}
$("document").ready(function(){
    auto_css();
});
$(window).resize(function(){
    auto_css();
});