$(document).ready(function () {
    var seprovince=["山西省","北京市","陕西省"]
    var secity=[["太原","运城","临汾"],["朝阳区","海淀区","房山区"],["西安市","宝鸡市","咸阳市"]]
    var scountry=[[["文水县","丹寨县","黔江县"],["长治县","黎平县","洪洞县"],["长治县","凤翔县","洪洞县"]], [["长治县","长安县","洪洞县"],["长治县","从江县","台江县"],["通道县","丹寨县","三江县"]],
        [["高新区","雁塔区","未央区"],["扶风县","渭滨区","岐山县"],["武功县","周至县","户县"]]]
    var y;
    var n;
    var h;
    $(function(){
        /*创建下拉列表*/
        for(var i= 0;i<seprovince.length;i++){
            $("#province").append("<option>"+seprovince[i]+"</option>")
        }
        /*省份改变*/
        $("#province").change(function(){
            $("#country").children().not(":eq(0)").remove();
            $("#city").children().not(":eq(0)").remove();
            y=$(this).children("option:selected").index();
            var acity=secity[y-1];
            for(var z=0;z<acity.length;z++){
                $("#city").append("<option>"+acity[z]+"</option>")
            }
        });
        /*城市改变*/
        $("#city").change(function(){
            $("#country").children().not(":eq(0)").remove();
            n=$(this).children("option:selected").index();
            h=scountry[y-1][n-1];
            for(var s=0;s<h.length;s++){
                $("#country").append("<option>"+h[s]+"</option>")
            }
        });
    });
})

