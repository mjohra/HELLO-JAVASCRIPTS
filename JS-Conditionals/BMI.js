/*

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight = 100;
let height = 1.8;
let bmi_calculate = 0;

if(height === "" | isNaN(height)){
    console.log("Provide a valid height in meter")
}
else if(weight ==="" | isNaN(weight)){
    console.log("Provide a valid Weight in kg")
}

else{
    bmi_calculate = (weight / (height**2)).toFixed(2);
    if(bmi_calculate < 18.5){
        console.log("BMI:"+ bmi_calculate+", you are underweight");
    }
    else if(bmi_calculate >= 18.5 && bmi_calculate <=24.9){
        console.log("BMI:"+ bmi_calculate+", you are Normal");
    }
    else if(bmi_calculate >=25 && bmi_calculate <= 29.9){
        console.log("BMI:"+ bmi_calculate+", you are overweight.");
    }
    else{
        console.log("Your are obese");
    }
}