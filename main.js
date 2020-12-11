var student_array=[];
var display_student_array = [];
function submit() {
    for (var j = 1; j <=4; j++) 
    {
        var student_name =document.getElementById("name_of_the_student_"+j).value;
        console.log(student_name);
        student_array.push(student_name);
    };
    for (var k = 0; k < student_array.length; k++)
    {
        display_student_array.push("<h4>NAME - "+ student_array[k]);
        
    };
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    document.getElementById("display_name_without_commas").innerHTML=display_student_array.join(" ");
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline";
}

function sorting() {
    document.getElementById("display_name_with_commas").innerHTML=display_student_array.sort();
    document.getElementById("display_name_without_commas").innerHTML=display_student_array.sort();
}