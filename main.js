function gst_calculator(){
    console.log("gst");
    let amount = document.getElementById("amount").value;
    let res = amount*(105/100);
    console.log(res);
    alert(res);
    return res;
}
gst_calculator();